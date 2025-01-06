import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const PresentationGuidelines = () => {
    return (

        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Presentation Guidelines</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Presentation Guidelines</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                <section>
                    <div className="container padding-top">
                        <h4 className="alt-font text-extra-dark-gray margin-10px-bottom font-weight-600">Oral Presentation Guidelines</h4>

                        <div class="abstract-submission-guidelines">
                            <ul className='ml-5'>
                                <li>Oral presentations duration is 20 minutes with 2-3 minutes for discussion (25 minutes in total for Q&A).</li>
                                <li>All presenters must bring their PowerPoint/PDF presentation on a USB memory key one hour before their presentation to have it pre‐loaded on the session computers. Individual presentations then begin with the click of a mouse.</li>
                                <li>All events are conducted in English.</li>
                                <li>Practice your presentation beforehand and time it.</li>
                                <li>Use active words, short sentences. Words should reinforce visual material.</li>
                                <li>Our events are designed to be as interactive and frank as possible. All speakers and participants are encouraged to participate in their own personal capacity.</li>
                                <li>Participants are encouraged to contribute to their own personal capacity.</li>
                                <li>Speak loudly and clearly.</li>
                                <li>You may wish to bring business cards to share your contact information with other conference attendees.</li>
                            </ul>

                       
                            <h4 className="alt-font text-extra-dark-gray margin-10px-bottom font-weight-600">Poster Presentation Guidelines</h4>
                            <p>
                                Please have your poster prepared in advance. It is strongly recommended that your poster is made of a material that can be held by the pins which will be available at the Registration Desk
                            </p>
                            <ul className='ml-5'>
                                <li>The dimensions of the poster board are A0 (1189mm × 841mm).</li>
                                <li>Allocate the top of the poster for the title and authors' names and affiliations as stated in the submitted abstract.</li>
                                <li>The text and illustrations should be bold and large enough to read from a distance of two meters (six feet).</li>
                                <li>Posters should be mounted and removed by the participants as per the time slot allotted to him/her.</li>
                                <li>The Organizing Committee will not be responsible for posters that are not removed on time.</li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
            <br />

            <Footer />
        </div>
    )
}

export default PresentationGuidelines