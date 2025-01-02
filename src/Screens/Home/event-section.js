import React from "react";

const EventSection = () => {
  return (
    <section className="event-main-section w-100 float-left padding-top padding-bottom light-bg">
    <div className="container">
        <div className="event-inner-section">
            <div className="event-left-con">
                <div className="generic-title">
                    <span className="small-text" data-aos="fade-up" data-aos-duration="700">SCHEDULE OF EVENT</span>
                    <h2 data-aos="fade-up" data-aos-duration="700">List of Events Planned in This Conference</h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="700">This is a detailed list event of conference for digital technology 2024.</p>
                <div className="generic-btn" data-aos="fade-up" data-aos-duration="700">
                    <a href="event.html">DOWNLOAD SCHEDULE <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="event-right-con" data-aos="fade-up" data-aos-duration="700">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                            <span className="d-block">Day 1</span>
                            <small>25 OCT 2024</small>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                            <span className="d-block">Day 2</span>
                            <small>26 OCT 2024</small>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                            <span className="d-block">Day 3</span>
                            <small>27 OCT 2024</small>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <div className='education'>
                            <div className='education__content'>
                                <small>09:00 - 11:00</small>
                                <span className='year'>1</span>
                                <h6>Registration</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    g elit, sed do eiusmod tempo. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>11:00 - 12:00</small>
                                <span className='year'>2</span>
                                <h6>Introduction Digital Technology - 2024</h6>
                                <p>Npendisse ultrices gravida. Risus commodo viverr
                                    a maecenas accumsan lacus vel facilisis. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>12:00 - 14:00</small>
                                <span className='year'>3</span>
                                <h6>Speaker Speech</h6>
                                <p>Consectetur adipiscing elit, sed do eiusmod temp
                                    or incididunt ut labore et dolore. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>14:00 - 15:00</small>
                                <span className='year'>4</span>
                                <h6>Lunch Break</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    glit, sed do eiusmod tempor incididunt ut. <a href="about.html">More</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div className='education'>
                            <div className='education__content'>
                                <small>12:00 - 14:00</small>
                                <span className='year'>1</span>
                                <h6>Speaker Speech</h6>
                                <p>Consectetur adipiscing elit, sed do eiusmod temp
                                    or incididunt ut labore et dolore. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>09:00 - 11:00</small>
                                <span className='year'>2</span>
                                <h6>Registration</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    g elit, sed do eiusmod tempo. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>11:00 - 12:00</small>
                                <span className='year'>3</span>
                                <h6>Introduction Digital Technology - 2024</h6>
                                <p>Npendisse ultrices gravida. Risus commodo viverr
                                    a maecenas accumsan lacus vel facilisis. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>14:00 - 15:00</small>
                                <span className='year'>4</span>
                                <h6>Lunch Break</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    glit, sed do eiusmod tempor incididunt ut. <a href="about.html">More</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div className='education'>
                            <div className='education__content'>
                                <small>11:00 - 12:00</small>
                                <span className='year'>1</span>
                                <h6>Introduction Digital Technology - 2024</h6>
                                <p>Npendisse ultrices gravida. Risus commodo viverr
                                    a maecenas accumsan lacus vel facilisis. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>09:00 - 11:00</small>
                                <span className='year'>2</span>
                                <h6>Registration</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    g elit, sed do eiusmod tempo. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>12:00 - 14:00</small>
                                <span className='year'>3</span>
                                <h6>Speaker Speech</h6>
                                <p>Consectetur adipiscing elit, sed do eiusmod temp
                                    or incididunt ut labore et dolore. <a href="about.html">More</a></p>
                            </div>
                            <div className='education__content'>
                                <small>14:00 - 15:00</small>
                                <span className='year'>4</span>
                                <h6>Lunch Break</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscin
                                    glit, sed do eiusmod tempor incididunt ut. <a href="about.html">More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default EventSection;