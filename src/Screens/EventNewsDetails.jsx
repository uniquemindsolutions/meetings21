import React, { useEffect, useState } from 'react'
import EventHeader from '../Header/EventHeader'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';

const EventNewsDetails = () => {
    const newsDetailsUrl = process.env.REACT_APP_API_URL;

    const [news, setNews] = useState([])
    const [error, setError] = useState('')

    const { id } = useParams();

    const location = useLocation();

    useEffect(() => {
        getNewDetails()
    }, [])

    const getNewDetails = async () => {
        const currentEventName = location.pathname.split('/');
        console.log("currentEventName===111", currentEventName)
        try {
            const response = await axios.get(`${newsDetailsUrl}${currentEventName[1]}/event/news/${id}`);
            setNews(response.data);
            console.log("new details ===", response.data)
        } catch {
            setError('No data found')
        }
    }


    return (
        <main>
            <EventHeader />
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>Event News Details</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">News Details</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="blog-main-section index3-blog-section w-100 float-left padding-top position-relative">
                <div className="container">
                    <div className="generic-title2">
                        <h2 className="mb-5">Recent News Articles</h2>
                       <h5>{news.news_about}</h5> 
                        <span className="d-inline-block"><small>{news.news_date}</small></span>
                        <figure className="mb-0">
                            <img src={news.news_image} className='img-fluid' alt="blog-img1" />
                        </figure>
                       {/* <p>{news.news_description}</p> */}
                       <div className='mt-5 mb-3' dangerouslySetInnerHTML={{ __html: news.news_description}}/>
                    </div>
                    {/* <div className="blogs-inner-con">
                        <div className="blog-box position-relative">
                            <div className="blog-img position-relative">
                                
                                
                            </div>
                            <div className="blog-text">
                                 <h6 className="position-relative">
                                    
                                </h6>
                            </div>
                        </div>

                    </div> */}
                </div>
            </section>
        </main>
    )
}

export default EventNewsDetails