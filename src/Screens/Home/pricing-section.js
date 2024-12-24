import React from "react";

const PricingSection = () => {
  return (
    <section className="w-100 float-left padding-top padding-bottom light-bg">
        <div className="container">
            <div className="generic-title2 text-center">
                <span className="small-text" data-aos="fade-up" data-aos-duration="700">TICKET PRICING</span>
                <h2 data-aos="fade-up" data-aos-duration="700">Our Conference Ticket Prices</h2>
            </div>
            <div className="index3-plan-inner-con">
                <div className="ticket-details silver-ticket-details" data-aos="fade-up" data-aos-duration="700">
                    <h3>Oral Talk</h3>
                    <p>For individuals</p>
                    <span>Starting at:</span>
                    <div className="price"><small>$</small>699</div>
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
                <div className="ticket-details gold-ticket-details" data-aos="fade-up" data-aos-duration="700">
                    <h3>Invited Talk</h3>
                    <p>For individuals</p>
                    <span>Starting at:</span>
                    <div className="price"><small>$</small>649</div>
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
                <div className="ticket-details premium-ticket-details" data-aos="fade-up" data-aos-duration="700">
                    <h3>Poster Presentation</h3>
                    <p>For individuals</p>
                    <span>Starting at:</span>
                    <div className="price"><small>$</small>399</div>
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
            {/* <div className="index3-plan-btn text-center">
                <p data-aos="fade-up" data-aos-duration="700">This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                <div className="generic-btn" data-aos="fade-up" data-aos-duration="700">
                    <a href="pricing.html">GET VIP PASS <i className="fas fa-arrow-right"></i></a>
                </div>
            </div> */}
        </div>
    </section>
);
};

export default PricingSection;
