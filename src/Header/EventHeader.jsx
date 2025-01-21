import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from "jquery";
import { useLocation } from "react-router-dom";
import axios from 'axios';


window.$ = window.jQuery = $; // Expose jQuery globally
const EventHeader = () => {



    const dynamicEventUrl = process.env.REACT_APP_API_URL;

    const location = useLocation();

    const [currentEventName, setCurrentEventName] = useState('');
    const [currentEventId, setCurrentEventId] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === location.pathname) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }, []);

    useEffect(() => {
        const currentEvents = location.pathname.split('/')
        setCurrentEventName(currentEvents[1])
        setCurrentEventId(currentEvents[2])

        console.log("location===", location)
    }, [location])


    // const navigate = useNavigate('');
    // // const location = useLocation();
    // const committee = () => {
    //     navigate(`/${currentEventName}/${currentEventId}/committee`)
    // }
    // const topics = () => {
    //     navigate(`/${currentEventName}/${currentEventId}/topics`)
    // }
    return (
        <>
            <div className="header-main-con index3-header w-100 float-left py-1 sticky-top">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <Link to="/" className="navbar-brand">
                            <figure className="mb-0 custom-logo">
                                <img src={process.env.PUBLIC_URL + '/' + "images/meetings-logo.png"} alt="meetings21" />
                            </figure>
                        </Link>
                        <button className="navbar-toggler collapsed text-white" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                            {/* <span className="navbar-toggler-icon"></span> */}
                            {/* <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span> */}
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={`/${currentEventName}/${currentEventId}/events`} className='nav-link p-0 active'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/${currentEventName}/${currentEventId}/committee`} className='nav-link p-0'>Committee</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Submission
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to={`/${currentEventName}/${currentEventId}/topics`} className="dropdown-item">Topics</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/call-for-Abstracts`} className="dropdown-item">Call for Abstract</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/submit-abstract`} className="dropdown-item">Submit Abstract</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Agenda
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to={`/${currentEventName}/${currentEventId}/speakers`} className="dropdown-item">Speakers</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/programs`} className="dropdown-item">Program</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/presentation-guidelines`} className="dropdown-item">Presentation Guidelines</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Registration
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to={`/${currentEventName}/${currentEventId}/registration_form`} className="dropdown-item">Registration Fee</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/online-registration`} className="dropdown-item">Online Registration</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/policies-event`} className="dropdown-item">Policies</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/${currentEventName}/${currentEventId}/sponsors`} className='nav-link p-0'>Sponsors</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to={`/${currentEventName}/${currentEventId}/awards`} className="dropdown-item">Awards</Link>
                                        <Link to={`/${currentEventName}/${currentEventId}/venue`} className="dropdown-item">Venue</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/${currentEventName}/${currentEventId}/contact-us`} className='nav-link p-0'>CONTACT</Link>
                                </li>
                            </ul>

                            <div className="header-contact d-flex align-items-center">
                                <div className="lets-talk-btn">
                                    <Link to={`/${currentEventName}/${currentEventId}/registration_form`}>Registration <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default EventHeader