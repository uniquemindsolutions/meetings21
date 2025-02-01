import React, { useEffect, useState } from 'react';
import Footer from '../Footer/footer';
import EventHeader from '../Header/EventHeader';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Tabs.css'; // Import CSS styles

const Programs = () => {
  const committeeUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [programData, setProgramData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(null);

  // Fetch program data
  useEffect(() => {
    getPrograms();
  }, [location.pathname]);

  const getPrograms = async () => {
    const currentEventName = location.pathname.split('/')[1];

    try {
      const res = await axios.get(`${committeeUrl}${currentEventName}/agenda/program/`);
      setProgramData(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load program data. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="call-abstract-p">
      <EventHeader />
      <section className="sub-banner-main-section w-100 justify-content-center">
        <div className="sub-banner-inner-con text-center">
          <h1>Program</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-inline-block mb-0">
              <li className="breadcrumb-item d-inline-block">
                <a href="/">HOME</a>
              </li>
              <li className="breadcrumb-item active d-inline-block" aria-current="page">
                Program
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="index3-event-section w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div className="generic-title">
            <span className="small-text">TENTATIVE SCHEDULE OF EVENT</span>
            <div className="d-flex justify-content-between">
              <h3 className="mb-0 text-white">TITLES ACCEPTED FOR PRESENTATION</h3>
              <div className="index3-faq-btn-con text-center">
                <div className="generic-btn">
                  <a href="contact.html">
                    DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-danger">{error}</div>
          ) : programData.length === 0 ? (
            <div className="text-center">No program data available.</div>
          ) : (
            <div className="tabs-container mt-5">
              {/* Tab Headers */}
              <div className="tab-headers mb-0">
                {programData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setActiveSubTab(null); // Reset sub-tab when switching tabs
                    }}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  >
                    {item.program_day_type}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="tab-content mt-0 p-0">
                {/* Sub-tabs (Talks) */}
                <div className="sub-tab-headers">
                  {Array.isArray(programData[activeTab]?.talks) &&
                    programData[activeTab]?.talks.length > 0 ? (
                    programData[activeTab].talks.map((talk, subIndex) => (
                      <div key={subIndex}>
                        {/* Button to toggle accordion */}
                        <button
                          onClick={() =>
                            setActiveSubTab(activeSubTab === subIndex ? null : subIndex)
                          }
                          className={`tab-button ${activeSubTab === subIndex ? 'active' : ''}`}
                        >
                          {talk.talk_title}
                        </button>

                        {/* Accordion Content */}
                        {activeSubTab === subIndex && (
                          <div className="sub-tab-content">
                            <h5>{talk.talk_title}</h5>
                            <p className='text-pink' style={{ fontSize: '15px' }}>
                              <strong>Speaker Affiliation:</strong> {talk.speaker_affiliation}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>No talks available for this session.</div>
                  )}
                </div>
              </div>



            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
