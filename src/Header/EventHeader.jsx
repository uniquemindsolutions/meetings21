import React from 'react'
import { Link } from 'react-router-dom'


const EventHeader = () => {
    return (
        <>
            <div className="header-main-con index3-header w-100 float-left">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a className="navbar-brand" href="index.html">
                    <figure className="mb-0 custom-logo">
                        <img src="/images/meetings-logo.png" alt="meetings21" />
                    </figure>
                </a>
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
                           <Link className='nav-link p-0 active' to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link p-0' to="/committee">Committee</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Submission
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <a className="dropdown-item" href="/topics">Topics</a>
                                <a className="dropdown-item" href="/abstract">Call for Abstract</a>
                                <a className="dropdown-item" href="/">Submit Abstract</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Agenda
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <a className="dropdown-item" href="/">Speakers</a>
                                <a className="dropdown-item" href="/">Program</a>
                                <a className="dropdown-item" href="/">Presentation Guidelines</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link p-0' to="/">Sponsors</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <a className="dropdown-item" href="/">Awards</a>
                                <a className="dropdown-item" href="/">Venue</a>
                                <a className="dropdown-item" href="/">Policies</a>
                            </div>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link p-0' to="/contact">CONTACT</Link>
                        </li>
                       
                    </ul>
                    <div class="header-contact d-flex align-items-center">
                        <div class="lets-talk-btn">
                            <a href="contact.html">Registration <i class="fas fa-arrow-right"></i></a>
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