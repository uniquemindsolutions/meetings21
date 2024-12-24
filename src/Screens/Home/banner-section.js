import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel"; // Import Owl Carousel JS


window.$ = window.jQuery = $;
const BannerSection = () => {
    useEffect(() => {
       
      }, []);
    
  return (
   
    <div id="owl-carouselone" className="owl-carousel">

<section className="index3-banner-section w-100 float-left">
        <div className="container-fluid">
            <div className="index3-banner-outer-con" data-aos="fade-up" data-aos-duration="700">
                <div id="owl-carouselone" className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="index3-banner-inner-con">
                            <div className="index3-banner-img-con">
                                <figure className="mb-0">
                                    <img src="/images/event-slider-1.jpg" alt="index3-banner-img1" />
                                </figure>
                            </div>
                            <div className="index3-banner-text-con">
                                <span className="d-block position-relative">25 SEP, 2024</span>
                                <h1>World Biggest
                                    Business Conf.
                                    2024</h1>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-map-marker-alt"></i> 21 King Street, 1175 Australia</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="contact.html">REGISTER NOW <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="index3-banner-inner-con">
                            <div className="index3-banner-img-con">
                                <figure className="mb-0">
                                    <img src="/images/index3-banner-img2.jpg" alt="index3-banner-img2" />
                                </figure>
                            </div>
                            <div className="index3-banner-text-con">
                                <span className="d-block position-relative">25 SEP, 2024</span>
                                <h1>World Biggest
                                    Business Conf.
                                    2024</h1>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-map-marker-alt"></i> 21 King Street, 1175 Australia</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="contact.html">REGISTER NOW <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="index3-banner-inner-con">
                            <div className="index3-banner-img-con">
                                <figure className="mb-0">
                                    <img src="/images/index3-banner-img1.jpg" alt="index3-banner-img1" />
                                </figure>
                            </div>
                            <div className="index3-banner-text-con">
                                <span className="d-block position-relative">25 SEP, 2024</span>
                                <h1>World Biggest
                                    Business Conf.
                                    2024</h1>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-map-marker-alt"></i> 21 King Street, 1175 Australia</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="contact.html">REGISTER NOW <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>

   
   
  );
};

export default BannerSection;