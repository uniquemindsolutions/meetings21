import React, { useState, useEffect, useRef } from 'react';
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
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

window.$ = window.jQuery = $; // Expose jQuery globally

const Events = () => {

    const location = useLocation();

    const testimonialApi = process.env.REACT_APP_API_URL;
    const bannersApi = process.env.REACT_APP_API_URL;
    const aboutContentApi = process.env.REACT_APP_API_URL;
    const aboutBannersApi = process.env.REACT_APP_API_URL;
    const expertsGalleryApi = process.env.REACT_APP_API_URL;
    const recentNewsApi = process.env.REACT_APP_API_URL;
    const ourPartnersApi = process.env.REACT_APP_API_URL;
    const addToCalenderApi = process.env.REACT_APP_API_URL;
    const speakersApi = process.env.REACT_APP_API_URL;
    const downloadProgramApi = process.env.REACT_APP_API_URL;


    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [openModalId, setOpenModalId] = useState(null);
    const [testiData, setTestiData] = useState([])
    const [bannersData, setBannersData] = useState([])
    const [aboutContent, setAboutContent] = useState([])
    const [aboutBanner, setAboutBanner] = useState([])
    const [expertsGallery, setExpertsGallery] = useState([])
    const [recentNews, setRecentNews] = useState([])
    const [ourPartners, setOurPartners] = useState([])
    const [currentEventName, setCurrentEventName] = useState([])
    const [eventSpeakers, setEventSpeakers] = useState([])
    const [addToCalendar, setAddToCalendar] = useState([])
    const [downloadProgram, setDownloadProgram] = useState([])

    const { eventName } = useParams();

    const addToCalendarCurrent = useRef(addToCalendar)
    const downloadProgramCurrent = useRef(downloadProgram)

    useEffect(() => {
        if (window.location.origin + location.pathname == window.location.origin + '/2025/material-science') {
            window.location.href = window.location.origin + "/material-science"
        }
        const currentEvents = location.pathname.split('/')
        setCurrentEventName(currentEvents[1])

        fetchingApis();
        getSpeakers();

        // Initialize Bootstrap Tabs manually
        const tabElList = document.querySelectorAll('[data-bs-toggle="tab"]');
        tabElList.forEach(tab => {
            new window.bootstrap.Tab(tab);
        });
    }, [location])

    const fetchingApis = async () => {
        setLoading(true);
        const currentEvents = location.pathname.split('/')
        setCurrentEventName(currentEvents[1])
        try {
            const currentEvents = location.pathname.split('/');
            const [testimonialRes, bannersRes, aboutContentRes, aboutBannerRes, expertsGalleryRes, recentNewsRes, ourPartnersRes] = await Promise.all([
                axios.get(testimonialApi + currentEvents[1] + '/event/testimonials/'),
                axios.get(bannersApi + currentEvents[1] + '/event/banner/'),
                axios.get(aboutContentApi + currentEvents[1] + '/event/about'),
                axios.get(aboutBannersApi + currentEvents[1] + '/event/about/Images/'),
                axios.get(expertsGalleryApi + currentEvents[1] + '/event/experts/'),
                axios.get(recentNewsApi + currentEvents[1] + '/event/news/'),
                axios.get(ourPartnersApi + currentEvents[1] + '/event/partners/'),
            ])

            setTestiData(testimonialRes.data);
            setBannersData(bannersRes.data);
            setAboutContent(aboutContentRes.data)
            setAboutBanner(aboutBannerRes.data)
            setExpertsGallery(expertsGalleryRes.data)
            setRecentNews(recentNewsRes.data)
            setOurPartners(ourPartnersRes.data)
        } catch {
            setError('Error: no data found')
        } finally {
            setLoading(false)
        }
    }

    const getSpeakers = async () => {
        const currentEvents = location.pathname.split('/')
        try {
            const res = await axios.get(speakersApi + currentEvents[1] + '/agenda/speakers/')
            setEventSpeakers(res.data)
        } catch {
            setError('no speakers found')
        }
    }

    const getAddtoCalendar = async () => {
        setLoading(true);
        const currentEvents = location.pathname.split('/');
        try {
            const res = await axios.get(addToCalenderApi + currentEvents[1] + '/Uploads/add_to_calenders/');
            setAddToCalendar(res.data[0].add_to_calender)
            addToCalendarCurrent.current = res.data[0].add_to_calender;
        } catch {
            setError('File not downloaded')
        }
        handleDownload();
    }

    const handleDownload = async () => {
        try {
            const response = await fetch("https://meetings21.com/Meetings21Backend/download?file_path=" + addToCalendarCurrent.current);
            if (!response.ok) {
                throw new Error("Failed to fetch file");
            }

            const blob = await response.blob(); // Convert to blob
            const url = window.URL.createObjectURL(blob);

            // Create an anchor element for download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "calendar.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up memory
            window.URL.revokeObjectURL(url);
        } catch (error) {
        }
    };


    const getDownloadProgram = async () => {
        const currentEvents = location.pathname.split('/')
        try {
            const res = await axios.get(downloadProgramApi + currentEvents[1] + '/Uploads/programfile/');
            setDownloadProgram(res.data[0].Program_file);
            downloadProgramCurrent.current = res.data[0].Program_file;
        } catch {
            setError('no data found')
        }
        handleDownloadProgram();
    }
    const handleDownloadProgram = async () => {
        try {
            const response = await fetch("https://meetings21.com/Meetings21Backend/programfile_download?file_path=" + downloadProgramCurrent.current);
            if (!response.ok) {
                throw new Error("Failed to fetch file");
            }

            const blob = await response.blob(); // Convert to blob
            const url = window.URL.createObjectURL(blob);

            // Create an anchor element for download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "Program_file.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up memory
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };


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
            // navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
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
    }, []);

    return (
        <div className='event-p'>
            <EventHeader />
            <section className='events-p'>
                <section className="index3-banner-section w-100 float-left">
                    <div className="container-fluid">
                        <div className="index3-banner-outer-con">

                            {/* bootstrap slider start */}
                            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                                {/* <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div> */}


                                <div className="carousel-inner">
                                    {Array.isArray(bannersData) &&
                                        bannersData.length > 0 ? bannersData.map((banner) => {
                                            return <div className="carousel-item active" data-interval="false">
                                                <div className="index3-banner-inner-con">
                                                    <div className="index3-banner-img-con">
                                                        <figure className="mb-0">
                                                            <img src={banner.meettings_photo} className='img-fluid' alt="index3-banner-img1" />
                                                        </figure>
                                                    </div>
                                                    <div className="index3-banner-text-con">
                                                        <span className="d-block position-relative">{banner.meettings_date} <span className="position-relative" style={{ marginLeft: '15%' }}> Hybrid Event</span></span>
                                                        <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>{banner.meetings_subject}</small><br />{banner.meeting_prefix}</h1>
                                                        <ul className="list-unstyled">
                                                            <li><i className="fas fa-map-marker-alt"></i> {banner.meetingslocation}</li>
                                                        </ul>
                                                        <div className="generic-btn">
                                                            <Link to={`/${currentEventName}/registration_form`}>REGISTER NOW<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }) : "No banner found"
                                    }

                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            {/* bootstrap slider end */}

                            <div id="owl-carouseltwo" className="owl-carousel owl-theme">
                                {/* {Array.isArray(bannersData) &&
                                    bannersData.length > 0 ? bannersData.map((banner) => {
                                        return <div className="item">
                                            <div className="index3-banner-inner-con">
                                                <div className="index3-banner-img-con">
                                                    <figure className="mb-0">
                                                        <img src={banner.meettings_photo} className='img-fluid' alt="index3-banner-img1" />
                                                    </figure>
                                                </div>
                                                <div className="index3-banner-text-con">
                                                    <span className="d-block position-relative">{banner.meettings_date} <span className="position-relative" style={{ marginLeft: '15%' }}> Hybrid Event</span></span>
                                                    <h1><small className='font-size-15px font-weight-bold text-uppercase text-white'>{banner.meetings_subject}</small><br />{banner.meeting_prefix}</h1>
                                                    <ul className="list-unstyled">
                                                        <li><i className="fas fa-map-marker-alt"></i> {banner.meetingslocation}</li>
                                                    </ul>
                                                    <div className="generic-btn">
                                                        <Link to="/registration_form">REGISTER NOW<i className="fas fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }) : "No banner found"
                                } */}

                                {/* <div className="item">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="journey-section w-100 float-left padding-top padding-bottom grey-bg position-relative">
                    <div className="container-fluid p-md-5">
                        <div className="journey-inner-con">
                            <div className="journey-text-con">
                                {
                                    aboutContent.map((cnt) => (
                                        <div>
                                            <span className="small-text">{cnt.event_short_name}</span>
                                            <h2>{cnt.event_heading}</h2>
                                            {/* <p>{cnt.event_description}</p> */}
                                            <p dangerouslySetInnerHTML={{ __html: cnt.event_description }}></p>
                                        </div>

                                    ))
                                }


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
                                        {
                                            aboutBanner.map((img) => (
                                                <SwiperSlide>
                                                    <img src={img.event_image} className='img-fluid w-100' alt="" />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>


                                    {/* <Swiper
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
                                    </Swiper> */}

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
                                        <a onClick={getAddtoCalendar} className='user-select-none'>Add to Calendar <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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

                        {/* speakers start */}
                        {
                            Array.isArray(eventSpeakers) && eventSpeakers.length > 0 ? (
                                <>
                                    <h4 className='mb-3 text-blue'>PlenarySpeakers</h4>
                                    <div className="row">
                                        {
                                            eventSpeakers.filter((spk) => spk.speakers_type === 'PlenarySpeakers')
                                                .slice(0, 8).map((item, index) => (
                                                    <div key={index} className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                                                        <figure className="speakers-box">
                                                            <div className="team-image xs-width-100">
                                                                <img
                                                                    src={item.speakerphoto}
                                                                    alt={item.speakername}
                                                                    data-no-retina=""
                                                                />
                                                                <div className="overlay-content text-center">
                                                                    <div className="display-table height-100 width-100">
                                                                        <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                                                            <div className="min-height-176px">
                                                                                <div className="text-white font-size-15px display-inline-block no-margin text-left">
                                                                                    <div
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: item.speaker_biography,
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <a
                                                                                href="#"
                                                                                className="text-white font-size-24px"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    openModal(item.id);
                                                                                }}
                                                                            >
                                                                                <button className="btn-biography">View Biography</button>
                                                                            </a>
                                                                            <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                                                            </div>
                                                            <figcaption>
                                                                <div className="team-member-position text-center">
                                                                    <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                                                                        {item.speakername}
                                                                    </div>
                                                                    <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                                                                        {item.speaker_affiliation}
                                                                    </div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </>
                            ) : <p>No data found</p>
                        }
                        {/* speakers end */}

                    </div>


                    {/* Modal */}
                    {Array.isArray(eventSpeakers) &&
                        eventSpeakers?.length > 0 ? eventSpeakers.map(
                            (speaker) =>
                                openModalId === speaker.id && (
                                    <div key={speaker.id} className="modal-overlay">
                                        <div className="modal-content text-left" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                                            <div className="bg-light shadow-sm p-3 d-flex justify-content-between">
                                                <h5 className=''><span className='text-primary'>Talk Title:</span> <span style={{ fontWeight: 400 }}>{speaker.speaker_talk_tittle}</span></h5>
                                                <button
                                                    className="border-0 text-danger background-none"
                                                    onClick={closeModal} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="p-3">
                                                <h5 className='text-primary'>Biography: </h5>
                                                <div dangerouslySetInnerHTML={{ __html: speaker.speaker_biography }} />
                                            </div>
                                        </div>
                                    </div>
                                )
                        ) : "no data"
                    }

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
                                    <button className="nav-link active"
                                        id="home-tab"
                                        data-toggle="tab"
                                        data-bs-target="#home"
                                        type="button"
                                        data-bs-toggle="tab"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true">DAY 1</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link"
                                        id="profile-tab"
                                        data-toggle="tab"
                                        data-bs-target="#profile"
                                        type="button"
                                        data-bs-toggle="tab"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false">DAY 2</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link"
                                        id="contact-tab"
                                        data-toggle="tab"
                                        data-bs-target="#contact"
                                        type="button"
                                        data-bs-toggle="tab"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false">DAY 3</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div id="accordion" className="index3-faqs table-responsive">
                                        <table className="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
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
                                            <a onClick={getDownloadProgram} style={{ cursor: 'pointer' }}>DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div id="accordion" className="index3-faqs table-responsive">
                                        <table className="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
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
                                            <a onClick={getDownloadProgram} style={{ cursor: 'pointer' }}>DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div id="accordion" className="index3-faqs">
                                        <table className="schedule-table table table-striped table-hover" border="1" cellpadding="10" cellspacing="0">
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
                                            <a onClick={getDownloadProgram} style={{ cursor: 'pointer' }}>DOWNLOAD PROGRAM <i className="fas fa-arrow-right"></i></a>
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
                                <Link to={`/${currentEventName}/registration_form`}>REGISTER NOW <i className="fas fa-arrow-right"></i></Link>
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

                        <div className="row mb-4">
                            {expertsGallery.map((img) => (
                                <div className="col-md-6 col-lg-4">
                                    <div className="index3-experts-left-con">
                                        <div className="index3-expert index3-expert-con1 container__img-holder">
                                            <img src={img.gallery} className='img-fluid' alt="index3-expert-img1" />
                                            {/* <div className="search-icon-con">
                                                <i className="fas fa-search"></i>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* <div className="index3-top-experts-inner-section">
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
                        </div> */}
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
                            {/* <h1>{testiData[0].testimonials_name}</h1> */}

                        </div>
                        <div className="index3-testimonial-inner-con testimonialSlides">
                            <div id="owl-carouselone" className="owl-carousel owl-theme">
                                {Array.isArray(testiData) &&
                                    testiData.length > 0 ? (testiData.map((item) => (
                                        <div className="item">
                                            <div className="index3-testimonial-box position-relative">
                                                <figure className="mb-0">
                                                    <img src={item.testimonials_image} style={{ width: '50px', height: "50px" }} className="img-fluid" alt="index3-client-img1" />
                                                </figure>
                                                <p dangerouslySetInnerHTML={{ __html: item.testimonials_description }}></p>
                                                <h6>{item.testimonials_name}</h6>
                                                <small>{item.testimonials_position}</small>
                                                <div className="index3-quote-con">
                                                    <figure className="mb-0">
                                                        <img src={`${process.env.PUBLIC_URL}/images/index3-quote-icon.png`} alt="index3-quote-icon" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    ))) : "no data"
                                }



                                {/* <div className="item">
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
                                </div> */}
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
                            {
                                recentNews.map((news) => (
                                    <div className="blog-box position-relative">
                                        <div className="blog-img position-relative">
                                            <span className="d-inline-block">{news.news_about}</span>
                                            <figure className="mb-0">
                                                <img src={news.news_image} className='img-fluid' alt="blog-img1" />
                                            </figure>
                                        </div>
                                        <div className="blog-text">
                                            <span className="d-block">{news.news_date}</span>
                                            <h6 className="position-relative"><a href="single-blog.html">{news.news_description}</a></h6>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className="blog-box position-relative">
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
                            </div> */}
                        </div>
                    </div>
                </section>
                <SubscribeSection />
                <div className="index3-sponsers-main-section sponsers-main-section w-100 float-left">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            {/* <span className="small-text">SKILLS &amp; EXPERIENCE</span> */}
                            <h2 className="mb-0">Our Partners & Sponsors</h2>
                        </div>
                        <div className="sponsers-companies">
                            <ul className="list-unstyled mb-0">
                                {
                                    ourPartners.map((p) => (
                                        <li>
                                            <figure className="mb-0">
                                                <img src={p.partners_logo} className='img-fluid' alt="sponsers-logo1" />
                                            </figure>
                                        </li>
                                    ))
                                }
                                {/* <li>
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
                                </li> */}
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


