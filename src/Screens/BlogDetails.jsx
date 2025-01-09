import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {

    const apiBlogUrl = process.env.REACT_APP_API_URL;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogDetails, setBlogDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getBlogData();
    }, [])

    const getBlogData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiBlogUrl}Blogs/${id}`);
            console.log("apiBlogUrl === ", res)
            setBlogDetails(res.data)
        } catch {
            setError('No data found')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <section className='blogs-p'>
                <Header />
                <section className="sub-banner-main-section event-banner-section w-100 float-left">
                    <div className="container">
                        <div className="sub-banner-inner-con">
                            <h1>Blog Details</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-inline-block mb-0">
                                    <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                    <li className="breadcrumb-item d-inline-block"><a href="/blogs">Blog</a></li>
                                    <li className="breadcrumb-item active d-inline-block" aria-current="page">Blog Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="blog-main-section index3-blog-section w-100 float-left padding-top position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="generic-title2 mb-3">
                                    <h2 className="mb-0">{blogDetails.blog_heading}</h2>
                                </div>

                                <figure>
                                    <img src={blogDetails.blog_image} className='img-fluid' alt="" />
                                </figure>

                                <h4>{blogDetails.blog_description}</h4>
                                <p>{blogDetails.blog_detail}</p>
                                
                            </div>
                        </div>




                    </div>
                </section>


                <Footer />
            </section>
        </>
    )
}

export default BlogDetails