import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const SubmitAbstract = () => {
    return (

        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Abstract Submission</h1>
                        {/* <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Abstract Submission</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className='padding-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <p>Prospective authors are invited to submit abstract via conference website. The accepted abstracts and/or the presentations will be included in summit program and abstract book.</p>
                                <p className="font-weight-bold text-center">
                                    Please do follow the template when preparing your abstract. 
                                    {/* <a className="btn btn-outline-success ml-5 btn-very-small btn-dark-gray" href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Template</a> */}
                                    <div className="index3-faq-btn-con text-center mt-3">
                                        <div className="generic-btn">
                                            <a href="contact.html">Download Template <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* new form start */}
                <div className="container mt-4">
                    <form className="p-4 border rounded shadow-sm mb-5">
                        <div className="form-section">
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="title">Title:</label>
                                        <select className="form-control" id="title">
                                            <option>Prof.</option>
                                            <option>Dr.</option>
                                            <option>Mr.</option>
                                            <option>Ms.</option>
                                            <option>Mrs.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telephone:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-phone"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="organization">Organization:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-building"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organization"
                                        placeholder="Organization/Institution"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-city"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                placeholder="Enter your city name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Country:</label>
                                        <select className="form-control" id="country">
                                            <option>Select country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Presentation type:</label>
                                        <select className="form-control" id="country">
                                            <option>Plenary Talk</option>
                                            <option>Invited Talk</option>
                                            <option>Oral Talk</option>
                                            <option>Poster</option>
                                            <option>Workshop</option>
                                            <option>Special Session</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Topic of interest:</label>
                                        <select className="form-control" id="country">
                                            <option>Select Topic</option>
                                            <option>Topic 1</option>
                                            <option>Topic 2</option>
                                            <option>Topic 3</option>
                                            <option>Topic 4</option>
                                            <option>Topic 5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <label htmlFor="files">Attach File:</label>
                                    <input type="file" className='form-control' />
                                </div>

                                <div className="col-sm-4">
                                    <label htmlFor="files">Captcha:</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className="col-sm-12 mt-4">
                                <label htmlFor="checkBox d-flex">
                                    {/* <input type="checkbox" className='mr-3 ' style={{width:'20px', height:'20px', display:'inline-block'}} /> */}
                                    <span style={{lineHeight:0}}>By clicking "SUBMIT" you agree to all our policies and terms and permit your abstract to be included in the proceedings and conference website.</span>
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <div className="submit-btn generic-btn">
                                <button type="submit" id="submit" className='border-0'>SUBMIT <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* new form end */}
                
            </div>

            <Footer />
        </div>
    )
}

export default SubmitAbstract