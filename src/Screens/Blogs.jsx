import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Blogs = () => {

    const apiBlogUrl = process.env.REACT_APP_API_URL;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        getBlogData();
    }, [])

    const getBlogData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiBlogUrl}Blogs/`)
            console.log("apiBlogUrl === ", res)
            setBlogData(res.data)
            console.log("blogData === ", blogData)
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
                            <h1>Blogs</h1>
                            <p>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-inline-block mb-0">
                                    <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                    <li className="breadcrumb-item active d-inline-block" aria-current="page">Blogs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="blog-main-section index3-blog-section w-100 float-left padding-top position-relative">
                    <div className="container">
                        <div className="generic-title2 text-center">
                            <h2 className="mb-0">All Blogs</h2>
                        </div>
                        <div className="blogs-inner-con">

                            {loading ? (
                                <p>Loading...</p>
                            ) : blogData && Array.isArray(blogData) && blogData.length > 0 ? (
                                blogData.map((items, index) => (
                                    <Link to={`/blog-details/${items.id}`} key={index} className="blog-box position-relative">
                                        <div className="blog-img position-relative">
                                            <span className="d-inline-block">{index+1}</span>
                                            <figure className="mb-0">
                                                <img src={items.blog_image} className='img-fluid' alt="blog-img1" />
                                            </figure>
                                        </div>
                                        <div className="blog-text">
                                            <span className="d-block">{items.blog_date}</span>
                                            <span className="small-text aos-init aos-animate">{items.blog_description}</span>
                                            <h6 className="position-relative">{items.blog_heading}</h6>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No blogs found.</p>
                            )}
                        </div>
                        <div className=" "></div>
                        {/* <div className="blogs-inner-con mt-5">
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">04.</span>
                        <figure className="mb-0">
                            <img src="/images/awards.jpg" alt="blog-img1" />
                        </figure>
                    </div>
                    <div className="blog-text">
                       
                        <span className="small-text aos-init aos-animate">Conference & Awards:</span>
                        <h6 className="position-relative"><a href="single-blog.html">We recognize and award the top presentations in the conference.</a></h6>
                    </div>
                </div>
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">05.</span>
                        <figure className="mb-0">
                            <img src="/images/24-7.jpg" alt="blog-img3" />
                        </figure>
                    </div>
                    <div className="blog-text">
                        
                        <span className="small-text aos-init aos-animate">24/7 support:</span>
                        <h6 className="position-relative"><a href="single-blog.html">We are available round the clock to support with any concern.</a></h6>
                    </div>
                </div>
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">06.</span>
                        <figure className="mb-0">
                            <img src="/images/refunds.jpg" alt="blog-img3" />
                        </figure>
                    </div>
                    <div className="blog-text">
                        
                        <span className="small-text aos-init aos-animate">Quick Refunds:</span>
                        <h6 className="position-relative"><a href="single-blog.html">All refunds will be processed within a fixed timeframe for hassle free refunds.</a></h6>
                    </div>
                </div>
            </div> */}

                    </div>
                </section>
                {/* <section className="blog-posts blogpage-section w-100 float-left padding-top">
        <div className="container">
            <div className="row wow fadeInUp">
                <div id="blog" className="col-xl-12">
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box blog-box1">
                                <figure className="blog-image mb-0">
                                    <img src="/images/blog-image1.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="lower-portion">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    <h5>Why You Need Virtual Assistant for Your Company</h5>
                                </div>
                                <div className="button-portion ">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="./single-blog.html">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box blog-box2">
                                <figure className="blog-image mb-0">
                                    <img src="/images/blog-image2.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="lower-portion">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    <h5>Why You Need Virtual Assistant for Your Company</h5>
                                </div>
                                <div className="button-portion">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="./single-blog.html">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box">
                                <figure className="blog-image mb-0">
                                    <img src="/images/blog-image3.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="lower-portion">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    <h5>Why You Need Virtual Assistant for Your Company</h5>
                                </div>
                                <div className="button-portion">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="./single-blog.html">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-audio position-relative">
                                        <a href="#"><img src="/images/blog-image4.jpg" alt=""
                                                className="img-fluid" /></a>
                                    </div>
                                    <div className="lower-portion">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="tag-mb fa-solid fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                    </div>
                                    <div className="button-portion">
                                        <div className="date">
                                            <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none"
                                                href="./single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-video">
                                        <div className="embed-container"><iframe
                                                src="https://player.vimeo.com/video/157467640?background=1"></iframe>
                                        </div>
                                    </div>
                                    <div className="lower-portion">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="tag-mb fa-solid fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                    </div>
                                    <div className="button-portion">
                                        <div className="date">
                                            <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none"
                                                href="./single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog-box blogpost-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-video">
                                        <div className="fluid-width-video-wrapper">
                                            <iframe width="560" height="376"
                                                src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                        </div>
                                    </div>
                                    <div className="infinite-blog float-left">
                                        <div className="lower-portion">
                                            <i className="fa-solid fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="tag-mb fa-solid fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </div>
                                        <div className="button-portion">
                                            <div className="date">
                                                <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                                <span className="mb-0 text-size-14">Dec 20,2022</span>
                                            </div>
                                            <div className="button">
                                                <a className="mb-0 read_more text-decoration-none"
                                                    href="./single-blog.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section> */}

                <Footer />
            </section>
        </>
    )
}

export default Blogs