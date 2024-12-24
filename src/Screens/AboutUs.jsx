import React from 'react'
import Header from '../Header/Header'
const AboutUs = () => {
  return (
    
    <div>
    <div>
    <Header />
    <section className="sub-banner-main-section w-100 justify-content-center">
    <div className="sub-banner-inner-con text-center">
                <h1 data-aos="fade-up" data-aos-duration="700">ABOUT US</h1>
                <p data-aos="fade-up" data-aos-duration="700">Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
                <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-duration="700">
                    <ol className="breadcrumb d-inline-block mb-0">
                        <li className="breadcrumb-item d-inline-block"><a href="index.html">HOME</a></li>
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">ABOUT</li>
                    </ol>
                </nav>
            </div>
    </section>
    </div>
    <section className="about-main-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="about-inner-con">
                <div className="about-left-con">
                    <div className="generic-title">
                        <span className="small-text" data-aos="fade-up" data-aos-duration="700">Meetings21</span>
                        <h2 data-aos="fade-up" data-aos-duration="700">About Meetings21</h2>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="700">We understand the importance of academic conferences in 21st century to foster collaboration, sharing knowledge, and advancing innovation. As part of our commitment to providing a platform for meaningful dialogue and the exchange of cutting-edge research, we curate conferences with a deep appreciation for the scholarly community.</p>
                    <p data-aos="fade-up" data-aos-duration="700">Each conference we organize is designed to surpass expectations by our team of experienced professionals. We handle every detail with precision, from meticulously planning the program to coordinating logistics, so you can focus on what really matters – the content and connections that make academic conferences so meaningful.</p>
                    <div className="generic-btn" data-aos="fade-up" data-aos-duration="700">
                        <a href="event.html">VIEW SCHEDULE <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="about-right-con">
                    <div className="co-box" data-aos="fade-up" data-aos-duration="700">
                        <div className="investment d-flex">
                            <span>100</span>
                            <small>Speakers <br /> Funds</small>
                        </div>
                        <div className="co-image-box">
                            <figure className="mb-0">
                                <img src="/images/co-image.jpg" alt="co-image" />
                            </figure>
                        </div>
                    </div>
                    <div className="ceo-box" data-aos="fade-up" data-aos-duration="700">
                        <div className="ceo-image-box">
                            <figure className="mb-0">
                                <img src="/images/ceo-img1.jpg" alt="ceo-image" />
                            </figure>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutUs