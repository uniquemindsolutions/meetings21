import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'


const Blogs = () => {
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
                        <li className="breadcrumb-item active d-inline-block" aria-current="page">Blog 1</li>
                    </ol>
                </nav>
            </div>
        </div>
      </section>
      <section className="blog-main-section index3-blog-section w-100 float-left padding-top position-relative">
        <div className="container">
            <div className="generic-title2 text-center">
                {/* <span className="small-text">SKILLS &amp; EXPERIENCE</span> */}
                <h2 className="mb-0">Blogs</h2>
            </div>
            <div className="blogs-inner-con">
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">01.</span>
                        <figure className="mb-0">
                            <img src="/images/rear-view-of-audience-listening-speakers-on-the-stage-in-the-conference-hall-or-seminar-meeting.jpg" alt="blog-img1" />
                        </figure>
                    </div>
                    <div className="blog-text">
                    <span className="d-block">Nov 18, 2020</span>
                        <span className="small-text aos-init aos-animate">21+ Hours of Content</span>
                        <h6 className="position-relative"><a href="single-blog.html">Listen to the 21 hours of quality presentations by the experts in the field.</a></h6>
                    </div>
                </div>
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">02.</span>
                        <figure className="mb-0">
                            <img src="/images/young-happy-businesswoman-talking-on-microphone-while-attending-education-event-in-conference-hall-.jpg" alt="blog-img3" />
                        </figure>
                    </div>
                    <div className="blog-text">
                        <span className="d-block">Nov 18, 2020</span>
                        <span className="small-text aos-init aos-animate">World Class Speakers:</span>
                        <h6 className="position-relative"><a href="single-blog.html">Our conference features Top speakers as Plenary and Keynote Speakers.</a></h6>
                    </div>
                </div>
                <div className="blog-box position-relative">
                    <div className="blog-img position-relative">
                        <span className="d-inline-block">03.</span>
                        <figure className="mb-0">
                            <img src="/images/female-office-employee-making-report-at-business-conference.jpg" alt="blog-img3" />
                        </figure>
                    </div>
                    <div className="blog-text">
                        <span className="d-block">Nov 25, 2020</span>
                        <span className="small-text aos-init aos-animate">Live Q&A:</span>
                        <h6 className="position-relative"><a href="single-blog.html">Get answers and Clarify your doubts directly from the experts.</a></h6>
                    </div>
                </div>
            </div>
            <div className="mt-8"></div>
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