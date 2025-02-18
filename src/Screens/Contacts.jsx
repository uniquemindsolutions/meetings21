import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contacts = () => {

    const contactApi = process.env.REACT_APP_API_URL

    const initialFormData = {
        name: "",
        phone_number: "",
        email: "",
        subject: "",
        message: "",
    };

    const cfField = {
        name: '',
        phone_number: '',
        email: '',
        subject: '',
        message: ''
    }
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(cfField);
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handlePostForm = async (e) => {
        e.preventDefault(); // Prevent form reload
        setLoading(true);
        try {
            const cfData = await axios.post(contactApi + '/api/Contact/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            setMsg("Form Submitted Successfully")
            setPopup(true)

            setFormData(initialFormData);

            setTimeout(()=>{
                setMsg("")
                setPopup(false)
            }, 10000)
        } catch(error) {
            setError("Error: Data not posted")
            setTimeout(()=>{
                setError("")
                setPopup(false)
            }, 10000)
        } finally {
            setLoading(false);
        }
    }

    const popupClose = (() => {
        setPopup(false)
    })

    return (
        <div className='contact-p'>
            <Header />
            <section className="sub-banner-main-section contact-banner w-100 float-left">
                <div className="container">
                    <div className="sub-banner-inner-con">
                        <h1>CONTACT US</h1>
                        <p>Inspiring Talks, Meet the Best Product People Around the World, <br />
                            and Party Together After  the Event!
                        </p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">CONTACT</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="conatct-information-section w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="generic-title text-center">
                        <span className="small-text">CONTACT INFORMATION</span>
                        <h2>Get In Touch With Us</h2>
                    </div>
                    <div className="contact-info-inner-con">
                        <div className="contact-box">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/' + "images/location-icon1.png"} alt="location-icon" />
                            </figure>
                            <h6 className='text-dark'>Office Address</h6>
                            <p className='mb-0'><b>Manjeera Trinity Corporate</b></p>
                            <p>First floor, Unit: 114, JNTU - Hitech Road, KPHB Colony, Kukatpally, Hyderabad - 500072, Telangana.</p>
                            </div>
                        <div className="contact-box">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/' + "images/mobile-icon.png"} alt="mobile-icon" />
                            </figure>
                            <h6>Phone</h6>
                            <ul className="list-unstyled">
                                <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                                <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                            </ul>
                            {/* <a href="tel:+61383766284">Call Now</a> */}
                        </div>
                        <div className="contact-box">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/' + "images/mail-icon.png"} alt="mail-icon" />
                            </figure>
                            <h6>Email</h6>
                            <ul className="list-unstyled">
                                <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                                <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                            </ul>
                            {/* <a href="mailto:contact@meetings21.com">Email Now</a> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form-section w-100 float-left padding-top padding-bottom light-bg">
                <div className="container">
                    <div className="generic-title text-center">
                        <span className="text-center small-text">GET IN TOUCH WITH US</span>
                        <h2>Send Us a Message</h2>
                    </div>
                    <form onSubmit={handlePostForm} className="form-box" method="post" id="contactpage">
                        <ul className="list-unstyled">
                            <li>
                                <input type="text"
                                    value={formData.name}
                                    onChange={handleInput}
                                    name="name"
                                    id="fname"
                                    placeholder="Name"
                                    required />
                            </li>
                            <li>
                                <input type="tel"
                                    value={formData.phone_number}
                                    onChange={handleInput}
                                    name="phone_number"
                                    id="phone"
                                    placeholder="Phone" />
                            </li>
                            <li>
                                <input type="email"
                                    value={formData.email}
                                    onChange={handleInput}
                                    name="email"
                                    placeholder="Email"
                                    id="email" />
                            </li>
                            <li>
                                <input type="text"
                                    value={formData.subject}
                                    onChange={handleInput}
                                    name='subject'
                                    placeholder="Subject" />
                            </li>
                            <li>
                                <textarea
                                    value={formData.message}
                                    onChange={handleInput}
                                    name="message"
                                    placeholder="Message"
                                    id="message"></textarea>
                            </li>
                        </ul>
                        <div className="submit-btn generic-btn">
                            <button type="submit"> 
                                {loading ? "Submitting..." : "SEND MESSAGE"} <i className="fas fa-arrow-right"> </i>
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
                                            <div className=" d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                                                {msg && <p className="text-success mt-2">{msg}</p>}
                                                {error && <p className="text-danger mt-2">{error}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </form>
                    {/* <div className='text-success text-center mt-4'>
                        <h5>{msg}</h5>
                    </div>
                    <div className='text-danger text-center mt-4'>
                    <h5>{error}</h5>
                    </div> */}
                        
                    
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contacts