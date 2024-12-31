import React from 'react'
import Header from '../Header/Header'
import SubscribeSection from './Home/subscribe-section'
import Footer from '../Footer/footer'
const Meetings = () => {
  return (
    <>
      <Header />

      <section className="sub-banner-main-section event-banner-section w-100 float-left">
        <div className="container">
            <div className="sub-banner-inner-con">
                <h1>Meetings21</h1>
                <p>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-inline-block mb-0">
                        <li className="breadcrumb-item d-inline-block"><a href="index.html">HOME</a></li>
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">EVENTS</li>
                    </ol>
                </nav>
            </div>
        </div>
      </section>
      
      <div className='container padding-bottom padding-top'>
        <div className='row'>
            <div className='col-lg-12 text-center mt-5'>
                <h3>Upcoming Meetings</h3>
            </div>
        </div>


      <div className="row">
        <div className='col-lg-5 offset-lg-1'>
            <a href="/events" target="_blank" className="url-box">
              <div className='events-box'>
                  <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <div className='layout-img-wrap'>
                            <img src="https://meetings21.com/wp-content/uploads/sites/113/2024/06/Dubai.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-7 mt-3'>
                        <div className=''>
                        <div class="newsCaption px-5"><div class="d-flex align-items-center justify-content-between cnt-title"><h5 class="newsCaption-title m-0">International Congress of Materials Science and Engineering</h5> <i class="fas fa-arrow-alt-circle-right "></i></div><div class="newsCaption-content d-flex "><p class="col-10 py-3 px-0"><i class="fa fa-calendar"></i> October 21-23, 2025 <i class="fa fa-map-marker"></i> Dubai, UAE </p></div></div>
                        </div>
                    </div>
                  </div>
              </div>
            </a>   
        </div>
        <div className='col-lg-5 offset-lg-1'>
            <a href="/events" target="_blank" className="url-box">
              <div className='events-box'>
                  <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <div className='layout-img-wrap'>
                            <img src="https://meetings21.com/wp-content/uploads/sites/113/2024/06/Dubai.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-7 mt-3'>
                        <div className=''>
                        <div class="newsCaption px-5"><div class="d-flex align-items-center justify-content-between cnt-title"><h5 class="newsCaption-title m-0">International Congress of Materials Science and Engineering</h5> <i class="fas fa-arrow-alt-circle-right "></i></div><div class="newsCaption-content d-flex "><p class="col-10 py-3 px-0"><i class="fa fa-calendar"></i> October 21-23, 2025 <i class="fa fa-map-marker"></i> Dubai, UAE </p></div></div>
                        </div>
                    </div>
                  </div>
              </div>
            </a>   
        </div>
      </div>




        {/* <div className='row'>
        <div className="col-lg-6">
            <a href="/events" target="_blank" className="url-box">
              <figure className="newsCard news-Slide-up ">
                <img src="https://meetings21.com/wp-content/uploads/sites/113/2024/06/Dubai.jpg" />
                <div className="newsCaption px-4">
                <div className="d-flex align-items-center justify-content-between cnt-title">
                <h5 className="newsCaption-title text-white m-0">International Congress of Materials Science and Engineering</h5> <i className="fas fa-arrow-alt-circle-right "></i>
                </div>
                <div className="newsCaption-content d-flex ">
                <p className="col-10 py-3 px-0"><i className="fa fa-calendar"></i> October 21-23, 2025 <i className="fa fa-map-marker"></i> Dubai, UAE </p>
                </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </a>
            </div>


            <div className="col-lg-6">
            <a href="https://meetings21.com/2025/material-science" target="_blank" className="url-box">
              <figure className="newsCard news-Slide-up ">
                <img src="https://meetings21.com/wp-content/uploads/sites/113/2024/06/Dubai.jpg" />
                <div className="newsCaption px-4">
                <div className="d-flex align-items-center justify-content-between cnt-title">
                <h5 className="newsCaption-title text-white m-0">International Congress of Materials Science and Engineering</h5> <i className="fas fa-arrow-alt-circle-right "></i>
                </div>
                <div className="newsCaption-content d-flex ">
                <p className="col-10 py-3 px-0"><i className="fa fa-calendar"></i> October 21-23, 2025 <i className="fa fa-map-marker"></i> Dubai, UAE </p>
                </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </a>
            </div>
        </div> */}
      </div>
      
        
      

      <div className='d-flex meetings-section'>
      <section className='index3-speakers-section w-100 float-left padding-top padding-bottom'>
        <div className='container mb-5'>
          <div className="row">
              <div className="col-6">
                <div className="generic-title2 text-left">
                <span className="fa-2x">Subscribe to get latest news.</span>
                <p className="text-white">Don't miss out on this incredible opportunity to learn, grow, and have a great time! Subscribe Now.</p>
                 </div>  
                </div>
                <div className="col-6">
                  <div className="contact-form-section custom-form-sub float-left">
                    <form className="form-box custom-form-grid" method="post" id="contactpage">
                        <ul className="list-unstyled">
                            <li>
                                <input type="text" name="fname" id="fname" placeholder="Enter your Name" />
                            </li>
                            
                            <li>
                                <input type="email" placeholder="Enter your Email" name="email" id="email" />
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
      <div className='d-flex'>
      <section className="w-100 float-left padding-top padding-bottom light-bg">
        <div className="container">
            <div className="generic-title2 text-center">
                <span className="small-text">TICKET PRICING</span>
                <h2>Our Conference Ticket Prices</h2>
            </div>
            <div className="index3-plan-inner-con">
                <div className="ticket-details silver-ticket-details">
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
                <div className="ticket-details gold-ticket-details">
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
                <div className="ticket-details premium-ticket-details">
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
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}

export default Meetings