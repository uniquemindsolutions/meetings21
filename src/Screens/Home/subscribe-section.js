import React from "react";

const SubscribeSection = () => {
  return (

    <div className="home-subscription">
        <section className="index3-speakers-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="generic-title2 text-left">
                <span className="fa-2x" data-aos="fade-up" data-aos-duration="700">Subscribe to get latest news.</span>
                {/* <h2 data-aos="fade-up" data-aos-duration="700"> </h2> */}
                <p className="text-white">Don't miss out on this incredible opportunity to learn, grow, and have a great time! Subscribe Now.</p>
                 </div>  
                </div>
                <div className="col-6">
                
        
            <div className="contact-form-section custom-form-sub float-left">

            
            <form className="form-box custom-form-grid" method="post" id="contactpage">
                <ul className="list-unstyled" data-aos="fade-up" data-aos-duration="700">
                    <li>
                        <input type="text" name="fname" id="fname" placeholder="Name" />
                    </li>
                    
                    <li>
                        <input type="email" placeholder="Email" name="email" id="email" />
                    </li>
                    
                </ul>
                <div className="submit-btn generic-btn">
                    <button className="w-100" type="submit" id="submit">SEND MESSAGE <i className="fas fa-arrow-right"></i></button>
                </div>
            </form>
            </div>
                </div>
    
                
            </div>
        
        </div>
    </section>
    </div>
    

    
    
  );
};

export default SubscribeSection;