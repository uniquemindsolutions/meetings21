import React, { useEffect, useState } from 'react'
import EventHeader from '../Header/EventHeader'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const RegistrationForm = () => {

    const baseurl = process.env.REACT_APP_API_URL;
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentEventName, setCurrentEventName] = useState('');
  const [currentEventId, setCurrentEventId] = useState('');
  const [regiFeedata, setRegifeeData] = useState('');
  const [accmData, setAccmData] = useState('');

const basedata = [ 
    { key: "registration_type", name: 'Registration Type ' },
    { key: "end_date", name: 'Date' },
    { key: "invited_presentation", name: 'Invited Presentation' },
    { key: "oral_presentation", name: 'Oral Presentation' },
    { key: "poster_presentaion", name: 'Poster Presentation' },
    { key: "student_delegate", name: 'Student Delegate' },
    { key: "delegate", name: 'Delegate' },
    { key: "virtual_presentation", name: 'Virtual Presentation' },
    { key: "accommodation_name", name: 'accommodation_name' },
    { key: "One_Night", name: 'One_Night' },
    { key: "two_Nights", name: 'two_Nights' },
    { key: "three_Nights", name: 'three_Nights' },
    { key: "four_Nights", name: 'four_Nights' },
  ];

  const getNameByKey = (key) => {
    const item = basedata.find((entry) => entry.key === key);
    return item ? item.name : 'Not Found';
  };

  useEffect(()=>{
    getregfeeData();
    getaccmData();
  }, [])

  const getregfeeData = async ()=>{
    const currentEvents = location.pathname.split('/');
  setCurrentEventName(currentEvents[1])
  try {
      const res = await  axios.get(`${baseurl}${currentEvents[1]}/registration/register_categorys/`);
      setRegifeeData(res.data);
      console.log('speakersdata ===', res.data);
  } catch {
      setError('Error loaded')
  }
  }

  const getaccmData = async ()=>{
    const currentEvents = location.pathname.split('/');
  setCurrentEventName(currentEvents[1])
  try {
      const res = await  axios.get(`${baseurl}${currentEvents[1]}/registration/accommodations/`);
      setAccmData(res.data);
      console.log('speakersdata ===', res.data);
  } catch {
      setError('Error loaded')
  }
  }

    return (
        <main>
            <EventHeader />
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>Registration Fee Information</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">Registration Fee</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className='container padding-top'>
                <h2>Registration Fees (USD)</h2>
                <p>Fees that apply to payments received prior to the indicated deadlines.</p>
                <table className='table table-striped table-hover table-bordered' border="1" cellspacing="0" cellpadding="8">
                <table border="1">
                <thead>
                        <tr>
                            <th>Category</th>
                            <th>Early Bird Registration</th>
                            <th>Mid Term Registration</th>
                            <th>Late Registration</th>
                        </tr>
                    </thead>
                    			
      <tbody>  
      { Array.isArray(regiFeedata) && regiFeedata?.length > 0 ? Object.keys(regiFeedata[0]).map((key, colIndex) => (
        key !== "id" && key !=='domain' && key !=='registration_type' ? (
          <tr key={colIndex+1}>
             <td >{getNameByKey(key)}</td>
            {regiFeedata.map((row, rowIndex) => (
              <td key={`${colIndex}-${rowIndex}`}>{row[key]}</td>
            ))}
          </tr>
    ) : null 

        )): "no data"
        }
      </tbody>
    </table>
                </table>
        
                <h2 className='mt-5'>Accommodation Fees (USD)</h2>
                <table className='table table-striped table-hover table-bordered' border="1" cellspacing="0" cellpadding="8">
                   
                <table border="1">
                    <thead>
                        <tr>
                            <th>Accommodation Name</th>
                            <th>Single Occupancy</th>
                            <th>Double Occupancy</th>
                            <th>Triple Occupancy</th>
                      
                        </tr>
                    </thead>
                        <tbody>  
                        { Array.isArray(accmData) &&
                                accmData?.length > 0 ? Object.keys(accmData[0]).map((key, colIndex) => (
                            key !== "id" && key !=='domain' &&  key !=='accommodation_name' ? (
                            <tr key={colIndex+1}>
                                <td >{getNameByKey(key)}</td>
                                {accmData.map((row, rowIndex) => (
                                <td key={`${colIndex}-${rowIndex}`}>{row[key]}</td>
                                ))}
                            </tr>
                        ) : null 

                            )):"No Data"
                        }
                        </tbody>
                        </table>
                       
                </table>

                <h6>*4.5% transaction fee to be added.</h6>
                <h6>** Please pay by Cash (USD) on-site if you (Delegate) choose to do onsite registration.</h6>
            </section>

            <div className="text-center my-5">
                <div class="index3-plan-btn text-center">
                    <div class="generic-btn">
                        <Link to="/online-registration">Proceed to Registration <i class="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <h6>PAYMENT OPTIONS</h6>
                <h6>Preferred mode of payment:</h6>
                <p>Credit Card Online – VISA / MasterCard / PayPal</p>

                <h6>Other payment options:</h6>
                <ul className='ml-4'>
                    <li>Onsite</li>
                    <li>Please refer to the invoice for detailed payment instructions</li>
                </ul>

                <h5>What do the registration fees include:</h5>
                <ul className='ml-4'>
                    <li>Access to all conference sessions</li>
                    <li>Conference material</li>
                    <li>Participation Certificate</li>
                    <li>Lunch on Conference Days</li>
                    <li>Awards Ceremony</li>
                    <li>Networking Event</li>
                    <li>Entrance to the Exhibition</li>
                    <li>Coffee Breaks during Conference Days</li>
                    <li>Wi-Fi During the Conference</li>
                </ul>

                <h5>Accommodation includes:</h5>
                <p>For delegates who reserved accommodation through conference website can avail following:</p>
                <ul className='ml-4 mb-5'>
                    <li>Complimentary Wi-Fi in the guest rooms</li>
                    <li>Complimentary Breakfast</li>
                </ul>
            </div>
            
        </main>
    )
}

export default RegistrationForm