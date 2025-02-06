import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/footer'

const PrivacyPolicy = () => {
    return (
        <main>
            <Header />
            
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>PRIVACY POLICY</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">Privacy Policy</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="container padding-top padding-bottom">
                <h2>Coming Soon</h2>
            </div>

            <Footer />
        </main>
    )
}

export default PrivacyPolicy