import React from "react";

const PricingSection = () => {
  return (
    
    <>
    <section class="index3-pricing-plans-section w-100 float-left padding-top padding-bottom">
        <div class="container">
            <div class="generic-title2 text-center">
                <span class="small-text">TICKET PRICING</span>
                <h2>Our Conference Ticket Prices</h2>
            </div>
            <div class="index3-plan-inner-con">
                <div class="ticket-details silver-ticket-details">
                    <h3>Oral Talk</h3>
                    {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                    <div class="price"><small>$ / ₹</small>699</div>
                    <ul class="list-unstyled">
                        <li class="position-relative">Welcome Coffee</li>
                        <li class="position-relative">Access to All Talks and Posters</li>
                        <li class="position-relative">Conference Material</li>
                        <li class="position-relative">Lunch, tea / coffee breaks</li>
                        <li class="position-relative">WiFi in meeting rooms</li>
                    </ul>
                    <div class="generic-btn">
                        <a href="shop.html">BUY TICKET <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="ticket-details gold-ticket-details">
                    <h3>Invited Talk</h3>
                    {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                    <div class="price"><small>$ / ₹</small>649</div>
                    <ul class="list-unstyled">
                    <li class="position-relative">Welcome Coffee</li>
                        <li class="position-relative">Access to All Talks and Posters</li>
                        <li class="position-relative">Conference Material</li>
                        <li class="position-relative">Lunch, tea / coffee breaks</li>
                        <li class="position-relative">WiFi in meeting rooms</li>
                    </ul>
                    <div class="generic-btn">
                        <a href="shop.html">BUY TICKET <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="recomended-box">
                        RECOMMENDED
                    </div>
                </div>
                <div class="ticket-details premium-ticket-details">
                    <h3>Poster Presentation</h3>
                    {/* <p>For individuals</p>
                    <span>Starting at:</span> */}
                    <div class="price"><small>$ / ₹</small>399</div>
                    <ul class="list-unstyled">
                    <li class="position-relative">Welcome Coffee</li>
                        <li class="position-relative">Access to All Talks and Posters</li>
                        <li class="position-relative">Conference Material</li>
                        <li class="position-relative">Lunch, tea / coffee breaks</li>
                        <li class="position-relative">WiFi in meeting rooms</li>
                    </ul>
                    <div class="generic-btn">
                        <a href="shop.html">BUY TICKET <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="index3-plan-btn text-center">
                <p>This is a Detailed List Event of Conference for Digital Technology 2024.</p>
                <div class="generic-btn">
                    <a href="pricing.html">GET VIP PASS <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     </section>
    </>
);
};

export default PricingSection;
