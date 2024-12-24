import React from "react";

const AboutSection = () => {
  return (

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
                            <div className="status">
                                EVE OWENS - <span className="d-inline-block">CO</span>
                            </div>
                        </div>
                    </div>
                    <div className="ceo-box" data-aos="fade-up" data-aos-duration="700">
                        <div className="ceo-image-box">
                            <figure className="mb-0">
                                <img src="/images/ceo-img1.jpg" alt="ceo-image" />
                            </figure>
                            <div className="status">
                                JHON SMITH - <span className="d-inline-block">CEO</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div className="counter-sec">
                <ul className="list-unstyled mb-0" data-aos="fade-up" data-aos-duration="700"> 
                    <li className="position-relative">
                        <div className="count d-inline-block">20</div>
                        <span className="d-block client-status">Skilled Speakers</span>
                    </li>
                    <li className="position-relative">
                        <div className="count d-inline-block">5</div>
                        <span className="d-block client-status">Days Full of Inspiration</span>
                    </li>
                    <li className="position-relative">
                        <div className="count d-inline-block">15</div>
                        <span className="d-block client-status">Unique Workshops</span>
                    </li>
                    <li className="position-relative">
                        <div className="counter-box position-relative">
                            <div className="count d-inline-block">2</div>
                            <div className="plus d-inline-block"><span>X</span></div>
                        </div>
                        <span className="d-block client-status">Networking with Industry</span>
                    </li>
                </ul>
            </div> */}
        </div>
    </section>
    

    
    
  );
};

export default AboutSection;