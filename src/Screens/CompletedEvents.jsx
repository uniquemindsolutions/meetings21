import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/footer';


const CompletedEvents = () => {

  const baseurl = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [completedData, setCompletedMeet] = useState('');
  useEffect(() => {
    getComepletedmeet();
  }, [])
  const getComepletedmeet = async () => {
    try {
      const res = await axios.get(`${baseurl}api/EventMeetings/completed/`);
      setCompletedMeet(res.data);
      console.log('completed Data ===', res.data);
    } catch {
      setError('Error loaded')
    }
  }
  return (
    <main>
      <Header />
      <section className="sub-banner-main-section w-100 justify-content-center">
        <div className="sub-banner-inner-con text-center">
          <h1>Completed Meetings</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-inline-block mb-0">
              <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
              <li className="breadcrumb-item active d-inline-block" aria-current="page">Completed Mettings</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className='container padding-top  padding-bottom'>
        {/* <h4>No Completed Meetings Yet</h4> */}
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : completedData && Array.isArray(completedData) && completedData.length > 0 ? (
            completedData.map((items, index) => (
              <div key={index} className="col-md-5 offset-md-1">
                <Link to={`/${items.domain_name}`} className="event-card">
                  <div className='event-card-img'>
                    <img src={process.env.PUBLIC_URL + '/' + "images/Dubai-event-img.jpg"} alt="" className='' />
                  </div>
                  <div className='event-card-content'>
                    <h5 className="event-card-title">
                      {items.domain_name}
                    </h5>
                    <p className='mb-0 mt-4'>
                      <small><i className="fa fa-calendar text-secondary"></i> {items.meettings_date}</small>   </p>
                    <p className='mb-0'>
                      <small><i className="fa fa-map-marker text-secondary"></i> {items.meetingslocation} </small>
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Not found Events.</p>
          )}
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default CompletedEvents