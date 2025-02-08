import React, { useState, useEffect, useRef } from 'react'
import EventHeader from '../Header/EventHeader'

import Footer from "../Footer/footer"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { masterCalculation } from "./../Helpers/Utils/MasterCalculation";


const DiscountForm = () => {

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
    write_desc:'',
    amount:0
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

  

  const masterCalulation = () => { }



  useEffect(() => {
    getCountry()
    getdomainid()
    return window.scrollTo(0, 0)
  }, [])


  const isDateValid = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    // Ensure it's a valid date
    if (!(date instanceof Date) || isNaN(date)) {
      return false;
    }
    // Compare with today's date
    return date >= today.setHours(0, 0, 0, 0); // Returns true if not expired
  };

 




  // new code start
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSubmitFormData({ ...submitFormData, [name]: value })
  }

  const handleInputChangeAmount = (e) => {
    const { name, value } = e.target
    setSubmitFormData({ ...submitFormData, [name]: value })
    const amount = Number.parseFloat(value)

    const { subtotal, processingFee, grandTotal } = masterCalculation({
      regiPrice: amount,
      accPrice: 0,
      addOn: 0,
    })
   
    setregiPriceCal(e.target.value)
    regiPricecalCurrent.current = e.target.value;
    setsubTotalPrice(subtotal)
    subtotCurrent.current = subtotal
    setProcessfee(processingFee)
    procssfeeCurrent.current = processingFee
    setTotalPrice(grandTotal)
    grandtotCurrent.current = grandTotal
    setSubmitFormData({ ...submitFormData, [name]: value })
    console.log("verifychange",submitFormData);
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
    const regipayload = {

      title: submitFormData.title,
      name: submitFormData.name,
      email: submitFormData.email,
      telephone: submitFormData.telephone,
      organization: submitFormData.organization,
      city: submitFormData.city,
      billing_address: submitFormData.billing_address,
      postal_code: "123",
      no_of_nights: submitFormData.no_of_nights,
      reg_cat_val: submitFormData.reg_cat_val,
      add_on: submitFormData.add_on,
      reg_price: "0.00",
      acc_price: "0.00",
      acc_per_price: "0.00",
      subtot: submitFormData.subtot,
      procfee: submitFormData.procfee,
      grand_tot: submitFormData.grand_tot,
      domain: domainId,
      country: submitFormData.country,
      register_category: 5,
      accommodation: 1,
      write_desc: submitFormData.write_desc,
      amount:submitFormData.amount
    }
    console.log("regipayload",regipayload);
    const currentEvents = location.pathname.split("/")
    setCurrentEventName(currentEvents[1])

    try {
      const res = await axios.post(`${baseurl}${currentEvents[1]}/registration/registrationform/`, regipayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setResponse(res.data);
      console.log("transapires", res);
      // window.location.reload();
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
    const payload = {
      domain_name: currentEvents[1]
    }
    try {
      const res = await axios.post(`${baseurl}/api/get-domain/`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setdomainId(res.data.id);
      console.log("domaindetails", res);
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
    return actions.order.capture().then(async (details) => {
      // alert("Transaction completed By" + details.payer.name.given_name)
      console.log(details, "ayment success");
      //merchant_id:details.purchase_units[0].amount.payee.merchant_id,
      const payload = {
        "create_time": details.create_time,
        "transaction_id": details.id,
        "intent": details.intent,
        "country_code": details.payer.address.country_code,
        "email_address": details.payer.email_address,
        "name": details.payer.name.given_name + " " + details.payer.name.surname,
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
        console.log("transapires", res);
        handleSubmitForm();
      } catch (error) {
        console.error("Error submitting data", error);
      }

      if (details.status == "COMPLETED") {
        alert("Your Registration Got Success");
        navigate("/" + currentEvents[1] + "/discount-form");
      } else {
        alert("Your Registration Got Failed Please try Again");
        navigate("/" + currentEvents[1] + "/discount-form");
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
          : { ...item, checked: false } // Keep other items unchanged
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
                    <option value="">Select</option>
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

            <div className="form-group">
              <label htmlFor="billing">Write Description:</label>
              <textarea
                className="form-control"
                id="billing"
                name="write_desc"
                rows="3"
                onChange={handleInputChange}
                placeholder="10% Discount on registration fee"
              ></textarea>
            </div>

            <div className="row">
              <div className="col-sm-4 mb-4 ">
                <label for="">Enter Amount</label>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                  </div>
                  <input type="text"
                  onChange={handleInputChangeAmount}
                    className="form-control"
                    id="organization"
                    name='amount'
                    // value={submitFormData.reg_price}
                    placeholder="Enter Amount" />
                </div>
              </div>
            </div>
          </div>

         
          
          {/* packages types end */}

          {/* acomidation start */}
          <div className=" mt-5">

            <div className="card">
              <div className="card-header bg-light">
                <h5>SUMMARY</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Registration Price:</span> $
                      <b className="text-primary">{Number.parseFloat(regiPricecalCurrent.current || 0).toFixed(2)}</b>
                    </p>
                    {/* <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Accommodation Price:</span> $
                      <b className="text-primary">{Number.parseFloat(accpricecal || 0).toFixed(2)}</b>
                    </p>
                    <p>
                      <span style={{ width: "350px", display: "inline-block" }}>Accompanying Person Price:</span> $
                      <b className="text-primary">{Number.parseFloat(addOn || 0).toFixed(2)}</b>
                    </p> */}
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
                    <div className="input-group mb-3 mx-auto my-4" style={{ width: "300px" }}>
                      <span className="input-group-text px-3" id="basic-addon1">
                        $
                      </span>
                      <input
                        type="text"
                        value={Number.parseFloat(grandtotCurrent.current || 0).toFixed(2)}
                        className="form-control form-control-lg bg-white text-primary font-weight-bold"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <label htmlFor="option1" className="mr-5">
                      <input type="radio" onChange={() => togglePaymetOption('cc-avenue')} name="option" id="option1" value="option2" className="mr-3" />
                      <img
                        src={process.env.PUBLIC_URL + "/" + "images/cc-avenue_logo.png" || "/placeholder.svg"}
                        alt="logo"
                        style={{ width: 150 }}
                      />
                    </label>

                    <label htmlFor="option2">
                      <input type="radio" name="option" onChange={() => togglePaymetOption('paypal')} id="option2" value="option2" className="mr-3" />
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

                  {paymentMethod === 'paypal' ? (
                    <PayPalScriptProvider options={initialOption}>
                      <PayPalButtons
                        style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                        onError={handleError}
                      ></PayPalButtons>
                    </PayPalScriptProvider>
                  ) : (
                    <button className="btn btn-primary" style={{ backgroundColor: '#ffc439', width: '100%', borderRadius: 2 }} onClick={handleSubmitForm}>
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

export default DiscountForm