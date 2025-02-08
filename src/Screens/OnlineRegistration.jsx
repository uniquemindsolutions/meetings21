import { useEffect, useState, useRef } from "react"
import EventHeader from "../Header/EventHeader"
import Footer from "../Footer/footer"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { masterCalculation } from "./../Helpers/Utils/MasterCalculation";

const OnlineRegistration = () => {
  const baseurl = process.env.REACT_APP_API_URL
  const location = useLocation()
  const navigate = useNavigate();

  const submitForm = {
    title: "",
    name: "",
    email: "",
    telephone: "",
    organization: "",
    city: "",
    country: 0,
    singleacc: "",
    doubleacc: "",
    tripleacc: "",
    billing_address: "",
    postal_code: "",
    no_of_nights: 1,
    domain: 0,
    register_category: 0,
    accommodation: 0,
    reg_cat_val: 0,
    add_on: 0,
    reg_price: 0,
    acc_price: 0,
    acc_per_price: 0,
    subtot: 0,
    procfee: 0,
    grand_tot: 0,
  }

  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [selectedPlans, setSelectedPlans] = useState([])
  const [promoCode, setPromoCode] = useState(false)
  const [accompanying, setAccompanying] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState("")
  const [totalPrice, setTotalPrice] = useState(0) // Base registration price

  const [subtotalPrice, setsubTotalPrice] = useState(0)

  const [submitFormData, setSubmitFormData] = useState(submitForm)
  const [countries, setCountries] = useState([])

  const [regiFeedata, setRegifeeData] = useState([])
  const [accmData, setAccmData] = useState([]);
  const [currentEventName, setCurrentEventName] = useState("")
  const [defaultdata, setdefaultData] = useState("")

  const [isChecked, setIsChecked] = useState(false) // Initial state is false (unchecked)

  const [regiPricecal, setregiPriceCal] = useState("")
  const [accpricecal, setaccpriceCal] = useState("")
  const [addOn, setAddOn] = useState("")
  const [subtot, setsubTot] = useState("")
  const [procssfee, setProcessfee] = useState(0)
  const [grandtot, setGrandTot] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [register_category, setregister_category] = useState("")

  const regiPricecalCurrent = useRef(regiPricecal)
  const accpricecalCurrent = useRef(accpricecal)
  const addOnCurrent = useRef(addOn)
  const procssfeeCurrent = useRef(procssfee)
  const subtotCurrent = useRef(subtot)
  const grandtotCurrent = useRef(totalPrice)
  const register_categoryCurrent = useRef(register_category)

  const submitFormDataCurrent = useRef(submitFormData)

  const [domainId, setdomainId] = useState("")
  

  const handleChangeaddon = (event) => {
    setIsChecked(event.target.checked)
    const { name, value } = event.target
    const newAddOn = Number.parseFloat(value)

    const { subtotal, processingFee, grandTotal } = masterCalculation({
      regiPrice: Number.parseFloat(regiPricecalCurrent.current) || 0,
      accPrice: Number.parseFloat(accpricecalCurrent.current) || 0,
      addOn: newAddOn,
    })

    setAddOn(newAddOn)
    addOnCurrent.current = newAddOn
    setsubTotalPrice(subtotal)
    subtotCurrent.current = subtotal
    setProcessfee(processingFee)
    procssfeeCurrent.current = processingFee
    setTotalPrice(grandTotal)
    grandtotCurrent.current = grandTotal

    setTotalPrice(grandTotal)
    

    setSubmitFormData((prev) => ({
      ...prev,
      add_on: newAddOn,
      subtot: subtotal,
      procfee: processingFee,
      grand_tot: grandTotal,
    }))

    submitFormDataCurrent.current = submitFormData

    console.log("submitformvalues",submitFormData);
  }

  const masterCalulation = () => {}

  const basedata = [
    { key: "registration_type", name: "Registration Type " },
    { key: "end_date", name: "Date" },
    { key: "invited_presentation", name: "Invited Presentation" },
    { key: "oral_presentation", name: "Oral Presentation" },
    { key: "poster_presentaion", name: "Poster Presentation" },
    { key: "student_delegate", name: "Student Delegate" },
    { key: "delegate", name: "Delegate" },
    { key: "virtual_presentation", name: "Virtual Presentation" },
    { key: "accommodation_name", name: "accommodation_name" },
    { key: "One_Night", name: "One_Night" },
    { key: "two_Nights", name: "two_Nights" },
    { key: "three_Nights", name: "three_Nights" },
    { key: "four_Nights", name: "four_Nights" },
  ]

  const getNameByKey = (key) => {
    const item = basedata.find((entry) => entry.key === key)
    return item ? item.name : "Not Found"
  }

  useEffect(() => {
    getCountry()
    getregfeeData()
    getaccmData()
    getdomainid()
    return window.scrollTo(0, 0)
  }, [])

  const getregfeeData = async () => {
    const currentEvents = location.pathname.split("/")
    setCurrentEventName(currentEvents[1])
    try {
      const res = await axios.get(`${baseurl}${currentEvents[1]}/registration/register_categorys/`);
      let tempList = [];

      if (res && res?.data && res.data.length) {
        // Step 1: Sort the data by end_date in ascending order
        let sortedData = res.data.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));

        // Step 2: Find the first future (non-expired) date and mark it as true
        let isGotValidPlan = false;

        for (let i = 0; i < sortedData.length; i++) {
          const el = sortedData[i];
          if (!isGotValidPlan && isDateValid(el.end_date)) {
            // Mark the first valid future date as true
            isGotValidPlan = true;
            tempList.push({ ...el, isAllowedToSelect: true });
          } else {
            // All other future dates and expired dates get false
            tempList.push({ ...el, isAllowedToSelect: false });
          }
        }

        // Step 3: Update the state
        setRegifeeData(tempList);
      }




    } catch {
      setError("Error loaded")
    }
  }

  const isDateValid=(dateString)=>{
    const date = new Date(dateString);
    const today = new Date();
    // Ensure it's a valid date
    if (!(date instanceof Date) || isNaN(date)) {
      return false;
    }
    // Compare with today's date
    return date >= today.setHours(0, 0, 0, 0); // Returns true if not expired
  };

  const getaccmData = async () => {
    const currentEvents = location.pathname.split("/")
    setCurrentEventName(currentEvents[1])
    try {
      const res = await axios.get(`${baseurl}${currentEvents[1]}/registration/accommodations/`);
      if(res && res.data && res.data?.length){
        setAccmData(res.data)
      }

      console.log("speakersdata ===", res.data)
    } catch {
      setError("Error loaded")
    }
  }


  const onChangeAccmData = (val, index) => {
    setAccmData((prev) => 
      prev.map((item, i) => 
        i === index 
          ? { ...item, selectedPrice: val } // Update the object with the new key and value
          : {...item, selectedPrice:0} // Keep other items unchanged
      )
    );
  };
  

  // new code start
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSubmitFormData({ ...submitFormData, [name]: value })
  }

  const handleInputChangeCountry = (e) => {
    const { name, value } = e.target
    console.log("country checking ===", e)
    setSubmitFormData({ ...submitFormData, [name]: value })
  }

  const handleSubmitForm = async () => {
    // e.preventDefault()
    console.log(
      "formdata",
      submitFormData
    )
    const regipayload={
      
        title:submitFormData.title,
        name: submitFormData.name,
        email: submitFormData.email,
        telephone: submitFormData.telephone,
        organization: submitFormData.organization,
        city: submitFormData.city,
        billing_address: submitFormData.billing_address,
        postal_code: "123",
        no_of_nights: submitFormData.no_of_nights,
        reg_cat_val:submitFormData.reg_cat_val,
        add_on: submitFormData.add_on,
        reg_price: "0.00",
        acc_price: "0.00",
        acc_per_price: "0.00",
        subtot: submitFormData.subtot,
        procfee: submitFormData.procfee,
        grand_tot: submitFormData.grand_tot,
        domain: domainId,
        country: submitFormData.country,
        register_category: submitFormData.register_category,
        accommodation: submitFormData.accommodation
    
    }

    const currentEvents = location.pathname.split("/")
    setCurrentEventName(currentEvents[1])

    try {
      const res = await axios.post(`${baseurl}${currentEvents[1]}/registration/registrationform/`, regipayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setResponse(res.data);
      console.log("transapires",res);
      window.location.reload();
      handleReset();
      
      
    } catch (error) {
      console.error("Error submitting data", error);
    }


  }

  const getCountry = async () => {
    try {
      const res = await axios.get("https://meetings21.com/Meetings21Backend/api/Country/")
      setCountries(res.data)
    } catch (err) {
      setError("No data found")
    }
  }

  const getdomainid = async () => {
    const currentEvents = location.pathname.split("/")
    setCurrentEventName(currentEvents[1]);
    const payload={
      domain_name:currentEvents[1]
    }
    try {
      const res = await axios.post(`${baseurl}/api/get-domain/`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setdomainId(res.data.id);
      console.log("domaindetails",res);
    } catch (error) {
      console.error("Error submitting data", error);
    }
  }

  const countryList = (countries) => {
    if (!countries || countries.length === 0) {
      return <option>No country found</option>
    }
    return countries.map((c) => (
      <option key={c.id} value={c.id}>
        {c.country_name}
      </option>
    ))
  }
  // new code end

  const plans = [
    {
      title: "Early Bird Registration",
      date: "Before December 19, 2024",
      price: {
        Academic: 899,
        Industry: 999,
        Student: 699,
        Virtual: 399,
      },
      highlight: false,
    },
    {
      title: "Mid Term Registration",
      date: "Before January 09, 2025",
      price: {
        Academic: 1099,
        Industry: 1199,
        Student: 749,
        Virtual: 499,
      },
      highlight: true,
    },
    {
      title: "Late Registration",
      date: "Before January 09, 2025",
      price: {
        Academic: 1299,
        Industry: 1399,
        Student: 799,
        Virtual: 599,
      },
      highlight: false,
    },
  ]

  const handleCheckboxChange = (value, index,planid) => {
    const newRegiPrice = Number.parseFloat(value)
    const { subtotal, processingFee, grandTotal } = masterCalculation({
      regiPrice: newRegiPrice,
      accPrice: Number.parseFloat(accpricecalCurrent.current) || 0,
      addOn: Number.parseFloat(addOnCurrent.current) || 0,
    })

    console.log("register_category",planid);
  
    setregister_category(index + 1 )
    register_categoryCurrent.current = index+1;
    setSubmitFormData({ ...submitFormData, register_category: planid})
  
    
    setSubmitFormData({ ...submitFormData, reg_cat_val: value })
    setregiPriceCal(newRegiPrice.toFixed(2))
    regiPricecalCurrent.current = newRegiPrice.toFixed(2)
    setsubTotalPrice(subtotal)
    subtotCurrent.current = subtotal
    setProcessfee(processingFee)
    procssfeeCurrent.current = processingFee
    setTotalPrice(grandTotal)
    grandtotCurrent.current = grandTotal



    setSubmitFormData((prev) => ({
      ...prev,
      register_category:planid,
      subtot: subtotal,
      procfee: processingFee,
      grand_tot: grandTotal,
    }))

    submitFormDataCurrent.current = submitFormData
  }

  const handleRoomSelection = (roomPrice) => {
    setSelectedRoom(roomPrice)
    calculateTotalPrice(accompanying, roomPrice)
  }

  const handleAccompanyingChange = (change) => {
    const updatedCount = Math.max(0, accompanying + change)
    setAccompanying(updatedCount)
    calculateTotalPrice(updatedCount, selectedRoom)
  }

  const calculateTotalPrice = (accompanyingCount, roomPrice) => {
    const basePrice = 1099
    const accompanyingCost = accompanyingCount * 200
    const roomCost = roomPrice || 0
    setTotalPrice(basePrice + accompanyingCost + roomCost)
  }

  const handlePromoCode = () => {
    setPromoCode(true)
    if (promoCode) {
      setPromoCode(false)
    }
  }

  const handleReset = () => {
    setAccompanying(0)
    setSelectedRoom("")
    setTotalPrice(0)
    setSubmitFormData(submitForm)
    setregiPriceCal("")
    setaccpriceCal("")
    setAddOn("")
    setProcessfee(0)
    setIsChecked(false)
    regiPricecalCurrent.current = ""
    accpricecalCurrent.current = ""
    addOnCurrent.current = ""
    procssfeeCurrent.current = 0
    subtotCurrent.current = ""
    grandtotCurrent.current = 0
  }

  const handleaccom = (e, index,masterdata) => {
    
    const { name, value } = e.target

    const selectedName = e.target.options[e.target.selectedIndex].text;
    console.log("nofonight",selectedName,masterdata.id);
    const newAccPrice = Number.parseFloat(value)
    const { subtotal, processingFee, grandTotal } = masterCalculation({
      regiPrice: Number.parseFloat(regiPricecalCurrent.current) || 0,
      accPrice: newAccPrice,
      addOn: Number.parseFloat(addOnCurrent.current) || 0,
    })

    setSubmitFormData({ ...submitFormData, accommodation: masterdata.id })
    setSubmitFormData({ ...submitFormData, no_of_nights: selectedName })
    setaccpriceCal(newAccPrice.toFixed(2))
    accpricecalCurrent.current = newAccPrice.toFixed(2)
    setsubTotalPrice(subtotal)
    subtotCurrent.current = subtotal
    setProcessfee(processingFee)
    procssfeeCurrent.current = processingFee
    setTotalPrice(grandTotal)
    grandtotCurrent.current = grandTotal

    setSubmitFormData((prev) => ({
      ...prev,
      accommodation: masterdata.id,
      subtot: subtotal,
      procfee: processingFee,
      grand_tot: grandTotal,
    }))

    submitFormDataCurrent.current = submitFormData;

    onChangeAccmData(value, index);
  }

  const initialOption = {
    "client-id": "AVu9_6n12pwbZY6nay-AwpvrJh2q0UF4ckAzxf3paq7TpDuRLE0ry0Ub9w6HiqXI8PK_LmvpUPUYDFH0",
    currency: "USD",
    intent: "capture",
  }
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: grandtotCurrent.current,
          },
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async(details) => {
      // alert("Transaction completed By" + details.payer.name.given_name)
      console.log(details, "ayment success");
//merchant_id:details.purchase_units[0].amount.payee.merchant_id,
      const payload={
        "create_time": details.create_time,
        "transaction_id": details.id,
        "intent": details.intent,
        "country_code": details.payer.address.country_code,
        "email_address": details.payer.email_address,
        "name": details.payer.name.given_name+" "+details.payer.name.surname,
        "payer_id": details.payer.payer_id,
        "currency_code": details.purchase_units[0].amount.currency_code,
        "currency_value": details.purchase_units[0].amount.value,
        "merchant_email_address": details.purchase_units[0].payee.email_address,
        "address_line_1": details.purchase_units[0].shipping.address.address_line_1,
        "admin_area_1": details.purchase_units[0].shipping.address.admin_area_1,
        "admin_area_2": details.purchase_units[0].shipping.address.admin_area_2,
        "postal_code": details.purchase_units[0].shipping.address.postal_code,
        "soft_descriptor": details.purchase_units[0].soft_descriptor,
        "status": details.status,
        "update_time": details.update_time,
        "domain": 2
      }

      
      
      // const res = await axios.get(`${baseurl}${currentEvents[1]}/registration/accommodations/`);
      // if(res && res.data && res.data?.length){

      // }

      const currentEvents = location.pathname.split("/")
      setCurrentEventName(currentEvents[1])

      try {
        const res = await axios.post(`${baseurl}${currentEvents[1]}/Transaction_details`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // setResponse(res.data);
        console.log("transapires",res);
        handleSubmitForm();
      } catch (error) {
        console.error("Error submitting data", error);
      }

   if(details.status=="COMPLETED"){
      alert("Your Registration Got Success");
      navigate("/"+currentEvents[1]+"/online-registration");
   }else{
    alert("Your Registration Got Failed Please try Again");
    navigate("/"+currentEvents[1]+"/online-registration");
   }


    })
  }
  const handleError = (err) => {
    console.error("PayPal error:", err)
    alert("An error occurred with PayPal. Please try again later.")
  }


  const togglePaymetOption = (type) => {
    setPaymentMethod(type);
  }

  const handleChangeCheckBox = (index) => {
    setRegifeeData((prev) => 
      prev.map((item, i) => 
        i === index 
          ? { ...item, checked: true } // Update the object with the new key and value
          : {...item, checked:false} // Keep other items unchanged
      )
    );
  }




  return (
    <main>
      <EventHeader />
      <section className="sub-banner-main-section w-100 justify-content-center">
        <div className="sub-banner-inner-con text-center">
          <h1>Online Registration</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-inline-block mb-0">
              <li className="breadcrumb-item d-inline-block">
                <Link to="/">HOME</Link>
              </li>
              <li className="breadcrumb-item active d-inline-block" aria-current="page">
                Online Registration
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <div className="clearfix"></div>
      <div className="container padding-top">
        <form className="p-4 border rounded shadow-sm mb-5">
          <div className="form-section">
            <h5>Personal Details</h5>
            <div className="row">
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <select
                    onChange={handleInputChange}
                    name="title"
                    value={submitFormData.title}
                    className="form-control"
                    id="title"
                  >
                    <option value="Prof.">Prof.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </div>
              </div>
              <div className="col-10">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={submitFormData.name}
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                      value={submitFormData.email}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="phone">Telephone:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="telephone"
                      onChange={handleInputChange}
                      value={submitFormData.telephone}
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-building"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="organization"
                  onChange={handleInputChange}
                  value={submitFormData.organization}
                  className="form-control"
                  id="organization"
                  placeholder="Organization/Institution"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-city"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="city"
                      onChange={handleInputChange}
                      value={submitFormData.city}
                      className="form-control"
                      id="city"
                      placeholder="Enter your city name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="country">Country:</label>
                <select
                  onChange={handleInputChangeCountry}
                  name="country"
                  value={submitFormData.country || ""}
                  className="form-control"
                  id="country"
                >
                  <option value="">Select country</option>
                  {countryList(countries)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="billing">Billing Address:</label>
              <textarea
                className="form-control"
                id="billing"
                name="billing_address"
                rows="3"
                onChange={handleInputChange}
                placeholder="Enter your billing address"
              ></textarea>
            </div>
          </div>

          {/* packages types start */}
          <div className="my-5 regster-packages">
            <h5 className="mb-4">Registration</h5>
            <div className="row">
              {Array.isArray(regiFeedata) && regiFeedata.length > 0
                ? regiFeedata.map((plan, index) => (
                    <div className="col-md-4" key={index}>
                      <div className={`card text-center ${plan.highlight ? "text-dark" : " text-dark"}`}>
                        <div className="card-header bg-dark text-white">
                          <h5 className="card-title">{plan.registration_type}</h5>
                          <p className="mb-0">{plan.end_date}</p>
                          <small>Oral/ Poster/ Delegate</small>

                          <div className="text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              disabled={!plan.isAllowedToSelect}
                              checked={plan?.checked || false}
                              style={{ height: "25px", width: "25px" }}
                              onChange={(e)=>handleChangeCheckBox(index)}
                            />
                            <br />
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="form-group">
                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  className="mr-2"
                                  value={plan.invited_presentation}
                                  onChange={() => handleCheckboxChange(plan.invited_presentation, index,plan.id)}
                                />
                                Invited Presentation
                              </span>

                              <span className="float-right text-danger font-weight-bold">
                                ${plan.invited_presentation}
                              </span>
                            </label>

                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  className="mr-2"
                                  onChange={() =>  handleCheckboxChange(plan.oral_presentation, index,plan.id)}
                                />
                                Oral Presentation
                                
                              </span>
                              <span className="float-right text-danger font-weight-bold">
                                ${plan.oral_presentation}
                              </span>
                            </label>

                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  onChange={() =>  handleCheckboxChange(plan.poster_presentaion, index,plan.id)}
                                  className="mr-2"
                                />
                                Poster Presentation
                              </span>
                              <span className="float-right text-danger font-weight-bold">
                                ${plan.poster_presentaion}
                              </span>
                            </label>
                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  onChange={() =>  handleCheckboxChange(plan.student_delegate, index,plan.id)}
                                  className="mr-2"
                                />
                                Student Delegate
                              </span>
                              <span className="float-right text-danger font-weight-bold">${plan.student_delegate}</span>
                            </label>
                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  onChange={() =>  handleCheckboxChange(plan.delegate, index,plan.id)}
                                  className="mr-2"
                                />
                                Delegate
                              </span>
                              <span className="float-right text-danger font-weight-bold">${plan.delegate}</span>
                            </label>
                            <label className="d-flex justify-content-between">
                              <span>
                                <input
                                  type="radio"
                                  name={`plan-${index}`}
                                  onChange={() => handleCheckboxChange(plan.virtual_presentation, index,plan.id)}
                                  className="mr-2"
                                />
                                Virtual Presentation
                              </span>
                              <span className="float-right text-danger font-weight-bold">
                                ${plan.virtual_presentation}
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "no data"}
            </div>
          </div>
          {/* packages types end */}

          {/* acomidation start */}
          <div className=" mt-5">
            <div className="row">
              <div className="col-md-12 mb-3">
                <h5>Accommodation</h5>
              </div>
              {Array.isArray(accmData) && accmData.length > 0
                ? accmData.map((room, index) => (
                    <div className="col-md-4 mb-4" key={room.id}>
                      <div className="card" style={{ minHeight: 250 }}>
                        <div className="card-header bg-dark text-white">
                          <h5>
                            {room.accommodation_name}: ${room?.selectedPrice || 0}
                          </h5>
                          <p>Breakfast included</p>
                        </div>
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <div>
                            <div className="d-flex justify-content-between">
                              <strong>
                                <span className="text-primary">Select No. of Nights</span>
                              </strong>
                              <select
                                name="accnights"
                                id=""
                                onChange={(event) => handleaccom(event, index,room)}
                                className="form-selct float-right"
                                value={room?.selectedPrice||0}
                                style={{ width: "50px", height: 25, fontSize: "16px", marginLeft: "10px" }}
                              >
                                <option value={0}>0</option>
                                <option value={room.One_Night}>1</option>
                                <option value={room.two_Nights}>2</option>
                                <option value={room.three_Nights}>3</option>
                                <option value={room.four_Nights}>4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "no data"}
            </div>

            <div className="  align-items-center mb-4">
              <h5>Add on:</h5>
              <label className="mr-3">
                <input type="radio" name="add_on" checked={isChecked} onChange={handleChangeaddon} value="200" />{" "}
                Accompanying Person (<b className="text-primary">$200 for each person</b>)
              </label>
            </div>

            <div className="card">
              <div className="card-header bg-light">
                <h5>SUMMARY</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Registration Price:</span> $
                      <b className="text-primary">{Number.parseFloat(regiPricecal || 0).toFixed(2)}</b>
                    </p>
                    <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Accommodation Price:</span> $
                      <b className="text-primary">{Number.parseFloat(accpricecal || 0).toFixed(2)}</b>
                    </p>
                    <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Accompanying Person Price:</span> $
                      <b className="text-primary">{Number.parseFloat(addOn || 0).toFixed(2)}</b>
                    </p>
                  </div>
                </div>

                <hr />
                <h5>
                  Sub-Total : $
                  <b className="text-primary">{Number.parseFloat(subtotCurrent.current || 0).toFixed(2)}</b>
                </h5>
                <hr />
                <h5>
                  Processing Fee(5%) : $
                  <b className="text-primary">{Number.parseFloat(procssfeeCurrent.current || 0).toFixed(2)}</b>
                </h5>
                <hr />
                <h5>
                  Grand Total : $
                  <b className="text-primary">{Number.parseFloat(grandtotCurrent.current || 0).toFixed(2)}</b>
                </h5>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-body bg-light">
                <div className="text-center mt-4">
                  <h4>
                    By clicking "pay", you agree to the privacy policy, terms & conditions and cancellation policy
                  </h4>
                  <div className="form-group">
                    <label>Selected Price: $ (Inclusive of all taxes)</label>
                    <div class="input-group mb-3 mx-auto my-4" style={{ width: "300px" }}>
                      <span class="input-group-text px-3" id="basic-addon1">
                        $
                      </span>
                      <input
                        type="text"
                        value={Number.parseFloat(grandtotCurrent.current || 0).toFixed(2)}
                        class="form-control form-control-lg bg-white text-primary font-weight-bold"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <label htmlFor="option1" className="mr-5">
                      <input type="radio" onChange={()=>togglePaymetOption('cc-avenue')} name="option" id="option1" value="option2" className="mr-3" />
                      <img
                        src={process.env.PUBLIC_URL + "/" + "images/cc-avenue_logo.png" || "/placeholder.svg"}
                        alt="logo"
                        style={{ width: 150 }}
                      />
                    </label>

                    <label htmlFor="option2">
                      <input type="radio" name="option" onChange={()=>togglePaymetOption('paypal')} id="option2" value="option2" className="mr-3" />
                      <img
                        src={process.env.PUBLIC_URL + "/" + "images/paypal-logo.png" || "/placeholder.svg"}
                        alt="logo"
                        style={{ width: 150 }}
                      />
                    </label>
                  </div>

                  {/* <button className="btn btn-outline-secondary px-3 mr-3" type="button" onClick={handleSubmitForm}>
                    Submit
                  </button>

                  <button className="btn btn-outline-secondary px-3 mr-3" onClick={handleReset}>
                    Reset sddsa
                  </button> */}

                  {paymentMethod==='paypal' ? (
                    <PayPalScriptProvider options={initialOption}>
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createOrder={(data, actions) => createOrder(data, actions)}
                      onApprove={(data, actions) => onApprove(data, actions)}
                      onError={handleError}
                    ></PayPalButtons>
                  </PayPalScriptProvider>
                  ):(
                    <button className="btn btn-primary" style={{backgroundColor:'#ffc439', width:'100%', borderRadius:2}} onClick={handleSubmitForm}>
                      <img
                        src={process.env.PUBLIC_URL + "/" + "images/cc-avenue_logo.png" || "/placeholder.svg"}
                        alt="logo"
                        style={{ width: 100 }}
                      />
                    </button>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default OnlineRegistration