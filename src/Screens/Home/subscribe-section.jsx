import axios from "axios";
import React, { useState } from "react";

const SubscribeSection = () => {

    const subscribeFormApi = process.env.REACT_APP_API_URL + 'api/';

    console.log("subscribeFormApi", subscribeFormApi)

    const [popup, setPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('')
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const postSubscribeForm = async (e) => {
        e.preventDefault(); // Prevent form reload

        try {
            const postForm = await axios.post(subscribeFormApi + 'HomepageSubscribe/', formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setMessage('Form submitted successfully');
            setPopup(true);

            setTimeout(() => {
                setMessage('')
                setPopup(false)
            }, 10000)
        } catch (error) {
            setError("Error: Form data not submitted");
            setPopup(true);

            setTimeout(() => {
                setError('')
                setPopup(false)
            }, 10000)
        }
    };

    const popupClose = (() => {
        setPopup(false)
    })

    return (

        <div className="home-subscription">
            <section className="index3-speakers-section w-100 float-left padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="generic-title2 text-left">
                                <span className="fa-2x" >Subscribe to get latest news.</span>
                                {/* <h2 data-aos="fade-up" data-aos-duration="700"> </h2> */}
                                <p className="text-white">Don't miss out on this incredible opportunity to learn, grow, and have a great time! Subscribe Now.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form-section custom-form-sub float-left pb-0 pb-md-0">
                                <form onSubmit={postSubscribeForm} className="form-box custom-form-grid" method="post" id="contactpage">
                                    <ul className="list-unstyled">
                                        <li>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                name="name"
                                                id="fname"
                                                placeholder="Name"
                                            />
                                        </li>

                                        <li>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                id="email" />
                                        </li>

                                    </ul>
                                    <div className="submit-btn generic-btn">
                                        <button className="w-100" type="submit" id="submit">SEND MESSAGE <i className="fas fa-arrow-right"></i></button>
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
                                                            {message && <p className="text-success mt-2">{message}</p>}
                                                            {error && <p className="text-danger mt-2">{error}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </form>
                            </div>
                        </div>


                    </div>

                </div>
            </section>



        </div>

    );
};

export default SubscribeSection;