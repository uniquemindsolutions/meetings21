import React, { useEffect, useState  } from "react";
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

    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("apiurl",apiUrl);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bannersData, setBanners] = useState({})

    useEffect(() => {
        gethomebanners();
        $('#owl-carouselone').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
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
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
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
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
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

     


      const gethomebanners = async () => {
        try {
            // const baseurl=env.baseUrl;

            console.log('api testiing ====',apiUrl);
            const res = await axios.get(apiUrl + 'HomepageBanner/');
            console.log('api testiing ====', res);
            setBanners(res.data[0])
        }
        catch (error) {
            setError("Error fetching data")
        }
        finally {
            setLoading(false)
        }
    };
    
  return (
    <>
        <section className="banner-main-section w-100 float-left">
        <div className="container-fluid bnr-mob">
            <div className="banner-outer-con">
                <div id="owl-carouselone" className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="banner-inner-section">
                            <div className="banner-left-section">
                                <h1 className="text-white">Welcome to<br />21st Century Meetings <span className="d-inline-block">2024</span></h1>
                                <span>Welcome to the world where ideas converge, knowledge thrives, and connections flourish.</span>
                                <div className="generic-btn">
                                    <Link to="upcoming-meetings">Explore Meetings <i className="fas fa-arrow-right"></i></Link>
                                </div>
                                {/* <div className="banner-left-images d-flex">
                                    <figure className="mb-0">
                                        <img src="/images/home-banner3.jpg" alt="banner-left-img1" />
                                    </figure>
                                    <figure className="mb-0">
                                        <img src="/images/home-banner2.jpg" alt="banner-left-img2" />
                                    </figure>
                                </div> */}
                            </div>
                            <div className="banner-right-section">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + '/' + "images/home-banner.png"} alt="banner-right-img" className="img-fluid" />
                                </figure>
                                
                                {/* <div className="social-links d-flex">
                                    <a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/login "><i className="fab fa-linkedin-in"></i></a>
                                </div> */}
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
                                {/* <div className="banner-left-images d-flex">
                                    <figure className="mb-0">
                                        <img src="/images/home-banner3.jpg" alt="banner-left-img1" />
                                    </figure>
                                    <figure className="mb-0">
                                        <img src="/images/home-banner-4.jpg" alt="banner-left-img2" />
                                    </figure>
                                </div> */}
                            </div>
                            <div className="banner-right-section">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + '/' + "images/home-banner-3.png"} alt="banner-right-img2" />
                                </figure>
                                {/* <span>21 King Street, 1175 Australia</span> */}
                                {/* <div className="social-links d-flex">
                                    <a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                                </div> */}
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
                                {/* <div className="banner-left-images d-flex">
                                     <figure className="mb-0">
                                        <img src="/images/home-banner3.jpg" alt="banner-left-img1" />
                                    </figure>
                                    <figure className="mb-0">
                                        <img src="/images/home-banner2.jpg" alt="banner-left-img2" />
                                    </figure>
                                </div> */}
                            </div>
                            <div className="banner-right-section">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + '/' + "images/home-banner.png"} alt="banner-right-img" />
                                </figure>
                                {/* <span>21 King Street, 1175 Australia</span> */}
                                {/* <div className="social-links d-flex">
                                    <a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
   
  );
};

export default BannerSection;