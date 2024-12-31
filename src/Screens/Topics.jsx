import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Topics = () => {
  return (
    
    <div>
    <div>
    <EventHeader />
    <section className="sub-banner-main-section w-100 justify-content-center">
    <div className="sub-banner-inner-con text-center">
                <h1>Topics</h1>
                {/* <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-inline-block mb-0">
                        <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">Topics</li>
                    </ol>
                </nav>
            </div>
    </section>
    </div>
    <div class="container padding-top padding-bottom">
        <div className="row mb-4">
            <div className="col-lg-12">
            <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 display-table margin-25px-top">
                                        <ul class="no-padding list-style-5">
                                                        <li>Industrial Engineering and Management</li>
                                                        <li>Artificial intelligence in Production</li>
                                                        <li>Sustainable Manufacturing</li>
                                                        <li>Dynamical Control and Intelligent Systems</li>
                                                        <li>Materials Management &amp; Marketing Management</li>
                                                        <li>System Dynamics and Simulation</li>
                                                        <li>Quality Engineering &amp; Supply Chain Management</li>
                                                        <li>Production Planning and Quality Control</li>
                                                        <li>Manufacturing Processes &amp; Technology</li>
                                                        <li>Automation &amp; Robotics</li>
                                                    </ul>
                                    </div> 
            <div class="col-md-6 col-sm-12 col-xs-12 display-table margin-25px-top">
                                        <ul class="no-padding list-style-5">
                                                        <li>Systems Engineering</li>
                                                        <li>Computer Aided Manufacturing &amp; Design</li>
                                                        <li>Chemical Engineering</li>
                                                        <li>Machine Learning &amp; Mechatronics</li>
                                                        <li>Atomic Layer Deposition</li>
                                                        <li>Food Manufacturing &amp; Additive Manufacturing</li>
                                                        <li>Product Development &amp; Productivity Improvement</li>
                                                        <li>Industrial 4.0</li>
                                                        <li>Fluid Mechanics</li>
                                                        <li>Control System</li>
                                                    </ul>
                                    </div> 
        </div>
        <div className="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col margin-two-top margin-two-bottom sm-margin-15px-bottom xs-margin-10px-bottom text-center">
        <div className='generic-btn mt-5'>
        <a class="btn" href="#">Submit Now</a>
        </div>
        </div>
        </div>
        
        </div>
    <Footer />
    </div>
  )
}

export default Topics