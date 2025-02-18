import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const NotFound = () => {
    return (
        <div>
            {/* <Header />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Page Not Found</h1>
                        
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Page Not Found</li>
                            </ol>
                        </nav>
                    </div>
                </section> */}
            <div className='mt-5' style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    )
}

export default NotFound 