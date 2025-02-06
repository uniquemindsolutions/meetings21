import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import $ from "jquery";
import { useLocation } from "react-router-dom";


window.$ = window.jQuery = $; // Expose jQuery globally
const Header = () => {
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
        <div>

            <div className="header-main-con w-100 float-left ">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <Link to="/" className="navbar-brand">
                            <figure className="mb-0 custom-logo">
                                <img src={process.env.PUBLIC_URL + '/' + "images/meetings-logo.png"} alt="meetings21" className='img-fluid' />
                            </figure>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            {/* <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span> */}
                        </button>
                        <div className="collapse navbar-collapse justify-content-end main-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link p-0 active" role="button">
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link p-0">ABOUT US</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown5" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        MEETINGS
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                        <Link to="/upcoming-meetings" className="dropdown-item">UPCOMING</Link>
                                        <Link to="/completed-meetings" className="dropdown-item">COMPLETED</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/policies" className="nav-link p-0">POLICIES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blogs" className="nav-link p-0">
                                        BLOGS
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/code-of-conduct" className="nav-link p-0">
                                        CODE OF CONDUCT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link p-0">CONTACT</Link>
                                </li>
                            </ul>
                            {/* <div className="header-contact d-flex align-items-center">
                        <div className="lets-talk-btn">
                            <a href="contact.html">LET'S TALK <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div> */}
                        </div>
                        {/* <div className="nav-btns d-flex">
                    <div className="shopping-cart">
                        <a href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                    <div className="search-btn">
                        <a href="#"><i className="fas fa-search"></i></a>
                    </div>
                </div> */}
                    </nav>
                </div>
            </div>
        </div>
        // <main>
        //     <nav>
        //         <ul style={{display:'flex', gap:'40px'}}>
        //             <li><Link to="/">Home</Link></li>
        //             <li><Link to="/about">About</Link></li>
        //             <li><Link to="/meetings">Meetings</Link></li>
        //             <li><Link to="/policies">Policies</Link></li>
        //             <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
        //             <li><Link to="/contact">Contact</Link></li>
        //         </ul>
        //     </nav>
        // </main>
    )
}

export default Header