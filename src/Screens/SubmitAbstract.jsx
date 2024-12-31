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
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <p>Prospective authors are invited to submit abstract via conference website. The accepted abstracts and/or the presentations will be included in summit program and abstract book.</p>
                <p class="font-weight-bold text-center">
                Please do follow the template when preparing your abstract. <a class="btn btn-very-small btn-dark-gray" href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Template</a></p>
            </div> 
        </div>
    </div>
    </section>


    <section class="contact-form-section w-100 float-left padding-top light-bg submit-abs-p">
        <div class="container">
            <form class="form-box" method="post" id="contactpage">
                <ul class="list-unstyled">
                    <li>
                        <select name="respect" id="respect" required="">
                            <option value="">Title *</option>
                            <option value="Prof.">Prof.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Ms."> Ms.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                    </li>
                    <li>
                        <input type="text" name="fname" id="fname" placeholder="First Name" />
                    </li>
                    <li>
                        <input type="text" name="lname" id="lname" placeholder="Last Name" />
                    </li>
                    <li>
                        <input type="tel" name="phone" id="phone" placeholder="Phone" />
                    </li>
                    <li>
                        <input type="email" placeholder="Email" name="email" id="email" />
                    </li>
                    <li>
                        <input type="text" placeholder="Website URL" />
                    </li>
                    <li>
                        <textarea placeholder="Message" name="subject" id="subject"></textarea>
                    </li>
                </ul>
                <div class="submit-btn generic-btn">
                    <button type="submit" id="submit">SEND MESSAGE <i class="fas fa-arrow-right"></i></button>
                </div>
            </form>
        </div>
    </section>






    <section class="mt-5">
        <div class="container">
        <div class="row">
                 {/* <div class="col-md-12">
                    <div id="success-project-contact-form" class="no-margin-lr" style="display: none;"></div>
                </div> */}



                <div class="col-md-4">
                    <div class="select-style big-select">
                        <select name="respect" id="respect" class="bg-transparent no-margin-bottom" required="">
                            <option value="">Title *</option>
                            <option value="Prof.">Prof.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Ms."> Ms.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <input type="text" name="first_name" id="first_name" required="" placeholder="First Name*" class="big-input" />
                </div>
                <div class="col-md-4">
                    <input type="text" name="last_name" id="last_name" required="" placeholder="Last Name *" class="big-input" />
                </div>
                <div class="col-md-8">
                    <input type="text" name="university_institute" required="" id="university_institute" placeholder="University/Institute *" class="big-input" />
                </div>
                <div class="col-md-4">
                    <input type="text" name="country" id="country" required="" placeholder="Country *" class="big-input" />
                </div>
                <div class="col-md-6">
                    <input type="text" name="email" id="email" required="" placeholder="Email *" class="big-input" />
                </div>
                <div class="col-md-6">
                    <input type="text" name="whatsapp" id="whatsapp" required="" placeholder="WhatsApp Number*" class="big-input" />
                </div>
                <div class="col-md-6">
                    <div class="select-style big-select">
                        <select name="presentation_type" required="" id="presentation_type" class="bg-transparent no-margin-bottom">
                            <option value="">Presentation type *</option>
                            <option value="Plenary Presentation">Plenary Presentation</option>
                            <option value="Keynote Presentation">Keynote Presentation</option>
                            <option value="Invited Presentation">Invited Presentation</option>
                            <option value="Oral Presentation">Oral Presentation</option>
                            <option value="Poster Presentation">Poster Presentation</option>
                            <option value="Workshop Presentation">Workshop Presentation</option>
                            <option value="Special Session Presentation">Special Session Presentation</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="select-style big-select">
                        <select name="topic_of_interest" required="" id="topic_of_interest" class="bg-transparent no-margin-bottom">
                            <option value="">Topic of Interest *</option>
                                                                                    <option value="Industrial Engineering and Management">Industrial Engineering and Management</option>
                                                        <option value="Artificial intelligence in Production">Artificial intelligence in Production</option>
                                                        <option value="Sustainable Manufacturing">Sustainable Manufacturing</option>
                                                        <option value="Dynamical Control and Intelligent Systems">Dynamical Control and Intelligent Systems</option>
                                                        <option value="Materials Management &amp; Marketing Management">Materials Management &amp; Marketing Management</option>
                                                        <option value="System Dynamics and Simulation">System Dynamics and Simulation</option>
                                                        <option value="Quality Engineering &amp; Supply Chain Management">Quality Engineering &amp; Supply Chain Management</option>
                                                        <option value="Production Planning and Quality Control">Production Planning and Quality Control</option>
                                                        <option value="Manufacturing Processes &amp; Technology">Manufacturing Processes &amp; Technology</option>
                                                        <option value="Automation &amp; Robotics">Automation &amp; Robotics</option>
                                                        <option value="Systems Engineering">Systems Engineering</option>
                                                        <option value="Computer Aided Manufacturing &amp; Design">Computer Aided Manufacturing &amp; Design</option>
                                                        <option value="Chemical Engineering">Chemical Engineering</option>
                                                        <option value="Machine Learning &amp; Mechatronics">Machine Learning &amp; Mechatronics</option>
                                                        <option value="Atomic Layer Deposition">Atomic Layer Deposition</option>
                                                        <option value="Food Manufacturing &amp; Additive Manufacturing">Food Manufacturing &amp; Additive Manufacturing</option>
                                                        <option value="Product Development &amp; Productivity Improvement">Product Development &amp; Productivity Improvement</option>
                                                        <option value="Industrial 4.0">Industrial 4.0</option>
                                                        <option value="Fluid Mechanics">Fluid Mechanics</option>
                                                        <option value="Control System">Control System</option>
                                                                                    
                        </select>
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="text" required="" name="title_of_the_abstract" id="title_of_the_abstract" placeholder="Title of the Abstract *" class="big-input" />
                </div>
                <div class="col-md-6">
                    <input type="file" required="" name="file" id="file" class="big-input" />
                </div>
                <div class="col-md-6">
                What's 14 + 16 = <input name="captcha" type="text" required="" /> 
                </div>
                <div class="col-md-12">
                    <input type="checkbox" required="" name="accept" class="float-left width-40px" /> <span class="alt-font font-size-15px font-weight-600 text-light-blue tab-tag">If accepted, I agree to all policies and terms and permit my abstract to be included in the proceedings and conference website.</span>
                </div>
                <div class="col-md-12 text-center margin-25px-top">
                    <button type="submit" class="btn btn-extra-large btn-blue md-margin-15px-bottom sm-display-table sm-margin-lr-auto">Submit Abstract</button>
                </div>
            </div>
        </div>
    </section>
    
    
    </div>
    
    <Footer />
    </div>
  )
}

export default SubmitAbstract