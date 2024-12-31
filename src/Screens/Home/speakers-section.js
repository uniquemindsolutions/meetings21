import React, { useEffect } from "react";

const SpeakerSection = () => {
    return (
        
        <section className="speakers-main-section w-100 float-left padding-top padding-bottom">
        <div className="container-fluid">
            <div className="generic-title text-center">
                <span className="small-text" data-aos="fade-up" data-aos-duration="700">WORLD BEST SPEAKERS</span>
                <h2 data-aos="fade-up" data-aos-duration="700">Meet Our Amazing Speakers</h2>
                <p data-aos="fade-up" data-aos-duration="700">8+ Inspiring Talks, Meet the Best Product People Around the World, and <br /> Party Together After the
                    Event!</p>
            </div>
            <div className="speakers-inner-sec" data-aos="fade-up" data-aos-duration="700">
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img1.jpg" alt="speakers-img1" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn1">Declan Heyes <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data1">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img2.jpg" alt="speakers-img2" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn2">Stella Hindley <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data2">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img3.jpg" alt="speakers-img3" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn3">Jackson Allardyce <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data3">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img4.jpg" alt="speakers-img4" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn4">Kiara Simons <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data4">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img5.jpg" alt="speakers-img5" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn5">Eden Hoff <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data5">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img6.jpg" alt="speakers-img6" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn6">Jesse Beeby <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data6">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img7.jpg" alt="speakers-img7" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn7">Matthew Grey-Smith <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data7">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
                <div className="speaker-box position-relative">
                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    <figure className="mb-0">
                        <img src="assets/images/speakers-img1.jpg" alt="speakers-img1" />
                    </figure>
                    <div className="speaker-status">
                        <button className="showBtn8">Declan Heyes <i className="fas fa-angle-up"></i></button>
                        <div className="staus-con data8">
                            <span>CEO - ConfX</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="generic-btn text-center" data-aos="fade-up" data-aos-duration="700">
                <a href="speaker.html">VIEW ALL SPEAKERS <i className="fas fa-arrow-right"></i></a>
            </div>
        </div>
        </section>
        
    );
};

export default SpeakerSection;
