import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className="footer-main-section w-100 float-left">
                <div className="container">
                    <div className="footer-inner-con">
                        <div className="footer-box">
                            <Link to="/">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + '/' + "images/meetings-black-logo.png"} className='logo' alt="footer-logo" />
                                </figure>
                            </Link>
                            <p>We work closely with conference organizers, speakers, and participants to ensure that each event meets the unique needs of the academic community it serves.</p>
                            <div className="footer-call-button d-inline-block">
                                <a className="d-flex align-items-center footer-call-btn" href="tel:+11234567890">
                                    <i className="fas fa-mobile-alt"></i>
                                    <p className="mb-0">
                                        <small className="d-block">CALL US 24/7</small>
                                        <span className="d-block">+91 (9848 14 1833)</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                        {/* <div className="footer-box footer-schedule">
                    <h6>Event Schedule</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <span className="d-block">Monday – Saturday</span>
                            <small className="d-block">12:00 pm – 14:45 pm</small>
                        </li>
                        <li>
                            <span className="d-block">Sunday – Thursday</span>
                            <small className="d-block">17.30 pm – 00.00 am</small>
                        </li>
                        <li>
                            <span className="d-block">Friday – Saturday</span>
                            <small className="d-block">17.30 pm – 00.00 am</small>
                        </li>
                    </ul>
                </div> */}
                        <div className="footer-box footer-navigation">
                            <h6>Navigation</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="position-relative">
                                    <a href="/">Home</a>
                                </li>
                                <li className="position-relative">
                                    <a href="/about">About Us</a>
                                </li>
                                <li className="position-relative">
                                    <a href="/meetings">Meetings</a>
                                </li>
                                <li className="position-relative">
                                    <a href="/policies">Policies</a>
                                </li>
                                <li className="position-relative">
                                    <a href="/code-of-conduct">Code of Conduct</a>
                                </li>
                                <li className="position-relative">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-box footer-contact">
                            <h6>Contact Us</h6>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <span className="d-block">Address:</span>
                                    <p>D. No. 404, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad, Postal Code: 500081, India</p>
                                </li>
                                <li>
                                    <span className="d-block mail-span">Email:</span>
                                    <a href="mailto:info@confx.com">contact@meetings21.com</a>
                                </li>
                                <li className="footer-social-links">
                                    <ul className=" list-unstyled mb-0">
                                        <li>
                                            <a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright w-100 float-left text-center">
                <div className="copyright-content">
                    <div className="container">
                        <p className="mb-0">Copyright © 2024 Meetings21 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer