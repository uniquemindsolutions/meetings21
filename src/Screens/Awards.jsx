import React from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
const Awards = () => {
    return (

        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Awards</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Awards</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                <section>
                    <div className="container padding-top">
                        <h4 className="alt-font text-extra-dark-gray margin-10px-bottom font-weight-600">Best Presentation Awards</h4>

                        <p>
                            Best Presentation Award serve the purpose of acknowledging an individual’s contributions to fields of materials science and inspiring further participation towards the betterment of the research community as a whole. The overall objective of this award is to encourage young researchers, scientists, as well as master’s and PhD students. This award will be provided for the most outstanding presentation of the entire conference.
                        </p>
                        <p>
                            Please use online abstract submission system through conference website according to the submission formats. It is authors' responsibility to review the abstracts and correct them. Submitters are responsible for following the submission formats and every typing error on the abstract.
                        </p>

                        <h5>Criteria for the Best Presentation Awards</h5>
                        <p>
                            Each presentation is evaluated by the Session Chair. The best presentation from each session is selected based on the mark received from the Session Chair, and the final decision is made by the Conference Chair.
                        </p>

                        <h5>Below criteria are taken into consideration for this award:</h5>
                        <ul className='ml-5'>
                            <li>Content of the presentation</li>
                            <li>Clarity and flow of the Presentation</li>
                            <li>Novelty /contribution to the field</li>
                        </ul>

                        <h5>Award Nature</h5>
                        <p>A certificate and complimentary registration for next edition of the conference will be awarded by the conference chair.</p>

                        <h5>Awards Ceremony</h5>
                        <p>The winner will be announced during the awarding ceremony which will be held on the last day of the conference along with the conference conclusion.</p>
                    </div>
                </section>
            </div>
            <br />

            <Footer />
        </div>
    )
}

export default Awards