import React, { useEffect, useState } from 'react'
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

  useEffect(()=>{
    getSpekers();
  }, [])

  const getSpekers = async ()=>{
    const currentEvents = location.pathname.split('/');
  setCurrentEventName(currentEvents[1])
  console.log("currentEventNameres ===", currentEvents[1], currentEvents)
  try {
      const res = await  axios.get(`${committeeUrl}${currentEvents[1]}/agenda/speakers/`);
      setSpeakerData(res.data);
      console.log('speakersdata ===', res.data);
  } catch {
      setError('Error loaded')
  }
  }

  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
//   const speakers = [
//     {
//         id: 1,
//         name: "Federico Rosei",
//         talkTitle: "Lorem Ipsum is simply dummy text",
//         Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
//         image: "images/speakers/pspeaker1.png",
//         details: [
//             "2010 PEO Engineering Medal for Entrepreneurship",
//             "2013 EIC Sir John Kennedy Medal",
//             "2016 IEEE A.G.L. McNaughton Gold Medal",
//         ],
//         position: "INRS, Canada",
//     },
//     {
//         id: 2,
//         name: "Ben Zhong TANG",
//         talkTitle: "Lorem Ipsum is simply dummy text",
//         Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
//         image: "images/speakers/pspeaker2.jpg",
//         details: [
//             "2010 PEO Engineering Medal for Entrepreneurship",
//             "2013 EIC Sir John Kennedy Medal",
//             "2016 IEEE A.G.L. McNaughton Gold Medal",
//         ],
//         position: "Ben Zhong TANG",
//     },
//     {
//         id: 3,
//         name: "Jose M. Kenny",
//         talkTitle: "Lorem Ipsum is simply dummy text",
//         Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
//         image: "images/speakers/pspeaker3.jpg",
//         details: [
//             "2010 PEO Engineering Medal for Entrepreneurship",
//             "2013 EIC Sir John Kennedy Medal",
//             "2016 IEEE A.G.L. McNaughton Gold Medal",
//         ],
//         position: "University of Perugia, Italy",
//     },
//     {
//         id: 4,
//         name: "Jan DUSZA",
//         talkTitle: "Lorem Ipsum is simply dummy text",
//         Biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
//         image: "images/speakers/pspeaker4.jpg",
//         details: [
//             "2010 PEO Engineering Medal for Entrepreneurship",
//             "2013 EIC Sir John Kennedy Medal",
//             "2016 IEEE A.G.L. McNaughton Gold Medal",
//         ],
//         position: "Institute of Materials Research of SAS, Slovakia",
//     },
// ];


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
            { Array.isArray(speakerData) &&
                                speakerData.length > 0 ? (speakerData.map((item, index) => (
            <div className='row'>
              <div className="col-lg-12 mb-2"><h2>{speakerData.speakers_type}</h2></div>
            
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
                              {/* <i className="fa-regular fa-eye"></i> */}
                              <button className='btn-biography'> View Biography </button>
                            </a>
                            {/* <button>sddfsdfsdfsd</button> */}
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
        }
       

         
          </div>

          {speakerData.map(
                        (speaker) =>
                            openModalId === speaker.id && (
                                <div key={speaker.id} className="modal-overlay  text-left">
                                    <div className="modal-content text-left">
                                        <h5 className='mb-4'>Talk Title: <span style={{ fontWeight: 400 }}>{speaker.talkTitle}</span></h5>
                                        <h5>Biography: </h5>
                                        <p>{speaker.speaker_biography}</p>
                                        <p>{speaker.speaker_biography}</p>

                                        <ul>
                                            {/* {speaker.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))} */}
                                        </ul>
                                        <div className="text-center mx-auto">
                                            <button
                                                className="custom-button mt-5"
                                                onClick={closeModal} >
                                                Close
                                            </button>
                                        </div>
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