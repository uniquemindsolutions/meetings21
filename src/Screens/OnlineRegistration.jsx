import React, { useEffect, useState, useRef } from 'react'
import EventHeader from '../Header/EventHeader'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const OnlineRegistration = () => {

    const baseurl = process.env.REACT_APP_API_URL;
    const location = useLocation();

    const submitForm = {
        title: "",
        name: "",
        email: "",
        telephone: "",
        organization: "",
        city: "",
        country: 0,
        singleacc:'',
        doubleacc:'',
        tripleacc:'',
        billing_address:'',
        postal_code:'',
        no_of_nights:'',
        domain:0,
        register_category:0,
        accommodation:0,
        reg_cat_val:0,
        add_on:0,
        reg_price:0,
        acc_price:0,
        acc_per_price:0,
        subtot:0,
        procfee:0,
        grand_tot:0
    }

    


    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedPlans, setSelectedPlans] = useState([]);
    const [promoCode, setPromoCode] = useState(false);
    const [accompanying, setAccompanying] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [totalPrice, setTotalPrice] = useState(0); // Base registration price

    const [subtotalPrice, setsubTotalPrice] = useState(0);

    const [submitFormData, setSubmitFormData] = useState(submitForm);
    const [countries, setCountries] = useState([]);

    const [regiFeedata, setRegifeeData] = useState('');
    const [accmData, setAccmData] = useState('');
    const [currentEventName, setCurrentEventName] = useState('');
    const [defaultdata, setdefaultData] = useState('');

    const [isChecked, setIsChecked] = useState(false); // Initial state is false (unchecked)

    const [regiPricecal, setregiPriceCal] = useState('');
    const [accpricecal, setaccpriceCal] = useState('');
    const [addOn, setAddOn] = useState('');
    const [subtot, setsubTot] = useState('');
    const [procssfee, setProcessfee] = useState(0);
    const [grandtot, setGrandTot] = useState('');

    const regiPricecalCurrent = useRef(regiPricecal);
    const accpricecalCurrent = useRef(accpricecal);
    const addOnCurrent = useRef(addOn);
    const procssfeeCurrent = useRef(procssfee);
    const subtotCurrent = useRef(subtot);
    const grandtotCurrent = useRef(totalPrice);

    const submitFormDataCurrent = useRef(submitFormData);

    

        const handleChangeaddon = (event) => {
            setIsChecked(event.target.checked); // Update the checked state
            const { name, value } = event.target;
            setSubmitFormData({ ...submitFormData, [name]: value });
            setAddOn(value);
            addOnCurrent.current=value;

            setsubTotalPrice(parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current));

            subtotCurrent.current=parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current);
    

            const getpercentage=(parseFloat(subtotCurrent.current)*5)/100;
            setProcessfee(getpercentage);
            procssfeeCurrent.current=getpercentage;

            setTotalPrice(parseFloat(subtotCurrent.current)+parseFloat(procssfeeCurrent.current));

            grandtotCurrent.current=parseFloat(subtotCurrent.current)+parseFloat(procssfeeCurrent.current);

            console.log("grandtot", grandtotCurrent.current,subtotCurrent.current,procssfeeCurrent.current);
            
            console.log("submitFormDatawithfulldata",submitFormData);

            setSubmitFormData((prev) => ({
                ...prev,
                subtot: subtotCurrent.current,  // ✅ This ensures the latest value is used
              }));

            setSubmitFormData({ ...submitFormData, ['acc_per_price']: addOnCurrent.current });
            // setSubmitFormData({ ...submitFormData, ['subtot']: subtotCurrent.current });
            setSubmitFormData({ ...submitFormData, ['procfee']: procssfeeCurrent.current });
            setSubmitFormData({ ...submitFormData, ['grand_tot']: grandtotCurrent.current });

            submitFormDataCurrent.current=submitFormData;

        };

    


    const basedata = [ 
        { key: "registration_type", name: 'Registration Type ' },
        { key: "end_date", name: 'Date' },
        { key: "invited_presentation", name: 'Invited Presentation' },
        { key: "oral_presentation", name: 'Oral Presentation' },
        { key: "poster_presentaion", name: 'Poster Presentation' },
        { key: "student_delegate", name: 'Student Delegate' },
        { key: "delegate", name: 'Delegate' },
        { key: "virtual_presentation", name: 'Virtual Presentation' },
        { key: "accommodation_name", name: 'accommodation_name' },
        { key: "One_Night", name: 'One_Night' },
        { key: "two_Nights", name: 'two_Nights' },
        { key: "three_Nights", name: 'three_Nights' },
        { key: "four_Nights", name: 'four_Nights' },
      ];
    
      const getNameByKey = (key) => {
        const item = basedata.find((entry) => entry.key === key);
        return item ? item.name : 'Not Found';
      };

    useEffect(() => {
        getCountry();
        getregfeeData();
        getaccmData();
        return window.scrollTo(0, 0)
    }, [])

    const getregfeeData = async ()=>{
        const currentEvents = location.pathname.split('/');
      setCurrentEventName(currentEvents[1])
      try {
          const res = await  axios.get(`${baseurl}${currentEvents[1]}/registration/register_categorys/`);
          setRegifeeData(res.data);
          console.log('speakersdata ===', res.data);
      } catch {
          setError('Error loaded')
      }
      }
    
      const getaccmData = async ()=>{
        const currentEvents = location.pathname.split('/');
      setCurrentEventName(currentEvents[1])
      try {
          const res = await  axios.get(`${baseurl}${currentEvents[1]}/registration/accommodations/`);
          setAccmData(res.data);
         
          console.log('speakersdata ===', res.data);
      } catch {
          setError('Error loaded')
      }
      }

    // new code start
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Convert to integer for specific fields
        // const intValueFields = ["country", "presentation_type", "topic_of_interest"];
        // const parsedValue = intValueFields.includes(name) ? parseInt(value, 10) : value;
        setSubmitFormData({ ...submitFormData, [name]: value });
    };

    const handleInputChangeCountry = (e) => {
        const { name, value } = e.target;
        console.log("country checking ===", e)
        setSubmitFormData({ ...submitFormData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        // console.log("form values",e,submitFormData);
        console.log("formdata",submitFormData,addOnCurrent.current,subtotCurrent.current,procssfeeCurrent.current,grandtotCurrent.current);
        // setLoading(true);

        // try {
        //     const formData = new FormData();
        //     Object.keys(submitFormData).forEach((key) => {
        //         formData.append(key, submitFormData[key]);
        //     });

            
        //     const currentEvents = location.pathname.split('/');
        //     console.log("urlapi", `${baseurl}${currentEvents[1]}/submissions/submit_abstract_form/`)
        //     const response = await axios.post(
        //         `${baseurl}${currentEvents[1]}/submissions/submit_abstract_form/`,
        //         formData,
        //         {
        //             headers: {
        //                 "Content-Type": "multipart/form-data",
        //             },
        //         }
        //     );
        //     setSuccessMessage("Form submitted successfully");
        //     console.log("submit_abstract_form", response.data);
        // } catch (error) {
        //     console.error(error);
        //     setError("Form submission failed");
        // } finally {
        //     setLoading(false);
        // }
    };

    const getCountry = async () => {
        try {
            const res = await axios.get(
                "https://meetings21.com/Meetings21Backend/api/Country/"
            );
            setCountries(res.data);
        } catch (err) {
            setError("No data found");
        }
    };

    const countryList = (countries) => {
        if (!countries || countries.length === 0) {
            return <option>No country found</option>;
        }
        return countries.map((c) => (
            <option key={c.id} value={c.id}>
                {c.country_name}
            </option>
        ));
    };
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
    ];

    const handleCheckboxChange = (value,index) => {
       
        setSubmitFormData({ ...submitFormData, ['register_category']: index+1 });
        setSubmitFormData({ ...submitFormData, ['reg_cat_val']: value });
        
        setregiPriceCal(value);
        regiPricecalCurrent.current=value;

        setsubTotalPrice(parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current));
        subtotCurrent.current=parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current);


        const getpercentage=(parseFloat(subtotCurrent.current)*5)/100;
        setProcessfee(getpercentage);
        procssfeeCurrent.current=getpercentage;

        setTotalPrice(parseFloat(subtotCurrent.current)+parseFloat(procssfee.current));
        grandtotCurrent.current=parseFloat(subtotCurrent.current)+parseFloat(procssfeeCurrent.current);

       console.log("values checking",addOnCurrent.current,subtotCurrent.current,procssfeeCurrent.current,grandtotCurrent.current);

        setSubmitFormData({ ...submitFormData, ['acc_per_price']: addOnCurrent.current });
        setSubmitFormData({ ...submitFormData, ['subtot']: subtotCurrent.current });
        setSubmitFormData({ ...submitFormData, ['procfee']: procssfeeCurrent.current });
        setSubmitFormData({ ...submitFormData, ['grand_tot']: grandtotCurrent.current });

        submitFormDataCurrent.current=submitFormData;

        
       
    };

    const rooms = [
        { id: "single", label: "Single Occupancy", price: 630 },
        { id: "double", label: "Double Occupancy", price: 720 },
        { id: "triple", label: "Triple Occupancy", price: 810 },
    ];
    const handleRoomSelection = (roomPrice) => {
        setSelectedRoom(roomPrice);
        calculateTotalPrice(accompanying, roomPrice);
    };

    const handleAccompanyingChange = (change) => {
        const updatedCount = Math.max(0, accompanying + change);
        setAccompanying(updatedCount);
        calculateTotalPrice(updatedCount, selectedRoom);
    };

    const calculateTotalPrice = (accompanyingCount, roomPrice) => {
        const basePrice = 1099;
        const accompanyingCost = accompanyingCount * 200;
        const roomCost = roomPrice || 0;
        setTotalPrice(basePrice + accompanyingCost + roomCost);
    };

    const handlePromoCode = () => {
        setPromoCode(true)
        if (promoCode) {
            setPromoCode(false)
        }
    };

    const handleReset = () => {
        // setPromoCode("");
        setAccompanying(0);
        setSelectedRoom("");
        setTotalPrice(0);
    };

    const handleaccom = (e,type) => {
    
        const { name, value } = e.target;
        setSubmitFormData({ ...submitFormData, ['accommodation']: type });
        setSubmitFormData({ ...submitFormData, ['no_of_nights']: e.target.value});
        setaccpriceCal(e.target.value);

        accpricecalCurrent.current=e.target.value;


        setsubTotalPrice(parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current));
     
        subtotCurrent.current=parseFloat(regiPricecalCurrent.current) + parseFloat(accpricecalCurrent.current) + parseFloat(addOnCurrent.current);
       
        const getpercentage=(parseFloat(subtotCurrent.current)*5)/100;
        setProcessfee(getpercentage);
        procssfeeCurrent.current=getpercentage;
       
        setTotalPrice(parseFloat( subtotCurrent.current)+parseFloat(procssfeeCurrent.current));
        grandtotCurrent.current=parseFloat(subtotCurrent.current)+parseFloat(procssfeeCurrent.current);
        console.log("valuechecking1",regiPricecalCurrent.current,accpricecalCurrent.current,addOnCurrent.current);
        console.log("valuechecking", subtotCurrent.current,procssfeeCurrent.current,totalPrice);

        setSubmitFormData({ ...submitFormData, ['acc_per_price']: addOnCurrent.current });
        setSubmitFormData({ ...submitFormData, ['subtot']: subtotCurrent.current });
        setSubmitFormData({ ...submitFormData, ['procfee']: procssfeeCurrent.current });
        setSubmitFormData({ ...submitFormData, ['grand_tot']: grandtotCurrent.current });
        submitFormDataCurrent.current=submitFormData;
       
    };

    const initialOption ={
        'client-id':'AVu9_6n12pwbZY6nay-AwpvrJh2q0UF4ckAzxf3paq7TpDuRLE0ry0Ub9w6HiqXI8PK_LmvpUPUYDFH0',
        'currency':'USD',
        'intent':'capture'
    }
    const createOrder=(data,actions)=>{
       return actions.order.create({
        purchase_units:[{
           amount:{
            currency_code:"USD",
            value:'0.01'
           }
        }]
       })
    }

    const onApprove=(data,actions)=>{
        return actions.order.capture().then(function(details){
            alert('Transaction completed By'+details.payer.name.given_name);
        })
     }

    return (
        <main>
            <EventHeader />
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>Online Registration</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">Online Registration</li>
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
                                name='billing_address'
                                rows="3"
                                onChange={handleInputChange}
                                placeholder="Enter your billing address"
                            ></textarea>
                        </div>

                      
                    </div>

                    {/* packages types start */}
                    <div className="my-5 regster-packages">
                        <h5 className='mb-4'>Registration</h5>
                        <div className="row">
                            {Array.isArray(regiFeedata) && regiFeedata.length > 0 ? (regiFeedata.map((plan,index) => (
                                <div className="col-md-4" key={index}>
                                    <div
                                        className={`card text-center ${plan.highlight ? "text-dark" : " text-dark"
                                            }`}
                                    >
                                        <div className="card-header bg-dark text-white">
                                            <h5 className="card-title">{plan.registration_type}</h5>
                                            <p className="mb-0">{plan.end_date}</p>
                                            <small>Oral/ Poster/ Delegate</small>

                                            <div className='text-center'>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    // checked={selectedPlans.includes(index)}
                                                    style={{ height: '25px', width: '25px' }} />
                                                <br />
                                            </div>

                                        </div>
                                        <div className="card-body">
                                            {/* {plan.highlight && (
                                                <div className="text-center mb-3">
                                                    <i className="fas fa-check fa-2x text-primary"></i>
                                                </div>
                                            )} */}
                                            <div className="form-group">
                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" value={plan.invited_presentation}  onChange={() => handleCheckboxChange(plan.invited_presentation,index)} />
                                                        Invited Presentation   
                                                    </span>

                                                    <span className="float-right text-danger font-weight-bold">
                                                        ${plan.invited_presentation}
                                                    </span>
                                                </label>

                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" onChange={() => handleCheckboxChange(plan.oral_presentation,index)} />
                                                        Oral Presentation
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                    ${plan.oral_presentation}
                                                    </span>
                                                </label>

                                               

                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`}  onChange={() => handleCheckboxChange(plan.poster_presentaion,index)} className="mr-2" />
                                                        Poster Presentation
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                    ${plan.poster_presentaion}
                                                    </span>
                                                </label>
                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} onChange={() => handleCheckboxChange(plan.student_delegate,index)} className="mr-2" />
                                                        Student Delegate
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                    ${plan.student_delegate}
                                                    </span>
                                                </label>
                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`}  onChange={() => handleCheckboxChange(plan.delegate,index)} className="mr-2" />
                                                        Delegate
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                    ${plan.delegate}
                                                    </span>
                                                </label>
                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} onChange={() => handleCheckboxChange(plan.virtual_presentation,index)} className="mr-2" />
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
                                // <div className="col-md-4" key={index}>sdds{plan.registration_type}</div>
                            ))) : "no data"
                        }
                        </div>
                    </div>
                    {/* packages types end */}

                    {/* acomidation start */}
                    <div className=" mt-5">
                        <div className="row">
                            <div className="col-md-12 mb-3"><h5>Accommodation</h5></div>
                            {Array.isArray(accmData) && accmData.length > 0 ? (accmData.map((room,index) => (
                                <div className="col-md-4 mb-4" key={room.id}>

                                    <div className="card" style={{ minHeight: 250 }}>
                                        <div className="card-header bg-dark text-white">
                                            <h5>{room.accommodation_name}: ${room.One_Night}</h5>
                                            <p>Breakfast included</p>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <div className='d-flex justify-content-between'>
                                                    <strong>
                                                        <span className='text-primary'>Select No. of Nights</span>
                                                    </strong>
                                                    <select name="accnights" id=""  onChange={(event) => handleaccom(event,index)} className='form-selct float-right' style={{ width: '50px', height: 25, fontSize: '16px', marginLeft: '10px' }}>
                                                       
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
                           ))) : "no data"
                        }
                        </div>

                        {/* {
                            extraAccom ? <div className='card  mb-3' style={{ width: '350px' }}>
                                <div className="card-header bg-secondary text-white"><h6 className='tex'>Need Extra Nights Accommodation</h6></div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Extra Nights: </span>
                                        <span className='w-50'>
                                            <select className='form-control'>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Check-in Date:</span>
                                        <span className='w-50'>
                                            <input type="date" className='form-control' />
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Check-out Date:</span>
                                        <span className='w-50'>
                                            <input type="date" className='form-control' />
                                        </span>
                                    </div>

                                </div>

                            </div> : ""
                        } */}

                        {/* <div className=" bg-secondary text-white px-3 py-2 border mb-4" style={{ width: '300px' }}>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="promoCodeCheckbox"
                                    onChange={handlePromoCode}
                                />
                                <label className="form-check-label" htmlFor="promoCodeCheckbox">
                                    Have a promo code?
                                </label>
                            </div>
                        </div>
                        {
                            promoCode ? <div className='input-group mb-4' style={{ width: '300px' }}> <input type='text' className='form-control' /> <button className='btn btn-warning'>Apply</button> </div> : null
                        } */}

                        <div className="  align-items-center mb-4">
                            <h5>Add on:</h5>
                            <label className="mr-3">
                                <input type="radio"  name='add_on' checked={isChecked} // Bind the checked state
          onChange={handleChangeaddon}  value='200' /> Accompanying Person (<b className='text-primary'>$200 for each person</b>)</label>

                            {/* <div className="form-group" style={{ width: 150 }}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button onClick={decCount} className="btn btn-secondary" type="button">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={countNo}
                                        readOnly
                                    />
                                    <div className="input-group-append">
                                        <button onClick={incCount} className="btn btn-secondary" type="button">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            {/* <button
        className="btn btn-outline-secondary mr-2"
        onClick={() => handleAccompanyingChange(-1)}
    >
        -
    </button>
    <span>{accompanying}</span>
    <button
        className="btn btn-outline-secondary ml-2"
        onClick={() => handleAccompanyingChange(1)}
    >
        +
    </button> */}
                        </div>

                        <div className="card">
                            <div className="card-header bg-light">
                                <h5>SUMMARY</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><span style={{ width: '350px', display: 'inline-block' }}>Registration Price:</span> $<b className='text-primary'>{regiPricecal || 0}</b></p>
                                        <p><span style={{ width: '350px', display: 'inline-block' }}>Accommodation Price:</span> $<b className='text-primary'>{accpricecal || 0}</b></p>
                                        {/* <p>Accompanying: $<b className='text-primary'>{accompanying * 200}</b></p> */}
                                        <p><span style={{ width: '350px', display: 'inline-block' }}>Accompanying Person Price:</span> $<b className='text-primary'>{addOn || 0}</b></p>
                                    </div>

                                </div>

                                <hr />
                                <h5>Sub-Total : $<b className='text-primary'>{subtotCurrent.current || 0}</b></h5>
                                <hr />
                                <h5>Processing Fee(5%) : $<b className='text-primary'>{procssfeeCurrent.current || 0 }</b></h5>
                                <hr />
                                <h5>Grand Total : $<b className='text-primary'>{grandtotCurrent.current || 0}</b></h5>
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
                                        <div class="input-group mb-3 mx-auto my-4" style={{ width: '300px' }}>
                                            <span class="input-group-text px-3" id="basic-addon1">$</span>
                                            <input type="text" value={grandtotCurrent.current || 0} class="form-control form-control-lg bg-white text-primary font-weight-bold" readOnly />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <label htmlFor="option1" className='mr-5'>
                                            <input type="radio" name="option" id='option1'
                                                value="option2" className='mr-3' />
                                            <img src={process.env.PUBLIC_URL + '/' + 'images/cc-avenue_logo.png'} alt="logo" style={{ width: 150 }} />
                                        </label>

                                        <label htmlFor="option2">
                                            <input type="radio" name="option" id='option2'
                                                value="option2" className='mr-3' />
                                            <img src={process.env.PUBLIC_URL + '/' + 'images/paypal-logo.png'} alt="logo" style={{ width: 150 }} />
                                        </label>
                                    </div>

                                    <button className="btn btn-outline-secondary px-3 mr-3" onClick={handleReset}>
                                        Reset sddsa
                                    </button>

                                    {/* <button className="btn btn-success px-5"  onClick={handleSubmitForm} >Pay</button> */}
                                    <PayPalScriptProvider options={initialOption}>
                                        <PayPalButtons style={{layout:"horizontal"}} 
                                        createOrder={(data,actions)=>createOrder(data,actions)}
                                        onApprove={(data,actions)=>onApprove(data,actions)}
                                        >

                                        </PayPalButtons>
                                    </PayPalScriptProvider>

                                </div>
                            </div>
                        </div>

                        {/* <div className="card my-3">
                            <div className="card-body bg-light">
                                <div className="registration-includes">
                                    <h5>Registration includes ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>Access to conference sessions, poster sessions, and panel discussion</li>
                                        <li>Conference material</li>
                                        <li>Access to all the conference rooms</li>
                                        <li>Access to Conference Recording</li>
                                        <li>E-Copy of the Abstract Book</li>
                                        <li>Participation E-Certificate (if opted)</li>
                                        <li>Access to video conference platform for one year</li>
                                        <li>Conference app</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="card my-3">
                            <div className="card-body bg-light">
                                <div className="policies-section">
                                    <h5>Registration Cancellation Policy ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>Cancellation policy is strictly followed and all cancellations must be made in writing.</li>
                                        <li>Cancellation before 120 days of the conference start date will receive a full refund, less a $200 towards the administrative fee.</li>
                                        <li>Cancellation before 90 days of the conference start date will receive a 50% refund.</li>
                                        <li>Cancellations received below 90 days of the conference start date are non-refundable and can only be transferred to the next edition.</li>
                                        <li>Discounted registrations can only be transferred for the next edition or can opt for a Credit Shell.</li>
                                        <li>Refunds will be made within 60 days of receipt of cancellation notification.</li>
                                    </ul>

                                    <h5>Accommodation Policy ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>All the accommodations booked through us can be transferred for the next edition or will be refunded as per the policy.</li>
                                        <li>Discounted accommodations can only be transferred for the next edition.</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="card mt-3">
                            <div className="card-body">
                                <div className="disaster-policy-section">
                                    <h5>Cancellation Policy in the Events of Natural Disasters or Unpredictable Activity ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            Organizer is not responsible for any loss or damage as a result of substitution, alteration,
                                            postponement, or cancellation of an event due to causes beyond its control including without
                                            limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes,
                                            terrorism, or hostilities.
                                        </li>
                                        <li>
                                            The organizer reserves the right to cancel or postpone the conference in case of any natural disasters,
                                            calamities, or terrorism activity. In this case, the organizer cannot accept refund requests from the
                                            conference delegates, speakers, or attendees that result from canceled flights and/or natural disasters,
                                            calamities, terrorism activity.
                                        </li>
                                        <li>
                                            The organizer will provide the opportunity for the registered delegates and attendees to transfer
                                            their registration fee and accommodation charges to any future or related conferences.
                                        </li>
                                        <li>
                                            The organizer will not accept any liability for personal injuries or for loss or damage to property
                                            belonging to the delegates, either during or as a result of the conference.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div> */}

                    </div>
                    {/* acomidation end */}

                </form>
            </div>
            <Footer />
        </main>
    )
}

export default OnlineRegistration