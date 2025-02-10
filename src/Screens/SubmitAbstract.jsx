import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { event, get } from 'jquery';
const SubmitAbstract = () => {

    const submitFormApi = process.env.REACT_APP_API_URL;
    const TopicsApi = process.env.REACT_APP_API_URL;
    const presentationTypeApi = process.env.REACT_APP_API_URL;
    const contriesApi = process.env.REACT_APP_API_URL;

    const location = useLocation();

    const initatiolFormData = {
        title: "",
        name: "",
        email: "",
        telephone: "",
        organization: "",
        city: "",
        country: '',
        presentation_type: '',
        topic_of_interest: '',
        file: ''
    }

    const submitForm = {
        title: "",
        name: "",
        email: "",
        telephone: "",
        organization: "",
        city: "",
        country: "",
        presentation_type: "",
        topic_of_interest: ""
    }

    const [popup, setPopup] = useState(false)
    const [file, setFile] = useState(null); // State for the file input
    const [captcha, setCaptcha] = useState(""); // State for captcha input
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitFormData, setSubmitFormData] = useState(submitForm);
    const [countries, setCountries] = useState([]);
    const [presentationType, setPresentationType] = useState([]);
    const [topics, setTopics] = useState([]);
    const [successMsg, setSuccessMsg] = useState("");
    const [AbractId, setAbractId] = useState("");

    const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
    const [userInput, setUserInput] = useState("");
    const [isValid, setIsValid] = useState(null);

    const correctAnswer = num1 + num2;

    useEffect(() => {
        getCountry();
        getPresentationType();
        getTopics();

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Convert to integer for specific fields
        // const intValueFields = ["country", "presentation_type", "topic_of_interest"];
        // const parsedValue = intValueFields.includes(name) ? parseInt(value, 10) : value;
        setSubmitFormData({ ...submitFormData, [name]: value });
    };

    // const handleInputChangeCountry = (e) => {
    //     const { name, value } = e.target;
    //     setSubmitFormData({ ...submitFormData, [name]: value });
    // };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    // const handleCaptchaChange = (event) => {
    //     setCaptcha(event.target.value);
    // };

    const popupClose = (() => {
        setPopup(false)
    })


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Clear previous error
        setSuccessMessage(""); // Clear previous success message

        try {
            const formData = new FormData();
            Object.keys(submitFormData).forEach((key) => {
                formData.append(key, submitFormData[key]);
            });

            if (file) {
                formData.append("file", file);
            }

            const currentEvents = location.pathname.split('/');
            const apiUrl = `${submitFormApi}${currentEvents[1]}/submissions/submit_abstract_form/`;
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("response===", response);
            setSuccessMsg(response.data.success)
            setAbractId(response.data.abstract_number)

            setSuccessMessage("Form Submitted Successfully!");
            setPopup(true);

            setTimeout(() => {
                setPopup(false);
                setSuccessMessage("");
            }, 10000);

            setSubmitFormData(initatiolFormData)

        } catch (error) {
            setError("Submission failed. Please try again.");
            setPopup(true);

            setTimeout(() => {
                setPopup(false);
                setError("");
            }, 5000);

        } finally {
            setLoading(false);
        }
    };


    const getCountry = async () => {
        // const currentEvents = location.pathname.split('/');
        try {
            const res = await axios.get(contriesApi + '/api/Country/');
            setCountries(res.data);
        } catch (err) {
            setError("No data found");
        }
    };

    // const countryList = (countries) => {
    //     if (!countries || countries.length === 0) {
    //         return <option>No country found</option>;
    //     }
    //     return countries.map((c) => (
    //         <option key={c.id} value={c.id}>
    //             {c.country_name}
    //         </option>
    //     ));
    // };

    const getPresentationType = async () => {
        const currentEvents = location.pathname.split('/')
        try {
            const response = await axios.get(presentationTypeApi + currentEvents[1] + '/submissions/presentation_type/');
            setPresentationType(response.data); // Update state with fetched data
        } catch (error) {
            setError('No data found');
        }
    };

    const getTopics = async () => {
        const currentEvents = location.pathname.split('/');
        try {
            const res = await axios.get(TopicsApi + currentEvents[1] + '/submissions/topics/');
            setTopics(res.data);
        } catch {
            setError('No data found');
        }
    }

    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     if (parseInt(userInput) === correctAnswer) {
    //         setIsValid(true);
    //     } else {
    //         setIsValid(false);
    //     }
    // };

    return (
        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Abstract Submission</h1>
                        {/* <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Abstract Submission</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className='padding-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <p>Prospective authors are invited to submit abstract via conference website. The accepted abstracts and/or the presentations will be included in summit program and abstract book.</p>
                                <p className="font-weight-bold text-center">
                                    Please do follow the template when preparing your abstract.
                                    {/* <a className="btn btn-outline-success ml-5 btn-very-small btn-dark-gray" href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Template</a> */}
                                    <div className="index3-faq-btn-con text-center mt-3">
                                        <div className="generic-btn">
                                            <a href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Template <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* new form start */}
                <div className="container mt-4 contact-form-section">
                    <form onSubmit={handleSubmitForm} className="p-4 border rounded shadow-sm mb-5">
                        <div className="form-section">
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="title">Title *</label>
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
                                        <label htmlFor="name">Name *</label>
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
                                        <label htmlFor="email">Email *</label>
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
                                        <label htmlFor="phone">Telephone *</label>
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
                                <label htmlFor="organization">Organization *</label>
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
                                        <label htmlFor="city">City *</label>
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
                                    <div className="form-group">
                                        <label htmlFor="country">Country *</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i class="fa-solid fa-earth-asia"></i>
                                                </span>
                                            </div>
                                            <select
                                                onChange={handleInputChange}
                                                name="country"
                                                value={submitFormData.country || ""}
                                                className="form-control"
                                                id="country"
                                            >
                                                <option value="">Select</option>
                                                {
                                                    countries.map((cnry) => (
                                                        <option key={cnry.id} value={cnry.id}>{cnry.country_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Presentation type *</label>
                                        <select onChange={handleInputChange} name="presentation_type" value={submitFormData.presentation_type} className="form-control" id="country">

                                            <option value="Plenary Talk">Select</option>
                                            {
                                                presentationType.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.presentation_name}</option>
                                                ))
                                            }
                                            {/* {PresentationTypeList(submitFormData.presentation_type)} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="Topic">Topic of interest *</label>
                                        <select onChange={handleInputChange} name="topic_of_interest" className="form-control" id="Topic">
                                            <option>Select</option>
                                            {
                                                Array.isArray(topics) && topics.length > 0 ? (topics.map((item) => {
                                                    return <option key={item.id} value={item.id}>
                                                        {item.topic_name}
                                                    </option>
                                                })) : (<option disabled>No data found</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <label htmlFor="files">Attach File *</label>
                                    <input
                                        onChange={handleFileChange}
                                        name="file"
                                        type="file"
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-sm-4">
                                    <label htmlFor="files" className='mb-0'>Captcha *</label>
                                    <div>
                                        <div className='form-group d-block bg-light text-center rounded'>
                                            Solve: <span className='text-primary fw-bold'> {num1}</span> + <span className='text-primary fw-bold'> {num2}</span> = ?
                                            <label>
                                                <input
                                                    className='form-control ms-3'
                                                    type="number"
                                                    value={userInput}
                                                    onChange={(e) => setUserInput(e.target.value)}
                                                    required
                                                    style={{ width: 90 }}
                                                />
                                            </label>
                                            {/* <button className='btn btn-primary d-inline' type="submit">Submit</button>  */}
                                        </div>

                                        {isValid === false && <p style={{ color: "red" }}>Incorrect. Try again.</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 mt-4">
                                <label htmlFor="checkBox d-flex">
                                    <span style={{ lineHeight: 0 }}>By clicking "SUBMIT" you agree to all our policies and terms and permit your abstract to be included in the proceedings and conference website.</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="submit-btn generic-btn text-center my-3">
                            <button type="submit"> 
                                {loading ? "Submitting..." : "Submit"} <i className="fas fa-arrow-right"> </i>
                            </button>
                        </div>

                        {
                            popup && (
                                <div className="row">
                                    <div className="col-md-4 offset-lg-4">
                                        <div className="shadow-sm popup">
                                            <button className='btn text-danger ms-auto text-end d-block' onClick={popupClose}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                            </button>
                                            <div className="justify-content-center align-items-center text-center" style={{ minHeight: '100px' }}>
                                                <h6 className="text-success mt-2">{successMsg}</h6><br />
                                                <h6 className="text-secondary mt-2">Abstract Id is: <span className="text-primary">{AbractId}</span></h6>
                                                {error && <p className="text-danger mt-2">{error}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </form>
                </div>
                {/* new form end */}
            </div>

            <Footer />
        </div>
    )
}

export default SubmitAbstract