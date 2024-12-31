import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Speakers = () => {
  return (
    
    <div className='call-abstract-p'>
    <div>
    <EventHeader />
    <section className="sub-banner-main-section w-100 justify-content-center">
    <div className="sub-banner-inner-con text-center">
                <h1>Speakers</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-inline-block mb-0">
                        <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">Speakers</li>
                    </ol>
                </nav>
    </div>
    </section>

    <section>
    <div class="container padding-top">
    <div class="events-box">
    <div className="row">
    <div class="col-lg-3">
      <img src="/images/speakers/pspeaker1.png" alt="" />
    </div>
    <div class="col-lg-8">
        <div className='generic-title'>
          <h3>Federico Rosei</h3>
          <small className='small-text'> INRS, Canada</small>
          <p>Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.</p>
          <div className="generic-btn">
                <a class="" href="https://industrial-engineering.synergiasummits.com/abstract">show more</a>
          </div>
        </div>
    </div>
    </div>
    </div>
    <div class="events-box">
    <div className="row">
    <div class="col-lg-3">
      <img src="/images/speakers/pspeaker2.jpg" alt="" />
    </div>
    <div class="col-lg-8">
        <div className='generic-title'>
          <h3>Federico Rosei</h3>
          <small className='small-text'> INRS, Canada</small>
          <p>Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.</p>
          <div className="generic-btn">
                <a class="" href="https://industrial-engineering.synergiasummits.com/abstract">show more</a>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section>
    </section>
    


   






    
    
    
    </div>
    
    <Footer />
    </div>
  )
}

export default Speakers