import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";
import { useLocation } from "react-router-dom";


window.$ = window.jQuery = $; // Expose jQuery globally
const EventHeader = () => {
    const location = useLocation();
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
    return (
        <>
            <div className="header-main-con index3-header w-100 float-left py-1 sticky-top">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <Link to="/" className="navbar-brand">
                            <figure className="mb-0 custom-logo bg-white p-2 rounded">
                                <img src="/images/meetings-logo.png" alt="meetings21" />
                            </figure>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className='nav-link p-0 active'>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/committee" className='nav-link p-0'>Committee</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Submission
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to="/topics" className="dropdown-item">Topics</Link>
                                        <Link to="/abstract" className="dropdown-item">Call for Abstract</Link>
                                        <Link to="/submit-abstract" className="dropdown-item">Submit Abstract</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Agenda
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to="/speakers" className="dropdown-item">Speakers</Link>
                                        <Link to="/programs" className="dropdown-item">Program</Link>
                                        <Link to="/#" className="dropdown-item">Presentation Guidelines</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sponsors" className='nav-link p-0'>Sponsors</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle p-0 " id="navbarDropdown3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <Link to="/awards" className="dropdown-item">Awards</Link>
                                        <Link to="/venue" className="dropdown-item">Venue</Link>
                                        <Link to="/policies" className="dropdown-item">Policies</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className='nav-link p-0'>CONTACT</Link>
                                </li>

                            </ul>
                            <div class="header-contact d-flex align-items-center">
                                <div class="lets-talk-btn">
                                    <Link to="registration">Registration <i class="fas fa-arrow-right"></i></Link>
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