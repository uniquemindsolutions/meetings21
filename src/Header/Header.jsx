import React, {useEffect} from 'react';
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

<div class="header-main-con w-100 float-left">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="/">
                    <figure class="mb-0 custom-logo">
                        <img src="/images/meetings-logo.png" alt="meetings21" className='img-fluid'/>
                    </figure>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link p-0 active" href="/" role="button">
                                HOME
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/about">ABOUT US</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown5" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MEETINGS
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown5">
                                <a class="dropdown-item" href="/meetings">UPCOMING</a>
                                <a class="dropdown-item" href="/">COMPLETED</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/policies">POLICIES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/blogs" role="button">
                                BLOGS
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/code-of-conduct" role="button">
                            CODE OF CONDUCT
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                    {/* <div class="header-contact d-flex align-items-center">
                        <div class="lets-talk-btn">
                            <a href="contact.html">LET'S TALK <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div> */}
                </div>
                {/* <div class="nav-btns d-flex">
                    <div class="shopping-cart">
                        <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                    </div>
                    <div class="search-btn">
                        <a href="#"><i class="fas fa-search"></i></a>
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