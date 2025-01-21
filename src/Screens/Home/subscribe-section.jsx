import axios from "axios";
import React, { useState } from "react";

const SubscribeSection = () => {

    const subscribeFormApi = process.env.REACT_APP_API_URL + 'api/';

    console.log("subscribeFormApi", subscribeFormApi)

    const [loading, setLoading] = useState(true);
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
            console.log("postForm===", postForm);
           
        } catch (error) {
            console.error("Error:", error);
            setError("Error: Form data not submitted");
        }
    };

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