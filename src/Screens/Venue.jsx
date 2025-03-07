
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Venue = () => {

  //https://meetings21.com/Meetings21Backend/Material_science/more/venues/

  const committeeUrl = process.env.REACT_APP_API_URL;
  const venuImgsApi = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentEventName, setCurrentEventName] = useState('');
  const [currentEventId, setCurrentEventId] = useState('');
  const [venueData, setVenuedata] = useState('');
  const [venueImg, setVenueImg] = useState('');



  useEffect(() => {
    venuedata();
    getVenueImgs();
  }, []);

  const venuedata = async () => {
    const currentEvents = location.pathname.split('/');
    setCurrentEventName(currentEvents[1])
    console.log("currentEventNameres ===", currentEvents[1], currentEvents)
    try {
      const res = await axios.get(`${committeeUrl}${currentEvents[1]}/more/venues/`);
      setVenuedata(res.data[0]);
      console.log('venuedata ===', res.data);
    } catch {
      setError('Error loaded')
    }
  }

  const getVenueImgs = async () => {
    const currentEvents = location.pathname.split('/');
    console.log('currentEvents venue', currentEvents)
    try {
      const response = await axios.get(venuImgsApi + currentEvents[1] + '/more/venue/Images/');
      setVenueImg(response.data);
      console.log('images venue', response.data)
    } catch {
      setError('Images not found')
    }
  }
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
              <div className="col-md-8 offset-md-2">
                <div className="card shadow">
                  <div className="card-header bg-info text-white"><h5>Conference Venue</h5></div>
                  <div className="card-body bg-light">
                    <h6><b className='text-secondary'>Hotel Name:</b> {venueData.hotel_name}</h6>
                    <h6><b className='text-secondary'>Address:</b> <span dangerouslySetInnerHTML={{ __html: venueData.address }} /> </h6>
                    <h6><b className='text-secondary'>Phone: </b>{venueData.phone}</h6>

                  </div>
                </div>
              </div>

              <div className="col-lg-12 mt-5">
                <p><b>Note 1: </b> {venueData.note_1}</p>

                <p>
                  <b>Note 2: </b> {venueData.note_2}
                </p>
                <p>
                  <b>Note 3: </b> {venueData.note_3}
                </p>

                <h5>About Venue:</h5>
                {/* {venueData.about_hotel} */}
                <div dangerouslySetInnerHTML={{ __html: venueData.about_hotel }} />

              </div>
            </div>
          </div>
        </section>

        <section className='gallery-img container mb-5'>
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : venueImg && Array.isArray(venueImg) && venueImg.length > 0 ? (
              venueImg.map((img) => (

                <div className="col-md-4">
                  <figure className="mb-3">
                    <img src={img?.venue_images} alt="img" className='img-fluid w-100' />
                  </figure>
                </div>

              ))
            ) : (
              <p></p>
            )}


            {/* <div className="col-md-4">
              <figure className="mb-0">
                <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-8.jpg"} alt="img" className='img-fluid w-100' />
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="mb-0">
                <img src={process.env.PUBLIC_URL + '/' + "images/index3-expert-img-5.jpg"} alt="img" className='img-fluid w-100' />
              </figure>
            </div> */}
          </div>
        </section>

        <section className='container mb-5'>
          <div className="card">
            <div className="card-header"><h5>Directions to the Venue</h5></div>
            <div className="card-body p-3">
              {venueData?.location && (
                <div dangerouslySetInnerHTML={{ __html: venueData.location }} />
              )}
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Venue