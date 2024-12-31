import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from '../Footer/footer';
import EventHeader from '../Header/EventHeader';
import $ from "jquery";
import "owl.carousel/dist/owl.carousel.min.js"; // Import Owl Carousel JS
import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Owl Carousel Theme CSS
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Footer from '../Footer/footer';
// import "./ModalPopup.css"; 

window.$ = window.jQuery = $; // Expose jQuery globally
const Events = () => {

    const [openModalId, setOpenModalId] = useState(null);

    const speakers = [
        {
            id: 1,
            name: "Federico Rosei",
            image: "/images/speakers/pspeaker1.png",
            details: [
                "2010 PEO Engineering Medal for Entrepreneurship",
                "2013 EIC Sir John Kennedy Medal",
                "2016 IEEE A.G.L. McNaughton Gold Medal",
            ],
            position: "INRS, Canada",
        },
        {
            id: 2,
            name: "Ben Zhong TANG",
            image: "/images/speakers/pspeaker2.jpg",
            details: [
                "2010 PEO Engineering Medal for Entrepreneurship",
                "2013 EIC Sir John Kennedy Medal",
                "2016 IEEE A.G.L. McNaughton Gold Medal",
            ],
            position: "Ben Zhong TANG",
        },
        {
            id: 3,
            name: "Jose M. Kenny",
            image: "/images/speakers/pspeaker3.jpg",
            details: [
                "2010 PEO Engineering Medal for Entrepreneurship",
                "2013 EIC Sir John Kennedy Medal",
                "2016 IEEE A.G.L. McNaughton Gold Medal",
            ],
            position: "University of Perugia, Italy",
        },
        {
            id: 4,
            name: "Jan DUSZA",
            image: "/images/speakers/pspeaker4.jpg",
            details: [
                "2010 PEO Engineering Medal for Entrepreneurship",
                "2013 EIC Sir John Kennedy Medal",
                "2016 IEEE A.G.L. McNaughton Gold Medal",
            ],
            position: "Institute of Materials Research of SAS, Slovakia",
        },
    ];

    const openModal = (id) => setOpenModalId(id);
    const closeModal = () => setOpenModalId(null);

    useEffect(() => {


        $('#owl-carouselone').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('#owl-carouseltwo').owlCarousel({
            loop: true,
            margin: 20, // Corrected the margin value for consistency
            nav: true,
            navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2 // Updated to match intended layout
                },
                1000: {
                    items: 3
                }
            }
        });

        $('#owl-carouselfive').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });





        // $("#owl-carousel").owlCarousel({
        //   loop: true,
        //   margin: 10,
        //   nav: true,
        //   dots: true,
        //   autoplay: true,
        //   navText: [
        //     "<i className='fas fa-arrow-left'></i>",
        //     "<i className='fas fa-arrow-right'></i>",
        //   ],
        //   responsive: {
        //     0: { items: 1 },
        //     600: { items: 2 },
        //     1000: { items: 3 },
        //   },
        // });
        // AOS.init({
        //   duration: 1000, 
        //   once: true,    
        // });
    }, []);
    return (
        <div className='event-p'>
            <EventHeader />
            <section className='events-p'>
                <section className="index3-banner-section w-100 float-left">
                    <div className="container-fluid">
                        <div className="index3-banner-outer-con">
                            <div id="owl-carouselone" className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="index3-banner-inner-con">
                                        <div className="index3-banner-img-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-banner-img3.jpg" alt="index3-banner-img1" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025</span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>International Congress of</small><br />Materials Science and Engineering</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
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
                                                <img src="/images/events-banner1.jpg" alt="index3-banner-img2" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025</span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>International Congress of</small><br />Materials Science and Engineering</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
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
                                                <img src="/images/index3-banner-img3.jpg" alt="index3-banner-img1" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025</span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>International Congress of</small><br />Materials Science and Engineering</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
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
                <section className="journey-section w-100 float-left padding-top padding-bottom grey-bg position-relative">
                    <div className="container-fluid">
                        <div className="journey-inner-con">
                            <div className="journey-text-con">
                                <h2>About Conference</h2>
                                <p>
                                    We understand the importance of academic conferences in 21st century to foster collaboration, sharing knowledge, and advancing innovation. As part of our commitment to providing a platform for meaningful dialogue and the exchange of cutting-edge research, we curate conferences with a deep appreciation for the scholarly community.
                                </p>
                                <p>
                                    Each conference we organize is designed to surpass expectations by our team of experienced professionals. We handle every detail with precision, from meticulously planning the program to coordinating logistics, so you can focus on what really matters – the content and connections that make academic conferences so meaningful.
                                </p>
                                <p>
                                    It is our passion for academic excellence and understanding of the changing landscape of research and education that sets us apart. In order to create a rich tapestry of ideas, we curate conferences that bring together experts from diverse fields.
                                </p>
                                <p>
                                    Meetings21 remains at the forefront of conference organization innovation in an era of rapid technological advancement. Using the latest technology, we provide virtual attendance options, interactive sessions, and seamless networking opportunities to enhance the conference experience.
                                </p>
                                <p>
                                    Welcome to the world where ideas converge, knowledge thrives, and connections flourish at Meetings21.
                                </p>
                                <div className="generic-btn">
                                    <a href="about.html">READ MORE <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="journey-video-con d-inline-block">
                                <div className="ticket-right-section">

                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        modules={[Navigation, Pagination]}
                                    >
                                        <SwiperSlide>
                                            <img className='img-fluid w-100' src="/images/event-sm-slider.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='img-fluid w-100' src="/images/event-sm-slider.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='img-fluid w-100' src="/images/event-sm-slider.jpg" alt="" />
                                        </SwiperSlide>
                                    </Swiper>

                                </div>
                                {/* <div id="light">
                                    <a className="boxclose" id="boxclose" onclick="lightbox_close();"></a>
                                    <div id="VisaChipCardVideo" >
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/wdw8KNmr2pc?si=FuEK7fdoFZh86koK"
                                            title="YouTube video player" frameborder="0"></iframe>

                                    </div>
                                </div> */}

                                <div id="fade" onClick="lightbox_close();"></div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="digital-conference-section">
                            <div className="digital-conference-img-con">
                                <figure className="mb-0 position-relative">
                                    <img src="/images/digital-conference-img2.jpg" alt="digital-conference-img" />
                                </figure>
                            </div>
                            <div className="digital-counter-con">
                                <ul className="list-unstyled mb-0">
                                    <li className="position-relative">
                                        <div className="count d-inline-block">25</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Speakers</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="count d-inline-block">32</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Sponsors</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="count d-inline-block">40</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Session</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="counter-box position-relative">
                                            <div className="2k-con">
                                                <div className="count d-inline-block">2</div>
                                                <small className="d-inline-block">K</small>
                                            </div>
                                            <div className="plus-details">
                                                <div className="plus d-inline-block"><span>+</span></div>
                                                <span className="d-block client-status">Attendees</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="digital-text-con">
                                    <h3>Join Us at the Biggest Conference
                                        <span className="d-inline-block">NOV 21-25</span>, 2024</h3>
                                    <div className="generic-btn">
                                        <a href="contact.html">Add to Calendar <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-event-info-zone w-100 float-left padding-bottom">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            <span className="small-text">WHY MEETINGS21?</span>
                            <h2>Our Services and Highlights</h2>
                        </div>
                        <div className="index3-event-info-inner-con">
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img1.png" alt="event-zone-img1" />
                                </figure>
                                <h3>21+ Hours of Content</h3>
                                <p>Listen to the 21 hours of quality presentations by the experts in the field.</p>
                            </div>
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img2.png" alt="event-zone-img2" />
                                </figure>
                                <h3>World Class Speakers:</h3>
                                <p>Our conference features Top speakers as Plenary and Keynote Speakers.</p>
                            </div>
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img3.png" alt="event-zone-img3" />
                                </figure>
                                <h3>Live Q&A:</h3>
                                <p>Get answers and Clarify your doubts directly from the experts.</p>
                            </div>
                        </div>
                        <div className="index3-event-info-inner-con mt-5">
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img1.png" alt="event-zone-img1" />
                                </figure>
                                <h3>Conference & Awards:</h3>
                                <p>We recognize and award the top presentations in the conference.</p>
                            </div>
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img2.png" alt="event-zone-img2" />
                                </figure>
                                <h3>24/7 support:</h3>
                                <p>We are available round the clock to support with any concern.</p>
                            </div>
                            <div className="index3-event-zone">
                                <figure>
                                    <img src="/images/event-zone-img3.png" alt="event-zone-img3" />
                                </figure>
                                <h3>Quick Refunds:</h3>
                                <p>All refunds will be processed within a fixed timeframe for hassle free refunds.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className='index3-event-info-zone padding-top padding-bottom'>
        <div className='container'>
            <div className='row'>
                <div className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                <figure className='speakers-box'>
                    <div className="team-image xs-width-100">
                        <img src="/images/speakers/pspeaker1.png" alt="" data-no-retina="" />
                        <div className="overlay-content text-center">
                            <div className="display-table height-100 width-100">
                                <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <ul className="text-white font-size-15px display-inline-block no-margin min-height-176px">
                                      <li>2010 PEO Engineering Medal for Entrepreneurship</li>
                                      <li>2013 EIC Sir John Kennedy Medal</li>
                                      <li>2016 IEEE A.G.L. McNaughton Gold Medal</li>
                                    </ul>                        
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb"></div>
                                    <a href="#" target="_blank" className="text-white font-size-24px mr-3"><i className="fa-regular fa-eye"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                    </div>
                    <figcaption>
                        <div className="team-member-position text-center">
                            <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">Federico Rosei</div>
                            <div className="text-medium font-weight-500 text-dark-gray"></div>
                            <div className="text-medium font-weight-500 text-dark-gray font-size-15px">INRS, Canada</div>
                        </div>   
                    </figcaption>
                </figure>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                <figure className='speakers-box'>
                    <div className="team-image xs-width-100">
                        <img src="/images/speakers/pspeaker2.jpg" alt="" data-no-retina="" />
                        <div className="overlay-content text-center">
                            <div className="display-table height-100 width-100">
                                <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <ul className="text-white font-size-15px display-inline-block no-margin min-height-176px">
                                      <li>2010 PEO Engineering Medal for Entrepreneurship</li>
                                      <li>2013 EIC Sir John Kennedy Medal</li>
                                      <li>2016 IEEE A.G.L. McNaughton Gold Medal</li>
                                    </ul>                        
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb"></div>
                                    <a href="#" target="_blank" className="text-white font-size-24px mr-3"><i className="fab fa-google"></i></a>
                                    <a href="#" target="_blank" className="text-white font-size-24px"><i className="fa fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                    </div>
                    <figcaption>
                        <div className="team-member-position text-center">
                            <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">Ben Zhong TANG</div>
                            <div className="text-medium font-weight-500 text-dark-gray"></div>
                            <div className="text-medium font-weight-500 text-dark-gray">Ben Zhong TANG</div>
                        </div>   
                    </figcaption>
                </figure>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                <figure className='speakers-box'>
                    <div className="team-image xs-width-100">
                        <img src="/images/speakers/pspeaker3.jpg" alt="" data-no-retina="" />
                        <div className="overlay-content text-center">
                            <div className="display-table height-100 width-100">
                                <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <ul className="text-white font-size-15px display-inline-block no-margin min-height-176px">
                                      <li>2010 PEO Engineering Medal for Entrepreneurship</li>
                                      <li>2013 EIC Sir John Kennedy Medal</li>
                                      <li>2016 IEEE A.G.L. McNaughton Gold Medal</li>
                                    </ul>                        
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb"></div>
                                    <a href="#" target="_blank" className="text-white font-size-24px mr-3"><i className="fab fa-google"></i></a>
                                    <a href="#" target="_blank" className="text-white font-size-24px"><i className="fa fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                    </div>
                    <figcaption>
                        <div className="team-member-position text-center">
                            <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">Jose M. Kenny</div>
                            <div className="text-medium font-weight-500 text-dark-gray"></div>
                            <div className="text-medium font-weight-500 text-dark-gray">University of Perugia, Italy</div>
                        </div>   
                    </figcaption>
                </figure>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                <figure className='speakers-box'>
                    <div className="team-image xs-width-100">
                        <img src="/images/speakers/pspeaker4.jpg" alt="" data-no-retina="" />
                        <div className="overlay-content text-center">
                            <div className="display-table height-100 width-100">
                                <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <ul className="text-white font-size-15px display-inline-block no-margin min-height-176px">
                                      <li>2010 PEO Engineering Medal for Entrepreneurship</li>
                                      <li>2013 EIC Sir John Kennedy Medal</li>
                                      <li>2016 IEEE A.G.L. McNaughton Gold Medal</li>
                                    </ul>                        
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb"></div>
                                    <a href="#" target="_blank" className="text-white font-size-24px mr-3"><i className="fab fa-google"></i></a>
                                    <a href="#" target="_blank" className="text-white font-size-24px"><i className="fa fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                    </div>
                    <figcaption>
                        <div className="team-member-position text-center">
                            <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">Jan DUSZA</div>
                            <div className="text-medium font-weight-500 text-dark-gray"></div>
                            <div className="text-medium font-weight-500 text-dark-gray">Institute of Materials Research of SAS, Slovakia</div>
                        </div>   
                    </figcaption>
                </figure>
                </div>
            </div>
        </div>
        <div className="img-popup">
            <img src="" alt="Popup Image" />
            <div className="close-btn">
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
      </section> */}
                <section className='index3-event-info-zone padding-top padding-bottom'>
                    <div className='container'>
                        <div className="generic-title2 text-center">
                            <span className="small-text">The Speakers</span>
                            <h2>Meet Our Stellar Speakers</h2>
                        </div>
                        <div className='row'>

                            {speakers.map((speaker) => (
                                <div
                                    key={speaker.id}
                                    className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight"
                                >
                                    <figure className="speakers-box">
                                        <div className="team-image xs-width-100">
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                                data-no-retina=""
                                            />
                                            <div className="overlay-content text-center">
                                                <div className="display-table height-100 width-100">
                                                    <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                                        <div className="min-height-176px">
                                                        <ul className="text-white font-size-15px display-inline-block no-margin ">
                                                             {speaker.details.map((detail, index) => (
                                                                <li key={index}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                                              </svg> {detail}</li>
                                                                )
                                                            )}
                                                         </ul>
                                                         </div>
                                                        <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                                                        <a
                                                            href="#"
                                                            className="text-white font-size-24px mr-3"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                openModal(speaker.id);
                                                            }}
                                                        >
                                                            {/* <i className="fa-regular fa-eye"></i> */}
                                                            <button className='btn-biography'> View Biography </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                                        </div>
                                        <figcaption>
                                            <div className="team-member-position text-center">
                                                <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                                                    {speaker.name}
                                                </div>
                                                <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                                                    {speaker.position}
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Modal */}
                    {speakers.map(
                        (speaker) =>
                            openModalId === speaker.id && (
                                <div key={speaker.id} className="modal-overlay">
                                    <div className="modal-content">
                                        <h5 className="modal-title">{speaker.name}</h5>
                                        <p>{speaker.position}</p>
                                        <ul>
                                            {speaker.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="custom-button"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )
                    )}

                </section>

                <section className="index3-event-section w-100 float-left padding-top padding-bottom">
                    <div className="container">
                        <div className="generic-title">
                            <span className="small-text">SCHEDULE OF EVENT</span>
                            <h2 className="mb-0">Conference Schedule</h2>
                        </div>
                        <div className="index3-event-tabs-con">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home"
                                        type="button" role="tab" aria-controls="home" aria-selected="true">DAY 1</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button"
                                        role="tab" aria-controls="profile" aria-selected="false">DAY 2</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button"
                                        role="tab" aria-controls="contact" aria-selected="false">DAY 3</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div id="accordion" className="index3-faqs">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con"><div className="index3-event-month text-left">
                                                                    <small className="d-block">08:00 AM-08.45 AM</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>

                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    26
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">09:00 AM-10.00 AM</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    27
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">10:00 AM-11.15 AM</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div id="accordion" className="index3-faqs">
                                        <div className="card">
                                            <div className="card-header" id="headingsix">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapsesix" aria-expanded="false"
                                                        aria-controls="collapsesix">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    27
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">10:00 AM-11.15 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img3.png"
                                                                        alt="index3-organizer-img3" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Bringing al to Life</span>
                                                                    <small className="d-block"><span>By:</span> Satya Nadella - CEO of
                                                                        Microsoft</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapsesix" className="collapse" aria-labelledby="headingsix"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingseven">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseseven" aria-expanded="false"
                                                        aria-controls="collapseseven">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    28
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">11:00 AM-12.00 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img4.png"
                                                                        alt="index3-organizer-img4" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Creativitye Technology</span>
                                                                    <small className="d-block"><span>By:</span> Neal Mohan CEO of
                                                                        YouTube</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapseseven" className="collapse" aria-labelledby="headingseven"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingeight">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseeight" aria-expanded="true"
                                                        aria-controls="collapseeight">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    25
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">08:00 AM-08.45 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img1.png"
                                                                        alt="index3-organizer-img1" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Creativitye Technology</span>
                                                                    <small className="d-block"><span>By:</span> Tim Cook - CEO of
                                                                        Apple</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>

                                            <div id="collapseeight" className="collapse" aria-labelledby="headingeight"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingnine">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapsenine" aria-expanded="false"
                                                        aria-controls="collapsenine">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    26
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">09:00 AM-10.00 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img2.png"
                                                                        alt="index3-organizer-img2" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Driverless Cities</span>
                                                                    <small className="d-block"><span>By:</span> Andy Jassy - CEO of
                                                                        Amazon</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapsenine" className="collapse" aria-labelledby="headingnine"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div id="accordion" className="index3-faqs">
                                        <div className="card">
                                            <div className="card-header" id="headingten">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseten" aria-expanded="true" aria-controls="collapseten">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    25
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">08:00 AM-08.45 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img1.png"
                                                                        alt="index3-organizer-img1" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Creativitye Technology</span>
                                                                    <small className="d-block"><span>By:</span> Tim Cook - CEO of
                                                                        Apple</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>

                                            <div id="collapseten" className="collapse" aria-labelledby="headingten"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingeleven">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseeleven" aria-expanded="false"
                                                        aria-controls="collapseeleven">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    26
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">09:00 AM-10.00 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img2.png"
                                                                        alt="index3-organizer-img2" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Driverless Cities</span>
                                                                    <small className="d-block"><span>By:</span> Andy Jassy - CEO of
                                                                        Amazon</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingtwelve">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapsetwelve" aria-expanded="false"
                                                        aria-controls="collapsetwelve">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    27
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">10:00 AM-11.15 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img3.png"
                                                                        alt="index3-organizer-img3" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Bringing al to Life</span>
                                                                    <small className="d-block"><span>By:</span> Satya Nadella - CEO of
                                                                        Microsoft</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapsetwelve" className="collapse" aria-labelledby="headingtwelve"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingthirteen">
                                                <h6 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapsethirteen" aria-expanded="false"
                                                        aria-controls="collapsethirteen">
                                                        <div className="index3-event-detail">
                                                            <div className="index3-event-date-con">
                                                                <div className="index3-event-date">
                                                                    28
                                                                </div>
                                                                <div className="index3-event-month text-left">
                                                                    <span className="d-block">NOVEMBER</span>
                                                                    <small className="d-block">11:00 AM-12.00 AM</small>
                                                                </div>
                                                            </div>
                                                            <div className="index3-event-organizer">
                                                                <figure className="mb-0">
                                                                    <img src="assets/images/index3-organizer-img4.png"
                                                                        alt="index3-organizer-img4" />
                                                                </figure>
                                                                <div className="index3-organizer-detail">
                                                                    <span className="d-block">Creativitye Technology</span>
                                                                    <small className="d-block"><span>By:</span> Neal Mohan CEO of
                                                                        YouTube</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h6>
                                            </div>
                                            <div id="collapsethirteen" className="collapse" aria-labelledby="headingthirteen"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. </p>
                                                    <span className="d-block"><i className="fas fa-map-marker-alt"></i> 21 KING STREET, 1175
                                                        AUSTRALIA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-pricing-plans-section w-100 float-left padding-top padding-bottom">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            <span className="small-text">TICKET PRICING</span>
                            <h2>Our Conference Ticket Prices</h2>
                        </div>
                        <div className="index3-plan-inner-con">
                            <div className="ticket-details silver-ticket-details">
                                <h3>Oral Talk</h3>
                                {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                                <div className="price"><small>$ / ₹</small>699</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="ticket-details gold-ticket-details">
                                <h3>Invited Talk</h3>
                                {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                                <div className="price"><small>$ / ₹</small>649</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                                </div>
                                <div className="recomended-box">
                                    RECOMMENDED
                                </div>
                            </div>
                            <div className="ticket-details premium-ticket-details">
                                <h3>Poster Presentation</h3>
                                {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                                <div className="price"><small>$ / ₹</small>399</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="index3-plan-btn text-center">
                            <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                            <div className="generic-btn">
                                <a href="pricing.html">GET VIP PASS <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-registration-section w-100 float-left">
                    <div className="container">
                        <div className="index3-registration-inner-con">
                            <div className="index3-registration-left-con">
                                <h2>Join the Biggest <br />
                                    Conf-2024 of The Year</h2>
                                <p>Hear Highlights From Our Sponsors, or Get a Lite or Core Subscription
                                    to Watch the Full Main Stage Event on Demand.</p>
                                <div className="generic-btn">
                                    <a href="contact.html">REGISTER NOW <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="index3-registration-right-con">
                                <figure className="mb-0">
                                    <img src="/images/index3-registration-right-img-2.png" alt="index3-registration-right-img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-top-experts-section w-100 float-left padding-top padding-bottom">
                    <div className="container-fluid">
                        <div className="generic-title2 text-center">
                            <span className="small-text">SHOWCASE CONFERENCE</span>
                            <h2>We Bring Together Top Experts <br />
                                to Discuss the Future.</h2>
                        </div>
                        <div className="index3-top-experts-inner-section">
                            <div className="index3-experts-left-con">
                                <div className="index3-expert index3-expert-con1 container__img-holder">
                                    <img src="/images/index3-expert-img-1.jpg" alt="index3-expert-img1" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-6.jpg" alt="index3-expert-img6" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-7.jpg" alt="index3-expert-img7" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="index3-experts-right-con">
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-2.jpg" alt="index3-expert-img2" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-3.jpg" alt="index3-expert-img3" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-4.jpg" alt="index3-expert-img4" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src="/images/index3-expert-img-5.jpg" alt="index3-expert-img5" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert-right-bottom-con">
                                    <div className="index3-expert container__img-holder">
                                        <img src="/images/index3-expert-img-8.jpg" alt="index3-expert-img8" />
                                        <div className="search-icon-con">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <div className="index3-expert container__img-holder">
                                        <img src="/images/index3-expert-img-9.jpg" alt="index3-expert-img9" />
                                        <div className="search-icon-con">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-popup">
                        <img src="/images/index3-expert-img9.jpg" alt="Popup Image" />
                        <div className="close-btn">
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </section>
                <section className="index3-testimonial-section w-100 float-left padding-top padding-bottom">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            <span className="small-text">TESTIMONIALS</span>
                            <h2>Hear it From Our Clients</h2>
                        </div>
                        <div className="index3-testimonial-inner-con">
                            <div id="owl-carouseltwo" className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-1.png" alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-2.png" alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-3.png" alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-1.png" alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-2.png" alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img-3.png" alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img1.png" alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img2.png" alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src="/images/index3-client-img3.png" alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src="/images/index3-quote-icon.png" alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-main-section index3-blog-section w-100 float-left padding-top position-relative">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            <span className="small-text">SKILLS &amp; EXPERIENCE</span>
                            <h2 className="mb-0">Recent News Articles</h2>
                        </div>
                        <div className="blogs-inner-con">
                            <div className="blog-box position-relative">
                                <div className="blog-img position-relative">
                                    <span className="d-inline-block">Illustration, Art</span>
                                    <figure className="mb-0">
                                        <img src="/images/blog-img1-1.jpg" alt="blog-img1" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <span className="d-block">Nov 11, 2020</span>
                                    <h6 className="position-relative"><a href="single-blog.html">Lorem ipsum dolor sita consectetur adip.</a></h6>
                                </div>
                            </div>
                            <div className="blog-box position-relative">
                                <div className="blog-img position-relative">
                                    <span className="d-inline-block">Vintage, Design</span>
                                    <figure className="mb-0">
                                        <img src="/images/blog-img-2.jpg" alt="blog-img3" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <span className="d-block">Nov 18, 2020</span>
                                    <h6 className="position-relative"><a href="single-blog.html">Dolor sit amet, consec adipiscing elit, sed.</a></h6>
                                </div>
                            </div>
                            <div className="blog-box position-relative">
                                <div className="blog-img position-relative">
                                    <span className="d-inline-block">Questions, Answers</span>
                                    <figure className="mb-0">
                                        <img src="/images/blog-img-3.jpg" alt="blog-img3" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <span className="d-block">Nov 25, 2020</span>
                                    <h6 className="position-relative"><a href="single-blog.html">Sit amet, consecteturs elit, sed.</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="index3-sponsers-main-section sponsers-main-section w-100 float-left">
                    <div className="container">
                        <div className="sponsers-companies">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <figure className="mb-0">
                                        <img src="/images/sponsers-logo1.png" alt="sponsers-logo1" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src="/images/sponsers-logo2.png" alt="sponsers-logo2" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src="/images/sponsers-logo3.png" alt="sponsers-logo3" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src="/images/sponsers-logo4.png" alt="sponsers-logo4" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src="/images/sponsers-logo5.png" alt="sponsers-logo5" />
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
                <a id="button"></a>
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default Events