import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';

const Contacts = () => {
  return (
    <div className='contact-p'>
        <Header />
        <section class="sub-banner-main-section contact-banner w-100 float-left">
          <div class="container">
              <div class="sub-banner-inner-con">
                  <h1>CONTACT US</h1>
                  <p>Inspiring Talks, Meet the Best Product People Around the World, <br />
                      and Party Together After  the Event!
                      </p>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb d-inline-block mb-0">
                          <li class ="breadcrumb-item d-inline-block"><a href="index.html">HOME</a></li>
                          <li class="breadcrumb-item active d-inline-block" aria-current="page">CONTACT</li>
                      </ol>
                  </nav>
              </div>
          </div>
       </section>
       <section class="conatct-information-section w-100 float-left padding-top padding-bottom">
        <div class="container">
            <div class="generic-title text-center">
                <span class="small-text">CONTACT INFORMATION</span>
                <h2>Get In Touch With Us</h2>
            </div>
            <div class="contact-info-inner-con">
                <div class="contact-box">
                    <figure>
                        <img src="/images/location-icon1.png" alt="location-icon" />
                    </figure>
                    <h6>Office Address</h6>
                    <p>1D. No. 404, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad, Postal Code: 500081, India</p>
                    <a href="contact.html">Get Directions</a>
                </div>
                <div class="contact-box">
                    <figure>
                        <img src="/images/mobile-icon.png" alt="mobile-icon" />
                    </figure>
                    <h6>Phone</h6>
                    <ul class="list-unstyled">
                        <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                        <li><a href="tel:+919848141833">(+91 9848 14 1833)</a></li>
                    </ul>
                    <a href="tel:+61383766284">Call Now</a>
                </div>
                <div class="contact-box">
                    <figure>
                        <img src="/images/mail-icon.png" alt="mail-icon" />
                    </figure>
                    <h6>Email</h6>
                    <ul class="list-unstyled">
                        <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                        <li><a href="mailto:contact@meetings21.com">contact@meetings21.com</a></li>
                    </ul>
                    <a href="mailto:contact@meetings21.com">Email Now</a>
                </div>
            </div>
        </div>
      </section>
      <section class="contact-form-section w-100 float-left padding-top padding-bottom light-bg">
        <div class="container">
            <div class="generic-title text-center">
                <span class="text-center small-text">GET IN TOUCH WITH US</span>
                <h2>Send Us a Message</h2>
            </div>
            <form class="form-box" method="post" id="contactpage">
                <ul class="list-unstyled">
                    <li>
                        <input type="text" name="fname" id="fname" placeholder="Name" />
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
      <div class="responsive-map w-100 float-left">
        <div class="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8387096759334!2d144.9532000767644!3d-37.817246734238644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1692879195247!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
        <Footer />
    </div>    
  )
}

export default Contacts