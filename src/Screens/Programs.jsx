import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Tabs.css'; // Import CSS styles
const Programs = () => {

  const committeeUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentEventName, setCurrentEventName] = useState('');
  const [currentEventId, setCurrentEventId] = useState('');
  const [programData, setProgram] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [activesubTab, setActivesubTab] = useState(0);
  useEffect(()=>{
    getPrograms();
  }, [])

  const getPrograms = async ()=>{
    const currentEvents = location.pathname.split('/');
  setCurrentEventName(currentEvents[1])
  console.log("currentEventNameres ===", currentEvents[1], currentEvents)
  try {
      const res = await  axios.get(`${committeeUrl}${currentEvents[1]}/agenda/program/`);
      setProgram(res.data);
      console.log('programdata ===', res.data);
  } catch {
      setError('Error loaded')
  }
  }
  const tabData = [
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
  ];

  return (

    <div className='call-abstract-p'>
      <div>
        <EventHeader />
zdfssd
        <div className="tabs-container">
      <div className="tab-headers">
   
      { Array.isArray(programData) &&
                                programData?.length > 0 ? (programData?.map((item, index) => (
          <button key={index} onClick={() => setActiveTab(index)}
          className={`tab-button ${activeTab === index ? 'active' : ''}`}>{item.program_day_type}
          </button>
        ))) : "no data"
      }
      </div>
      <div className="tab-content">
        {/* <p>{tabData[activeTab].content} {programData[activeTab]?.program_day_type}</p> */}
        { Array.isArray(programData[activeTab]?.talks) &&
                                programData[activeTab].talks?.length > 0 ? (programData[activeTab].talks?.map((item, index) => (
        <button key={index} onClick={() => setActivesubTab(index)}
          className={`tab-button ${activesubTab === index ? 'active' : ''}`}>{item.talk_title}
          </button>
            ))) : "no data"
          }
          <span></span>
      </div>
      </div>


         {/* <section className="sub-banner-main-section w-100 justify-content-center">
          <div className="sub-banner-inner-con text-center">
            <h1>Program</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-inline-block mb-0">
                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                <li className="breadcrumb-item active d-inline-block" aria-current="page">Program</li>
              </ol>
            </nav>
          </div>
        </section> */}



        {/* <section className="index3-event-section w-100 float-left padding-top padding-bottom">
          <div className="container">
            <div className="generic-title">
              <span className="small-text">TENTATIVE SCHEDULE OF EVENT</span>
              <div className="d-flex justify-content-between">
                <h3 className="mb-0 text-white">TITLES ACCEPTED FOR PRESENTATION</h3>
                <div className="index3-faq-btn-con text-center">
                  <div className="generic-btn">
                    <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            { Array.isArray(programData) &&
                                programData?.length > 0 ? (programData?.map((item, index) => (
            <div className="index3-event-tabs-con">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home"
                    type="button" role="tab" aria-controls="home" aria-selected="true">DAY {index+1}</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div id="accordion" className="index3-faqs">
                 
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">{item.session_title}</small>
                                </div>
                              </div>

                            </div>
                          </button>
                        </h6>
                      </div>

                      <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div className="card-body ">
                      
                        { Array.isArray(item.talks) &&
                                item.talks?.length > 0 ? (item.talks?.map((itemres, index) => (
                          <div className="border-bottom pb-2 mb-3">
                            <div className='text-white'> {item.talk_title}</div>
                            <span className="d-block">
                             {itemres.speaker_affiliation}
                            </span>
                          </div>
                           ))) : "no data"
                          }

                        </div>
                      </div>
                    </div>
    
                 

                  </div>

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div id="accordion" className="index3-faqs">
                    <div className="card">
                      <div className="card-header" id="headingsix">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapsesix" aria-expanded="false"
                            aria-controls="collapsesix">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">10:00 AM-11.15 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapsesix" className="collapse" aria-labelledby="headingsix"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Deep Learning for Industrial Robot Vision: Challenges and Opportunities</p>
                          <span className="d-block">
                            Michael Greenspan, Queen’s University, Kingston, Canada
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingseven">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseseven" aria-expanded="false"
                            aria-controls="collapseseven">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">11:00 AM-12.00 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapseseven" className="collapse" aria-labelledby="headingseven"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Dongsheng Li, Founder: Advanced Manufacturing LLC and AM Energization Corp</p>
                          <span className="d-block">Dongsheng Li, Founder: Advanced Manufacturing LLC and AM Energization Corp</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeight">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseeight" aria-expanded="true"
                            aria-controls="collapseeight">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">08:00 AM-08.45 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>

                      <div id="collapseeight" className="collapse" aria-labelledby="headingeight"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Zineb Britel, Industrial Engineering Department, Mohammadia School of Engineers EMI, Mohammed V University, Morocco</p>
                          <span className="d-block">Human-Robot Interaction: Bridging the Gap Between Humans and Cobots in Industry</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingnine">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapsenine" aria-expanded="false"
                            aria-controls="collapsenine">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">09:00 AM-10.00 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapsenine" className="collapse" aria-labelledby="headingnine"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Risk and Mitigation Strategies for Smart Manufacturing </p>
                          <span className="d-block">Shipra Pandey, Management Development Institute Gurgaon, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="index3-faq-btn-con text-center">
                    <div className="generic-btn">
                      <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div id="accordion" className="index3-faqs">
                    <div className="card">
                      <div className="card-header" id="headingten">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseten" aria-expanded="true" aria-controls="collapseten">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">08:00 AM-08.45 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>

                      <div id="collapseten" className="collapse" aria-labelledby="headingten"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Industry 4.0 for Supply Chain Resilience in the Future of Manufacturing</p>
                          <span className="d-block">NISHTHA AGARWAL, New Delhi Institute of Management,India</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeleven">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseeleven" aria-expanded="false"
                            aria-controls="collapseeleven">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">09:00 AM-10.00 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Industrial management and artificial intelligence, what relationships for what performance</p>
                          <span className="d-block">Zitouni Beidouri, Hassan II University, Marruecos</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingtwelve">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapsetwelve" aria-expanded="false"
                            aria-controls="collapsetwelve">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">10:00 AM-11.15 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapsetwelve" className="collapse" aria-labelledby="headingtwelve"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Physics-Informed Machine Learning for Solving Inverse Heat Transfer and Fluid Flow Problems</p>
                          <span className="d-block">Yanglong Lu, Southeast University,Hong kong</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingthirteen">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapsethirteen" aria-expanded="false"
                            aria-controls="collapsethirteen">
                            <div className="index3-event-detail">
                              <div className="index3-event-date-con">
                                <div className="index3-event-month text-left">
                                  <small className="d-block">11:00 AM-12.00 AM</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h6>
                      </div>
                      <div id="collapsethirteen" className="collapse" aria-labelledby="headingthirteen"
                        data-parent="#accordion">
                        <div className="card-body">
                          <p>Additive Manufacturing Process Monitoring Based on Physics-Constrained Dictionary Learning</p>
                          <span className="d-block">Yanglong Lu, Southeast University,Hong kong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="index3-faq-btn-con text-center">
                    <div className="generic-btn">
                      <a href="contact.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               ))) : "no data"
                  }
          </div>
        </section>  */}
        
      </div>

      <Footer />
    </div>
  )
}

export default Programs