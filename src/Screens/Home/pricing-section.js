import React from "react";

const PricingSection = () => {
    return (

        <>
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
                            <div className="price"> <span><small>$</small>699</span>/ <span><small> ₹</small>60K</span></div>
                            <ul className="list-unstyled">
                                <li className="position-relative">Welcome Coffee</li>
                                <li className="position-relative">Access to All Talks and Posters</li>
                                <li className="position-relative">Conference Material</li>
                                <li className="position-relative">Lunch, tea / coffee breaks</li>
                                <li className="position-relative">WiFi in meeting rooms</li>
                            </ul>
                            {/* <div className="generic-btn">
                                <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                            </div> */}
                        </div>
                        <div className="ticket-details gold-ticket-details">
                            <h3>Invited Talk</h3>
                            {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                            <div className="price"> <span><small>$</small>699</span>/ <span><small> ₹</small>55K</span></div>
                            <ul className="list-unstyled">
                                <li className="position-relative">Welcome Coffee</li>
                                <li className="position-relative">Access to All Talks and Posters</li>
                                <li className="position-relative">Conference Material</li>
                                <li className="position-relative">Lunch, tea / coffee breaks</li>
                                <li className="position-relative">WiFi in meeting rooms</li>
                            </ul>
                            {/* <div className="generic-btn">
                                <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                            </div> */}
                            <div className="recomended-box">
                                RECOMMENDED
                            </div>
                        </div>
                        <div className="ticket-details premium-ticket-details">
                            <h3>Poster Presentation</h3>
                            {/* <p>For individuals</p>
                            <span>Starting at:</span> */}
                            <div className="price"> <span><small>$</small>699</span>/ <span><small>₹</small>35K</span></div>
                            <ul className="list-unstyled">
                                <li className="position-relative">Welcome Coffee</li>
                                <li className="position-relative">Access to All Talks and Posters</li>
                                <li className="position-relative">Conference Material</li>
                                <li className="position-relative">Lunch, tea / coffee breaks</li>
                                <li className="position-relative">WiFi in meeting rooms</li>
                            </ul>
                            {/* <div className="generic-btn">
                                <a href="shop.html">BUY TICKET <i className="fas fa-arrow-right"></i></a>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="index3-plan-btn text-center">
                        <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                        <div className="generic-btn">
                            <a href="pricing.html">GET VIP PASS <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default PricingSection;
