import React,{useEffect, useState} from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Topics = () => {

    const topicsUrl = process.env.REACT_APP_API_URL ;

    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentEventName, setCurrentEventName] = useState('');

    useEffect(()=>{
        getTopics();
    }, [])

    const getTopics = async ()=>{
        setLoading(true);
        const currentEvents = location.pathname.split('/');
        setCurrentEventName(currentEvents[1])
        try {
            const res = await axios.get(topicsUrl + currentEvents[1] + '/submissions/topics/')
            setCurrentEventName(res.data)
            console.log("topics ===", res.data)
        } catch{
            setError('no data found')
        }
    }

    return (
        <div>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Topics</h1>
                        {/* <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Topics</li>
                            </ol>
                        </nav>
                    </div>
                </section>
            </div>
            <div className="container padding-top padding-bottom">
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <p>The Organizing Committee welcome abstract submissions on the following topics. Topics of interest for submission include, but are not limited to:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12 offset-md-2 display-table margin-25px-top">
                       <div className="card shadow">
                        <div className="card-body">
                        <ul className="no-padding list-style-5">
                            { Array.isArray(currentEventName) &&
                               currentEventName.length>0 ? currentEventName.map((item)=>(
                                    <li>{item.topic_name}</li>
                                )): "no data found"
                            }
                            </ul>
                        </div>
                       </div>
                        {/*<ul className="no-padding list-style-5">
                            <li>Industrial Engineering and Management</li>
                            <li>Artificial intelligence in Production</li>
                            <li>Sustainable Manufacturing</li>
                            <li>Dynamical Control and Intelligent Systems</li>
                            <li>Materials Management &amp; Marketing Management</li>
                            <li>System Dynamics and Simulation</li>
                            <li>Quality Engineering &amp; Supply Chain Management</li>
                            <li>Production Planning and Quality Control</li>
                            <li>Manufacturing Processes &amp; Technology</li>
                            <li>Automation &amp; Robotics</li> 
                        </ul>*/}
                    </div>
                    {/* <div className="col-md-6 col-sm-12 col-xs-12 display-table margin-25px-top">
                        <ul className="no-padding list-style-5">
                            <li>Systems Engineering</li>
                            <li>Computer Aided Manufacturing &amp; Design</li>
                            <li>Chemical Engineering</li>
                            <li>Machine Learning &amp; Mechatronics</li>
                            <li>Atomic Layer Deposition</li>
                            <li>Food Manufacturing &amp; Additive Manufacturing</li>
                            <li>Product Development &amp; Productivity Improvement</li>
                            <li>Industrial 4.0</li>
                            <li>Fluid Mechanics</li>
                            <li>Control System</li>
                        </ul>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col margin-two-top margin-two-bottom sm-margin-15px-bottom xs-margin-10px-bottom text-center">
                        <div className='generic-btn mt-5'>
                            <a className="btn" href="#">Submit Now</a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Topics