import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Venue = () => {
  return (

    <div className='call-abstract-p'>
      <div>
        <EventHeader />
        <section className="sub-banner-main-section w-100 justify-content-center">
          <div className="sub-banner-inner-con text-center">
            <h1>Venue</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-inline-block mb-0">
                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                <li className="breadcrumb-item active d-inline-block" aria-current="page">Venue</li>
              </ol>
            </nav>
          </div>
        </section>

        <section>
          <div className="container padding-top">
            <div className="row mb-4">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header bg-info text-white"><h5>Conference Venue</h5></div>
                  <div className="card-body bg-light">
                    <h6><b>Hotel Name:</b> Crowne Plaza Dubai - Deira</h6>
                    <h6><b>Address:</b> Salah Al Din St - Deira - Dubai, UAE</h6>
                    <h6><b>Phone:</b> +971 4 608 8999</h6>

                  </div>
                </div>
              </div>

              <div className="col-lg-12 mt-5">
                <p><b>Note 1:</b> Please mention the organizer "Meetings21" , if you wish to contact hotel reception.</p>

                <p>
                  <b>Note 2:</b>
                  The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference. Guest room confirmation numbers will be provided to the registrants 3 months prior the conference on successful completion of the registration and accommodation bookings.
                </p>

                <h5>About Hotel:</h5>
                <p>
                  The only IHG hotel in Deira, Crowne Plaza Dubai Deira is just 300m from Reef shopping mall. Dubai International Airport (DXB) and Dubai World Trade Centre (DWTC) are less than 8km away. Dubai metro stations are within a 7-minute walk.
                </p>

                <p>
                  Crowne Plaza Dubai-Deira offers an ideal set of facilities for tourists and business travelers. Unwind in our cosy 32 sq. m. rooms with spacious bathrooms, walk-in showers and large bathtubs. Book a Club Room or Suite for an elevated experience and enjoy the Club Lounge benefits like all-day snacks, refreshments and evening Happy Hours. All windows are double-glazed for a noise-free stay.
                </p>
                <p>
                  Dubai's hidden gem, their Spice Island restaurant, is famous for its exciting theme nights, unlimited seafood buffet with 6 interactive cooking stations, unique Mongolian grill and live music from a Cuban band.
                </p>
                <p>
                  For a night out, visit Magnum Deira Night Club, is your place. Enjoy daily happy hours and live entertainment from our DJ and Gogo dancer.
                </p>
                <p>
                  Hero's Health Club has a well-equipped gym, large rooftop swimming pool & whirlpool bath. Gym memberships and swimming classes are available.
                </p>
                <p>
                  Please use online abstract submission system through conference website according to the submission formats. It is authors' responsibility to review the abstracts and correct them. Submitters are responsible for following the submission formats and every typing error on the abstract.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='gallery-img container mb-5'>
          <div className="row">
            <div className="col-md-4">
              <figure className="mb-0">
               <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-4.jpg"} alt="img" className='img-fluid w-100' />
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="mb-0">
                <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-8.jpg"} alt="img" className='img-fluid w-100' />
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="mb-0">
                <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-5.jpg"} alt="img" className='img-fluid w-100' />
              </figure>
            </div>
          </div>
        </section>

        <section className='container mb-5'>
          <div className="card">
            <div className="card-header"><h5>Directions to the Venue</h5></div>
            <div className="card-body p-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3797551367156!2d78.3926563!3d17.4893763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dab342375%3A0x180a04af0c47f594!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1735719156491!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Venue