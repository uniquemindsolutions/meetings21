import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Sponsors = () => {
    return (

        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Sponsorship and Exhibition</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Sponsors</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className='padding-top'>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-5">
                                <figure className="mb-0">
                                    <img src={process.env.PUBLIC_URL + "/images/expo-stand.jpg"} alt="index3-registration-right-img" className='img-fluid w-100' />
                                </figure>
                            </div>

                            <div className="col-md-7 mb-5 pt-5">
                                <h3>Why Partner with Us?</h3>
                                <div className=" ">
                                    <p>
                                        Partnering with our conference offers unique opportunities to showcase your brand, connect with industry leaders, and engage with a diverse audience of professionals. As a sponsor, you gain visibility and recognition, allowing you to:
                                    </p>
                                    
                                    <ul className='ml-4'>
                                        <li>
                                           <b>Enhance Brand Awareness:</b>  Position your brand prominently before an engaged audience of decision-makers and influencers.
                                        </li>
                                        <li>
                                           <b>Network with Key Stakeholders:</b>  Build relationships with potential clients, collaborators, and industry peers during networking sessions and breakout discussions.
                                        </li>
                                        <li>
                                           <b>Showcase Your Solutions:</b>  Highlight your products and services through speaking opportunities, workshops, and interactive booths.
                                        </li>

                                    </ul>
                                </div>
                             </div>

                            <div className="col-md-12 mt-4">
                                <h5>Sponsorship Opportunities:</h5>
                                <p>
                                    We offer a variety of sponsorship packages designed to suit different needs and budgets. Each package includes a range of benefits, such as:
                                </p>

                                <ul className='ml-4'>
                                    <li><b>Logo Placement:</b> Your company logo featured on event materials, including the website, brochures, and signage.</li>
                                    <li><b>Exhibit Space:</b> Showcase your products or services with a dedicated booth in the exhibition area.</li>
                                    <li><b>Speaking Opportunities:</b> Share your insights and expertise through keynote addresses, panel discussions, or workshops.</li>
                                    <li><b>Networking Events:</b> Participate in exclusive sponsor-only events to connect with other sponsors and industry leaders.</li>
                                </ul>


                                <p>
                                    Interested in becoming a sponsor? We’d love to have you on board! Please reach out to our sponsorship team at <b>contact@meetings21.com</b> to discuss available opportunities and find the perfect fit for your organization.
                                </p>

                                <p>
                                    For Sponsorship and Exhibition opportunities download our Sponsor Prospectus. Thank you for considering sponsorship at our conference. Together, we can create an impactful experience for all attendees!
                                </p>
                            <p className="font-weight-bold generic-btn text-center my-5">
                                <a className="btn btn-very-small btn-dark-gray" href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Brochure</a>
                            </p>
                            </div>


                            {/* <div className="col-lg-12 generic-btn text-center mt-4 mb-5">
                                <p>Any questions or information about exhibiting at this conference, please do not hesitate to contact:</p>
                                <a className="" href="https://industrial-engineering.synergiasummits.com/abstract">Register Now</a>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Sponsors