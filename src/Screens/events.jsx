import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import SubscribeSection from './Home/subscribe-section';

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
import SubscribeSection from './Home/subscribe-section';
import { Link } from 'react-router-dom';
import Services from './Home/services';
// import "./ModalPopup.css"; 

window.$ = window.jQuery = $; // Expose jQuery globally
const Events = () => {

    const [openModalId, setOpenModalId] = useState(null);

    const speakers = [
        {
            id: 1,
            name: "Federico Rosei",
            talkTitle: "Lorem Ipsum is simply dummy text",
            Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
            image: "images/speakers/pspeaker1.png",
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
            talkTitle: "Lorem Ipsum is simply dummy text",
            Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
            image: "images/speakers/pspeaker2.jpg",
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
            talkTitle: "Lorem Ipsum is simply dummy text",
            Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
            image: "images/speakers/pspeaker3.jpg",
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
            talkTitle: "Lorem Ipsum is simply dummy text",
            Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
            image: "images/speakers/pspeaker4.jpg",
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
            // navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
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
            // navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
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
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-banner-img3.jpg"} alt="index3-banner-img1" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025 <span className="position-relative" style={{ marginLeft: '15%' }}> Hybrid Event</span></span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>International Congress of</small><br />Civil, Architectural and Environmental Engineering</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
                                            </ul>
                                            <div className="generic-btn">
                                                <Link to="/registration_form">REGISTER NOW<i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-banner-inner-con">
                                        <div className="index3-banner-img-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/events-banner1.jpg"} alt="index3-banner-img2" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025 <span className="position-relative" style={{ marginLeft: '15%' }}> Hybrid Event</span></span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'> </small><br />MSEDUBAI2026</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
                                            </ul>
                                            <div className="generic-btn">
                                                <Link to="/registration_form">REGISTER NOW <i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-banner-inner-con">
                                        <div className="index3-banner-img-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-banner-img3.jpg"} alt="index3-banner-img1" />
                                            </figure>
                                        </div>
                                        <div className="index3-banner-text-con">
                                            <span className="d-block position-relative">October 21-23, 2025 <span className="position-relative" style={{ marginLeft: '15%' }}> Hybrid Event</span></span>
                                            <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>International Congress of</small><br />Materials Science and Engineering</h1>
                                            <ul className="list-unstyled">
                                                <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
                                            </ul>
                                            <div className="generic-btn">
                                                <Link to="/registration_form">REGISTER NOW <i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="journey-section w-100 float-left padding-top padding-bottom grey-bg position-relative">
                    <div className="container-fluid p-md-5">
                        <div className="journey-inner-con">
                            <div className="journey-text-con">
                                <div className="">
                                    <span className="small-text">MSEDUBAI2025</span>
                                    <h2>About Conference</h2>
                                    <p>Dear Colleagues,</p>
                                    <p>
                                        It is our great pleasure to welcome you to the International Congress of Materials Science and Engineering (MSEDUBAI2025) that will be held on October 21-23, 2025 at Hotel Crowne Plaza Dubai-Deira in Dubai, UAE. MSEDUBAI2025 is intended as an International Forum for those who wish to present their latest research results, innovative ideas, and experiences in the fields of Materials Science and Engineering.
                                    </p>
                                    <p>
                                        Progress in materials science is always linked to the progress and welfare of human civilization. Future advances in multiple fields of science and engineering critically depend on the availability of superior materials. This congress, accordingly, attempts to provide a platform for researchers, scientists, engineers and students to share their findings and experience on the emerging and interesting trends of multifaceted materials science.
                                    </p>
                                    <p>
                                        We would be honored to have your presence and active participation at MSEDUBAI2025. Your expertise and insights would greatly contribute to the success of the conference, and we believe your research and experience will inspire fellow participants.
                                    </p>
                                    <p>
                                        <div>Sincerely,</div>
                                        <div>Organizing Committee</div>
                                    </p>

                                    {/* <div className="generic-btn">
                                    <a href="about.html">READ MORE <i className="fas fa-arrow-right"></i></a>
                                </div> */}
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
                                            <img src={process.env.PUBLIC_URL + '/' + "images/event-sm-slider.jpg"} className='img-fluid w-100' alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={process.env.PUBLIC_URL + '/' + "images/event-sm-slider.jpg"} className='img-fluid w-100' alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={process.env.PUBLIC_URL + '/' + "images/event-sm-slider.jpg"} className='img-fluid w-100' alt="" />
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
                                    <img src={process.env.PUBLIC_URL + '/' + "images/digital-conference-img2.jpg"} alt="digital-conference-img" />
                                </figure>
                            </div>
                            <div className="digital-counter-con">
                                <ul className="list-unstyled mb-0">
                                    <li className="position-relative">
                                        <div className="count d-inline-block">100</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Speakers</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="count d-inline-block">10</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Sponsors</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="count d-inline-block">21</div>
                                        <div className="plus-details">
                                            <div className="plus d-inline-block"><span>+</span></div>
                                            <span className="d-block client-status">Session</span>
                                        </div>
                                    </li>
                                    <li className="position-relative">
                                        <div className="counter-box position-relative">
                                            <div className="2k-con">
                                                <div className="count d-inline-block">200</div>
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
                                        <span className="d-inline-block">October 21-23, 2025 </span> </h3>
                                    <div className="generic-btn">
                                        <a href="contact.html">Add to Calendar <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-event-info-zone w-100 float-left ">

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
                <section className='index3-event-info-zone bg-white py-5'>
                    <div className='container'>
                        <div className="clearfix"></div>
                        <div className="generic-title2 text-center ">                           
                            <span className="small-text padding-top">The Speakers</span>
                            <h2>Meet Our Stellar Speakers</h2>
                            <p>
                                Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.
                            </p>
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
                                                            <ul className="text-white font-size-15px display-inline-block no-margin text-left">
                                                                {speaker.details.map((detail, index) => (
                                                                    <li key={index}>
                                                                        {detail}</li>
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
                                <div key={speaker.id} className="modal-overlay  text-left">
                                    <div className="modal-content text-left">
                                        {/* <h5 className="modal-title">{speaker.name}</h5> */}
                                        <h5 className='mb-4'>Talk Title: <span style={{ fontWeight: 400 }}>{speaker.talkTitle}</span></h5>
                                        <h5>Biography: </h5>
                                        <p>{speaker.Biography}</p>
                                        <p>{speaker.Biography}</p>

                                        {/* <p>{speaker.position}</p> */}
                                        {/* <ul>
                                            {speaker.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul> */}
                                        <div className="text-center mx-auto">
                                            <button
                                                className="custom-button mt-5"
                                                onClick={closeModal} >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}

                </section>
                <section className='pt-5'>
                    <div className='clearfix'></div>
                    <Services />
                </section>
                <section className="index3-event-section w-100 float-left padding-top padding-bottom">
                    <div className="container">
                        <div className="generic-title">
                            <span className="small-text">SCHEDULE OF EVENT</span>
                            <h2 className="mb-0">Conference Schedule</h2>
                        </div>
                        <div className="index3-event-tabs-con event-table">
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
                                    <div id="accordion" className="index3-faqs table-responsive">
                                        <table class="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
                                            <thead className='text-dark'>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Presentations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>08:00-08:30</td>
                                                    <td>Registration and Badge Pickup</td>
                                                </tr>
                                                <tr>
                                                    <td>08:30-08:45</td>
                                                    <td>Introduction</td>
                                                </tr>
                                                <tr>
                                                    <td>08:45-10:45</td>
                                                    <td>Plenary Presentations</td>
                                                </tr>
                                                <tr>
                                                    <td>10:45-11:00</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>11:00-13:00</td>
                                                    <td>Plenary Presentations</td>
                                                </tr>
                                                <tr>
                                                    <td>13:00-14:00</td>
                                                    <td>Networking Lunch</td>
                                                </tr>
                                                <tr>
                                                    <td>14:00-16:00</td>
                                                    <td>Keynote Presentation</td>
                                                </tr>
                                                <tr>
                                                    <td>16:00-16:20</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>16:20-18:00</td>
                                                    <td>Keynote Presentations</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div id="accordion" className="index3-faqs table-responsive">
                                        <table class="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
                                            <thead className='text-dark'>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Presentations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>08:00-08:30</td>
                                                    <td>Registration and Badge Pickup</td>
                                                </tr>
                                                <tr>
                                                    <td>08:30-08:45</td>
                                                    <td>Introduction</td>
                                                </tr>
                                                <tr>
                                                    <td>08:45-10:45</td>
                                                    <td>Invited Session-1</td>
                                                </tr>
                                                <tr>
                                                    <td>10:45-11:00</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>11:00-13:00</td>
                                                    <td>Invited Session-2</td>
                                                </tr>
                                                <tr>
                                                    <td>13:00-14:00</td>
                                                    <td>Networking Lunch</td>
                                                </tr>
                                                <tr>
                                                    <td>14:00-16:00</td>
                                                    <td>Invited Session-3</td>
                                                </tr>
                                                <tr>
                                                    <td>16:00-16:20</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>16:20-18:00</td>
                                                    <td>Invited Session-4</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div id="accordion" className="index3-faqs">
                                        <table class="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
                                            <thead className='text-dark'>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Presentations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>08:00-08:30</td>
                                                    <td>Registration and Badge Pickup</td>
                                                </tr>
                                                <tr>
                                                    <td>08:30-08:45</td>
                                                    <td>Introduction</td>
                                                </tr>
                                                <tr>
                                                    <td>08:45-10:45</td>
                                                    <td>Oral Session-1</td>
                                                </tr>
                                                <tr>
                                                    <td>10:45-11:00</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>11:00-13:00</td>
                                                    <td>Oral Session-2</td>
                                                </tr>
                                                <tr>
                                                    <td>13:00-14:00</td>
                                                    <td>Networking Lunch</td>
                                                </tr>
                                                <tr>
                                                    <td>14:00-16:00</td>
                                                    <td>Oral Session-3</td>
                                                </tr>
                                                <tr>
                                                    <td>16:00-16:20</td>
                                                    <td>Networking Break</td>
                                                </tr>
                                                <tr>
                                                    <td>16:20-18:00</td>
                                                    <td>Oral Session-4</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="index3-faq-btn-con text-center">
                                        <div className="generic-btn">
                                            <a href="contact.html">DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
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
                                <div className="price"><small>$</small>699</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <Link to="/online-registration">BUY TICKET <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="ticket-details gold-ticket-details">
                                <h3>Invited Talk</h3>
                                {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                                <div className="price"><small>$</small>649</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <Link to="/online-registration">BUY TICKET <i className="fas fa-arrow-right"></i></Link>
                                </div>
                                <div className="recomended-box">
                                    RECOMMENDED
                                </div>
                            </div>
                            <div className="ticket-details premium-ticket-details">
                                <h3>Poster Presentation</h3>
                                {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                                <div className="price"><small>$</small>399</div>
                                <ul className="list-unstyled">
                                    <li className="position-relative">Welcome Coffee</li>
                                    <li className="position-relative">Access to All Talks and Posters</li>
                                    <li className="position-relative">Conference Material</li>
                                    <li className="position-relative">Lunch, tea / coffee breaks</li>
                                    <li className="position-relative">WiFi in meeting rooms</li>
                                </ul>
                                <div className="generic-btn">
                                    <Link to="/online-registration">BUY TICKET <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="index3-plan-btn text-center">
                            <div className="generic-btn">
                                <Link to="/registration_form">REGISTER NOW <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-registration-section w-100 float-left">
                    <div className="container">
                        <div className="index3-registration-inner-con">
                            <div className="index3-registration-left-con">
                                <h2>Join the Biggest <br />
                                    Conference of The Year</h2>
                                <p>Hear Highlights From Our Sponsors, or Get a Lite or Core Subscription
                                    to Watch the Full Main Stage Event on Demand.</p>
                                <div className="generic-btn">
                                    <Link to="/registration_form">REGISTER NOW <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="index3-registration-right-con">
                                <figure className="mb-0">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-registration-right-img-2.png"} alt="index3-registration-right-img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index3-top-experts-section w-100 float-left padding-top padding-bottom">
                    <div className="container-fluid">
                        <div className="generic-title2 text-center">
                            <span className="small-text">GALLERY</span>
                            <h2>Previous Conference Highlights</h2>
                        </div>
                        <div className="index3-top-experts-inner-section">
                            <div className="index3-experts-left-con">
                                <div className="index3-expert index3-expert-con1 container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-1.jpg"} alt="index3-expert-img1" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-6.jpg"} alt="index3-expert-img6" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-7.jpg"} alt="index3-expert-img7" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="index3-experts-right-con">
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-2.jpg"} alt="index3-expert-img2" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-3.jpg"} alt="index3-expert-img3" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-4.jpg"} alt="index3-expert-img4" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert container__img-holder">
                                    <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-5.jpg"} alt="index3-expert-img5" />
                                    <div className="search-icon-con">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <div className="index3-expert-right-bottom-con">
                                    <div className="index3-expert container__img-holder">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-8.jpg"} alt="index3-expert-img8" />
                                        <div className="search-icon-con">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <div className="index3-expert container__img-holder">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-9.jpg"} alt="index3-expert-img9" />
                                        <div className="search-icon-con">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-popup">
                        <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img9.jpg"} alt="Popup Image" />
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
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-1.png"} alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-2.png"} alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-3.png"} alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-1.png"} alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-2.png"} alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img-3.png"} alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img1.png"} alt="index3-client-img1" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img2.png"} alt="index3-client-img2" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="index3-testimonial-box position-relative">
                                        <figure className="mb-0">
                                            <img src={process.env.PUBLIC_URL + '/' + "images/index3-client-img3.png"} alt="index3-client-img3" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amersvta consectetur adipiscing elitf sed do eiusmod tempor ia dncidfr idunt ut labour adire.</p>
                                        <h6>Peter Johns</h6>
                                        <small>CEO- Company</small>
                                        <div className="index3-quote-con">
                                            <figure className="mb-0">
                                                <img src={process.env.PUBLIC_URL + '/' + "images/index3-quote-icon.png"} alt="index3-quote-icon" />
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
                                        <img src={process.env.PUBLIC_URL + '/' + "images/blog-img1-1.jpg"} alt="blog-img1" />
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
                                        <img src={process.env.PUBLIC_URL + '/' + "images/blog-img-2.jpg"} alt="blog-img3" />
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
                                        <img src={process.env.PUBLIC_URL + '/' + "images/blog-img-3.jpg"} alt="blog-img3" />
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
                <SubscribeSection />
                <div className="index3-sponsers-main-section sponsers-main-section w-100 float-left">
                    <div className="container">
                        <div class="generic-title2 text-center">
                            {/* <span class="small-text">SKILLS &amp; EXPERIENCE</span> */}
                            <h2 class="mb-0">Our Partners & Sponsors</h2>
                        </div>
                        <div className="sponsers-companies">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <figure className="mb-0">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/sponsers-logo1.png"} alt="sponsers-logo1" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/sponsers-logo2.png"} alt="sponsers-logo2" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/sponsers-logo3.png"} alt="sponsers-logo3" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/sponsers-logo4.png"} alt="sponsers-logo4" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0">
                                        <img src={process.env.PUBLIC_URL + '/' + "images/sponsers-logo5.png"} alt="sponsers-logo5" />
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