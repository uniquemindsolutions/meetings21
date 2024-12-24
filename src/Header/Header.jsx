import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className="header-main-con w-100 float-left">
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
                            <Link to="/">HOME</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/about">ABOUT US</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Meetings
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <a className="dropdown-item" href="/meetings">UPCOMING</a>
                                <a className="dropdown-item" href="#">COMPLETED</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/policies">POLICIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/code-of-conduct">CODE OF CONDUCT</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
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