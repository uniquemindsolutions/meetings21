import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    
    <div>
    <div>
    <Header />
    <section className="sub-banner-main-section w-100 justify-content-center">
    <div className="sub-banner-inner-con text-center">
                <h1>ABOUT US</h1>
                <p>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-inline-block mb-0">
                        <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">ABOUT</li>
                    </ol>
                </nav>
            </div>
    </section>
    </div>
    <section className="about-main-section w-100 float-left padding-top padding-bottom about-p">
        <div className="container">
            <div className="about-inner-con">
                <div className="about-left-con">
                    <div className="generic-title">
                        <span className="small-text">Meetings21</span>
                        <h2>About Meetings21</h2>
                    </div>
                    <p>We understand the importance of academic conferences in 21st century to foster collaboration, sharing knowledge, and advancing innovation. As part of our commitment to providing a platform for meaningful dialogue and the exchange of cutting-edge research, we curate conferences with a deep appreciation for the scholarly community.</p>
                    <p>Each conference we organize is designed to surpass expectations by our team of experienced professionals. We handle every detail with precision, from meticulously planning the program to coordinating logistics, so you can focus on what really matters – the content and connections that make academic conferences so meaningful.</p>
                    <p>It is our passion for academic excellence and understanding of the changing landscape of research and education that sets us apart. In order to create a rich tapestry of ideas, we curate conferences that bring together experts from diverse fields.</p>
                    <p>Meetings21 remains at the forefront of conference organization innovation in an era of rapid technological advancement. Using the latest technology, we provide virtual attendance options, interactive sessions, and seamless networking opportunities to enhance the conference experience.</p>
                    <p>Welcome to the world where ideas converge, knowledge thrives, and connections flourish at Meetings21.</p>
                </div>
                <div className="about-right-con">
                    {/* <div className="co-box">
                        <div className="investment d-flex">
                            <span>100</span>
                            <small>Speakers <br /> Funds</small>
                        </div>
                        <div className="co-image-box">
                            <figure className="mb-0">
                                <img src="/images/co-image.jpg" alt="co-image" />
                            </figure>
                        </div>
                    </div> */}
                    <div className="ceo-box">
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
    <Footer />
    </div>
  )
}

export default AboutUs