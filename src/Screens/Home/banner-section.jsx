import React, { useEffect, useState } from "react";
import $ from "jquery";
// import "owl.carousel/dist/owl.carousel.min.js"; // Import Owl Carousel JS
// import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel CSS
// import "owl.carousel/dist/assets/owl.theme.default.css"; // Owl Carousel Theme CSS


import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel styles
import "owl.carousel"; // Owl Carousel functionality
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



window.$ = window.jQuery = $;
const BannerSection = () => {

    const apiUrl = process.env.REACT_APP_API_URL + 'api/';
    console.log("apiurl", apiUrl);

    const { id } = useParams();
    const [bannersData, setBannersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        gethomebanners();



        // $('#owl-carouseltwo').owlCarousel({
        //     loop: true,
        //     margin: 20, // Corrected the margin value for consistency
        //     nav: true,
        //     navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 2 // Updated to match intended layout
        //         },
        //         1000: {
        //             items: 3
        //         }
        //     }
        // });

        // $('#owl-carouselfive').owlCarousel({
        //     loop: true,
        //     margin: 30,
        //     nav: true,
        //     navText: ["<i className='fas fa-arrow-left'></i>", "<i className='fas fa-arrow-right'></i>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 3
        //         },
        //         1000: {
        //             items: 3
        //         }
        //     }
        // });


    }, []);


    const gethomebanners = async () => {
        try {
            const res = await axios.get(apiUrl + 'HomepageBanner/');
            console.log('API Response:', res.data);
            setBannersData(res.data);

            console.log('bannersData === :', bannersData[0]);
        } catch (error) {
            console.error("Error fetching banners:", error);
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

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



    return (
        <>
            <section className="banner-main-section w-100 float-left">
                <div className="container-fluid bnr-mob">
                    <div className="banner-outer-con">
                        {/* new banner start */}
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {Array.isArray(bannersData) &&
                                    bannersData.length > 0 ? (bannersData.map((item) => (
                                        <div className="carousel-item active">
                                            <div className="banner-inner-section">
                                                <div className="banner-left-section">
                                                    <h1 className="text-white">{item.home_page_banner_heading}</h1>
                                                    <span>{item.home_page_banner_subheading}</span>
                                                    <div className="generic-btn">
                                                        <Link to="upcoming-meetings">
                                                            Explore Meetings <i className="fas fa-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="banner-right-section">
                                                    <figure>
                                                        <img
                                                            src={item.home_page_banner_image}
                                                            alt="banner-right-img"
                                                            className="img-fluid"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    ))) : "no data"
                                }

                                {/* <div className="carousel-item active">
                                <img src="la.jpg" alt="Los Angeles" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="chicago.jpg" alt="Chicago" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="ny.jpg" alt="New York" className="d-block w-100" />
                            </div> */}
                            </div>


                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                    {/* new banner end */}

                    <div className="banner-outer-con">
                        <div id="owl-carouselone" className="owl-carousel owl-theme">

                            {/* {Array.isArray(bannersData) &&
                                bannersData.length > 0 ? (bannersData.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="banner-inner-section">
                                            <div className="banner-left-section">
                                                <h1 className="text-white">{item.home_page_banner_heading}</h1>
                                                <span>{item.home_page_banner_subheading}</span>
                                                <div className="generic-btn">
                                                    <Link to="upcoming-meetings">
                                                        Explore Meetings <i className="fas fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="banner-right-section">
                                                <figure>
                                                    <img
                                                        src={item.home_page_banner_image}
                                                        alt="banner-right-img"
                                                        className="img-fluid"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                ))) : "no data"
                            } */}


                            {/* {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : Array.isArray(bannersData) && bannersData.length > 0 ? (
                                bannersData.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="banner-inner-section">
                                            <div className="banner-left-section">
                                                <h1 className="text-white">{item.home_page_banner_heading}</h1>
                                                <span>{item.home_page_banner_subheading}</span>
                                                <div className="generic-btn">
                                                    <Link to="upcoming-meetings">
                                                        Explore Meetings <i className="fas fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="banner-right-section">
                                                <figure>
                                                    <img
                                                        src={item.home_page_banner_image}
                                                        alt="banner-right-img"
                                                        className="img-fluid"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No banners available.</p>
                            )} */}



                            {/* <div className="item">
                                <div className="banner-inner-section">
                                    <div className="banner-left-section">
                                        <h1 className="text-white">Welcome to<br />21st Century Meetings <span className="d-inline-block">2024</span></h1>
                                        <span>Welcome to the world where ideas converge, knowledge thrives, and connections flourish.</span>
                                        <div className="generic-btn">
                                            <Link to="upcoming-meetings">Explore Meetings <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="banner-right-section">
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + '/' + "images/home-banner-3.png"} alt="banner-right-img2" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="banner-inner-section">
                                    <div className="banner-left-section">
                                        <h1 className="text-white">Welcome to<br />21st Century Meetings <span className="d-inline-block">2024</span></h1>
                                        <span>Welcome to the world where ideas converge, knowledge thrives, and connections flourish.</span>
                                        <div className="generic-btn">
                                            <Link to="upcoming-meetings">Explore Meetings <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="banner-right-section">
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + '/' + "images/home-banner.png"} alt="banner-right-img" />
                                        </figure>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default BannerSection;