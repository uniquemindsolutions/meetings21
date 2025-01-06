import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';

const Contacts = () => {
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
                                <img src={process.env.PUBLIC_URL + "images/location-icon1.png"} alt="location-icon" />
                            </figure>
                            <h6>Office Address</h6>
                            <p>1D. No. 404, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad, Postal Code: 500081, India</p>
                            <a href="contact.html">Get Directions</a>
                        </div>
                        <div className="contact-box">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "images/mobile-icon.png"} alt="mobile-icon" />
                            </figure>
                            <h6>Phone</h6>
                            <ul className="list-unstyled">
                                <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                                <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                            </ul>
                            <a href="tel:+61383766284">Call Now</a>
                        </div>
                        <div className="contact-box">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "images/mail-icon.png"} alt="mail-icon" />
                            </figure>
                            <h6>Email</h6>
                            <ul className="list-unstyled">
                                <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                                <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                            </ul>
                            <a href="mailto:contact@meetings21.com">Email Now</a>
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
                    <form className="form-box" method="post" id="contactpage">
                        <ul className="list-unstyled">
                            <li>
                                <input type="text" name="fname" id="fname" placeholder="Name" />
                            </li>
                            <li>
                                <input type="tel" name="phone" id="phone" placeholder="Phone" />
                            </li>
                            <li>
                                <input type="email" placeholder="Email" name="email" id="email" />
                            </li>
                            <li>
                                <input type="text" placeholder="Website URL" />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="subject" id="subject"></textarea>
                            </li>
                        </ul>
                        <div className="submit-btn generic-btn">
                            <button type="submit" id="submit">SEND MESSAGE <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </section>
           
            <Footer />
        </div>
    )
}

export default Contacts