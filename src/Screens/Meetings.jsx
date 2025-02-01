import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import SubscribeSection from './Home/subscribe-section'
import Footer from '../Footer/footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Meetings = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const gotoEvent = () => {
  //   debugger
  //   navigate("/events/Material_science/2")
  // }

  const dynamicEventUrl = process.env.REACT_APP_API_URL + 'api/';


  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentEventName, setCurrentEventName] = useState('');
  // const [currentEventId, setCurrentEventId] = useState('');


  console.log("currentEventName === ", currentEventName)

  useEffect(() => {
    dynamicEvents()
  }, [])

  const dynamicEvents = async () => {
    try {
      const res = await axios.get(dynamicEventUrl + 'EventMeetings/')
      setCurrentEventName(res.data);
      console.log('dynamicEventUrl ===', res.data)
    } catch {
      setError('Error loaded')
    }
  }

  return (
    <>
      <Header />

      <section className="sub-banner-main-section event-banner-section w-100 float-left">
        <div className="container">
          <div className="sub-banner-inner-con">
            <h1>Upcoming Meetings</h1>
            <p>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-inline-block mb-0">
                <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                <li className="breadcrumb-item active d-inline-block" aria-current="page">EVENTS</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className='container padding-bottom padding-top'>
        <div className='row'>
          <div className='col-lg-12 text-center mt-5 mb-5'>
            <h2>October, 2025</h2>
          </div>
        </div>

        <div className="row">
         


          {loading ? (
            <p>Loading...</p>
          ) : currentEventName && Array.isArray(currentEventName) && currentEventName.length > 0 ? (
            currentEventName.map((items, index) => (
              <div key={index} className="col-md-5 offset-md-1">
                <Link to={`/${items.domain_name}`} target='_blank' className="event-card">
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
      </div>

      <SubscribeSection/>
      
      <Footer />
    </>
  )
}

export default Meetings