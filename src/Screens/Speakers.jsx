import React, { Children, useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Speakers = () => {

  const committeeUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentEventName, setCurrentEventName] = useState('');
  const [currentEventId, setCurrentEventId] = useState('');
  const [speakerData, setSpeakerData] = useState('');
  const [openModalId, setOpenModalId] = useState(null);

  useEffect(() => {
    getSpekers();
  }, [])

  const getSpekers = async () => {
    const currentEvents = location.pathname.split('/');
    setCurrentEventName(currentEvents[1])
    try {
      const res = await axios.get(`${committeeUrl}${currentEvents[1]}/agenda/speakers/`);
      setSpeakerData(res.data);
    } catch {
      setError('Error loaded')
    }
  }

  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

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
              <h2>Meet Our Stellar Speakers</h2>
              <p>
                Our Plenary and Keynote Speakers possess specialized knowledge and insights into specific fields. They can provide valuable information and trends, making them of great benefit to our attendees.
              </p>
            </div>

            {
              Array.isArray(speakerData) && speakerData?.length > 0 ? (
                <>
                  {
                    speakerData.some((item) => item.speakers_type === 'PlenarySpeakers') && (
                      <h4 className='mb-3 text-blue'>Plenary Speakers</h4>
                    )
                  }

                  <div className="row">
                    {speakerData
                      .filter((item) => item.speakers_type === "PlenarySpeakers")
                      .map((item, index) => (
                        <div key={index} className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                          <figure className="speakers-box">
                            <div className="team-image xs-width-100">
                              <img
                                src={item.speakerphoto}
                                alt={item.speakername}
                                data-no-retina=""
                              />
                              <div className="overlay-content text-center">
                                <div className="display-table height-100 width-100">
                                  <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <div className="min-height-176px">
                                      <div className="text-white font-size-15px display-inline-block no-margin text-left">
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: item.speaker_awards,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <a
                                      href="#"
                                      className="text-white font-size-24px"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        openModal(item.id);
                                      }}
                                    >
                                      <button className="btn-biography">View Biography</button>
                                    </a>
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                            </div>
                            <figcaption>
                              <div className="team-member-position text-center">
                                <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                                  {item.speakername}
                                </div>
                                <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                                  {item.speaker_affiliation}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                <p>{/* No Plenary Speakers Data */}</p>
              )
            }


            {
              Array.isArray(speakerData) && speakerData.length > 0 ? (
                <>
                  {
                    speakerData.some((item) => item.speakers_type === 'KeynoteSpeakers') && (
                      <h4 className='mb-3 text-blue'>Keynote Speakers</h4>
                    )
                  }

                  <div className="row">
                    {speakerData.filter((item) => item.speakers_type === 'KeynoteSpeakers')
                      .map((item, index) => (
                        <div key={index} className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                          <figure className="speakers-box">
                            <div className="team-image xs-width-100">
                              <img
                                src={item.speakerphoto}
                                alt={item.speakername}
                                data-no-retina=""
                              />
                              <div className="overlay-content text-center">
                                <div className="display-table height-100 width-100">
                                  <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <div className="min-height-176px">
                                      <div className="text-white font-size-15px display-inline-block no-margin text-left">
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: item.speaker_awards,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <a
                                      href="#"
                                      className="text-white font-size-24px"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        openModal(item.id);
                                      }}
                                    >
                                      <button className="btn-biography">View Biography</button>
                                    </a>
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                            </div>
                            <figcaption>
                              <div className="team-member-position text-center">
                                <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                                  {item.speakername}
                                </div>
                                <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                                  {item.speaker_affiliation}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      ))

                    }
                  </div>
                </>
              ) : (
                <p>{/* No Keynote Speakers Data */}</p>
              )
            }


            {
              Array.isArray(speakerData) && speakerData.length > 0 ? (
                <>
                  {
                    speakerData.some((item) => item.speakers_type === 'InvitedSpeakers') && (
                      <h4 className='mb-3 text-blue'>Invited Speakers</h4>
                    )
                  }

                  <div className="row">
                    {speakerData.filter((hedg) => hedg.speakers_type === 'InvitedSpeakers')
                      .map((item) => (
                        <div className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight">
                          <figure className="speakers-box">
                            <div className="team-image xs-width-100">
                              <img
                                src={item.speakerphoto}
                                alt={item.speakername}
                                data-no-retina=""
                              />
                              <div className="overlay-content text-center">
                                <div className="display-table height-100 width-100">
                                  <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                                    <div className="min-height-176px">
                                      <div className="text-white font-size-15px display-inline-block no-margin text-left">
                                        <div dangerouslySetInnerHTML={{ __html: item.speaker_awards }} />
                                      </div>
                                    </div>
                                    <a
                                      href="#"
                                      className="text-white font-size-24px"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        openModal(item.id);
                                      }}
                                    >
                                      <button className='btn-biography'> View Biography </button>
                                    </a>
                                    <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                            </div>
                            <figcaption>
                              <div className="team-member-position text-center">
                                <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                                  {item.speakername}
                                </div>
                                <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                                  {item.speaker_affiliation}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      ))
                    }
                  </div>
                </>) : ''
            }




            {/* {Array.isArray(speakerData) &&
              speakerData?.length > 0 ? (speakerData?.map((item, index) => (
                <div className='row'>
                  <div className="col-lg-12 mb-2"><h2>{speakerData?.speakers_type}</h2></div>


                  <div
                    key={item.id}
                    className="col-md-3 col-sm-12 col-xs-12 team-block text-left margin-30px-bottom team-style-1 sm-margin-seven-bottom xs-margin-40px-bottom wow fadeInRight"
                  >
                    <figure className="speakers-box">
                      <div className="team-image xs-width-100">
                        <img
                          src={item.speakerphoto}
                          alt={item.speakername}
                          data-no-retina=""
                        />
                        <div className="overlay-content text-center">
                          <div className="display-table height-100 width-100">
                            <div className="vertical-align-bottom display-table-cell icon-social-small padding-twelve-all">
                              <div className="min-height-176px">
                                <ul className="text-white font-size-15px display-inline-block no-margin text-left">
                                  {item.speaker_biography}
                                </ul>
                              </div>
                              <a
                                href="#"
                                className="text-white font-size-24px"
                                onClick={(e) => {
                                  e.preventDefault();
                                  openModal(item.id);
                                }}
                              >
                                
                                <button className='btn-biography'> View Biography </button>
                              </a>
                              
                              <div className="separator-line-horrizontal-full bg-light-blue margin-eleven-tb bg-white"></div>


                            </div>
                          </div>
                        </div>
                        <div className="team-overlay bg-extra-dark-gray opacity8"></div>
                      </div>
                      <figcaption>
                        <div className="team-member-position text-center">
                          <div className="text-extra-large font-weight-600 text-extra-dark-gray text-uppercase font-weight-bold">
                            {item.speakername}
                          </div>
                          <div className="text-medium font-weight-500 text-dark-gray font-size-15px">
                            {item.speaker_affiliation}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>

                </div>

              ))) : "no data"
            } */}



          </div>

          {Array.isArray(speakerData) &&
            speakerData?.length > 0 ? speakerData.map(
              (speaker) =>
                openModalId === speaker.id && (
                  <div key={speaker.id} className="modal-overlay">
                    <div className="modal-content text-left" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                      <div className="bg-light shadow-sm p-3 d-flex justify-content-between">
                        <h5 className=''><span className='text-primary'>Talk Title:</span> <span style={{ fontWeight: 400 }}>{speaker.speaker_talk_tittle}</span></h5>
                        <button
                          className="border-0 text-danger background-none"
                          onClick={closeModal} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        </button>
                      </div>

                      <div className="p-3">
                        <h5 className='text-primary'>Biography: </h5>
                        <div dangerouslySetInnerHTML={{ __html: speaker.speaker_biography }} />
                      </div>
                    </div>
                  </div>
                )
            ) : <p className='text-center text-secondary'>Will update soon</p>
          }

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