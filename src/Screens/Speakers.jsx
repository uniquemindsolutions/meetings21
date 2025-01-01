import React, { useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Speakers = () => {

  const [openModalId, setOpenModalId] = useState(null);
  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
  const speakers = [
    {
      id: 1,
      name: "Federico Rosei",
      image: "/images/speakers/pspeaker1.png",
      details: [
        "2010 PEO Engineering Medal for Entrepreneurship",
        "2013 EIC Sir John Kennedy Medal",
        "2016 IEEE A.G.L. McNaughton Gold Medal",
      ],
      position: "INRS, Canada",
    },
    {
      id: 2,
      name: "Ben Zhong TANG",
      image: "/images/speakers/pspeaker2.jpg",
      details: [
        "2010 PEO Engineering Medal for Entrepreneurship",
        "2013 EIC Sir John Kennedy Medal",
        "2016 IEEE A.G.L. McNaughton Gold Medal",
      ],
      position: "Ben Zhong TANG",
    },
    {
      id: 3,
      name: "Jose M. Kenny",
      image: "/images/speakers/pspeaker3.jpg",
      details: [
        "2010 PEO Engineering Medal for Entrepreneurship",
        "2013 EIC Sir John Kennedy Medal",
        "2016 IEEE A.G.L. McNaughton Gold Medal",
      ],
      position: "University of Perugia, Italy",
    },
    {
      id: 4,
      name: "Jan DUSZA",
      image: "/images/speakers/pspeaker4.jpg",
      details: [
        "2010 PEO Engineering Medal for Entrepreneurship",
        "2013 EIC Sir John Kennedy Medal",
        "2016 IEEE A.G.L. McNaughton Gold Medal",
      ],
      position: "Institute of Materials Research of SAS, Slovakia",
    },
  ];


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

        <section className='index3-event-info-zone padding-top padding-bottom'>
          <div className='container'>
            <div className="generic-title2 text-center">
          <span className="small-text">The Speakers</span>
              <h3>Plenary Speakers</h3>
              <h4>Keynote speakers</h4>
              <h5>Invited Speakers</h5>

             
              <h2>Meet Our Stellar Speakers</h2>
              <p>
                Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.
              </p>
            </div>
            <div className='row'>

              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight"
                >
                  <figure className="speakers-box">
                    <div className="team-image xs-width-100">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        data-no-retina=""
                      />
                      <div className="overlay-content text-center">
                        <div className="display-table height-100 width-100">
                          <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                            <div className="min-height-176px">
                              <ul className="text-white font-size-15px display-inline-block no-margin ">
                                {speaker.details.map((detail, index) => (
                                  <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg> {detail}</li>
                                )
                                )}
                              </ul>
                            </div>
                            <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                            <a
                              href="#"
                              className="text-white font-size-24px mr-3"
                              onClick={(e) => {
                                e.preventDefault();
                                openModal(speaker.id);
                              }}
                            >
                              {/* <i className="fa-regular fa-eye"></i> */}
                              <button className='btn-biography'> View Biography </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                    </div>
                    <figcaption>
                      <div className="team-member-position text-center">
                        <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                          {speaker.name}
                        </div>
                        <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                          {speaker.position}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          {/* Modal */}
          {speakers.map(
            (speaker) =>
              openModalId === speaker.id && (
                <div key={speaker.id} className="modal-overlay">
                  <div className="modal-content">
                    <h5 className="modal-title">{speaker.name}</h5>
                    <p>{speaker.position}</p>
                    <ul>
                      {speaker.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <button
                      className="custom-button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )
          )}

        </section>

        {/* <section>
          <div className="container padding-top">
            <div className="events-box">
              <div className="row">
                <div className="col-lg-3">
                  <img src="/images/speakers/pspeaker1.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className='generic-title'>
                    <h3>Federico Rosei</h3>
                    <small className='small-text'> INRS, Canada</small>
                    <p>Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.</p>
                    <div className="generic-btn">
                      <a className="" href="https://industrial-engineering.synergiasummits.com/abstract">show more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="events-box">
              <div className="row">
                <div className="col-lg-3">
                  <img src="/images/speakers/pspeaker2.jpg" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className='generic-title'>
                    <h3>Federico Rosei</h3>
                    <small className='small-text'> INRS, Canada</small>
                    <p>Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.</p>
                    <div className="generic-btn">
                      <a className="" href="https://industrial-engineering.synergiasummits.com/abstract">show more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}














      </div>

      <Footer />
    </div>
  )
}

export default Speakers