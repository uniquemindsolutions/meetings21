import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Abstract = () => {

    const abstractApi = process.env.REACT_APP_API_URL;

    const [abstractData, setAbstractData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentEventName, setCurrentEventName] = useState('');

    console.log("abstractData ===", abstractData)

    const location = useLocation();


    useEffect(() => {
        getAbstract();
    }, [])

    const getAbstract = async () => {
        setLoading(true);
        try {
            const currentEvents = location.pathname.split('/');
            // setCurrentEventName(currentEvents[1])

            const res = await axios.get(abstractApi + currentEvents[1] + '/submissions/call_for_abstract/')
            setAbstractData(res.data)
            console.log("AbstractData === ", res.data)
        } catch {
            setError("no data found")
        }
    }



    return (
        <div className='call-abstract-p'>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Call for Abstracts</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Abstract</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className='padding-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <p>You are invited to contribute to the global discussion and submit an abstract for consideration for inclusion in the Scientific Program. Please read the information on this page carefully and when you are ready to submit your abstract please click the button below which will open the Call for Abstracts portal in a new window.</p>
                                <p className="font-weight-bold text-center">
                                    Please download the Abstract Template available here: <a className="btn btn-outline-success btn-circle" href="https://industrial-engineering.synergiasummits.com/storage/abstract_templates/1700548262.docx">Download Template</a></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container">
                        <div className="row">
                            {
                                abstractData.map((abs) => {
                                    {
                                        if (abs.select_heading === 'Key dates') {
                                            return <div className="col-md-6 display-table margin-25px-top">
                                                <div className="card">
                                                    <div className="card-header bg-info">
                                                        <h4 className="text-white">Key Dates</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <p dangerouslySetInnerHTML={{ __html: abs.abstracts_description }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        if (abs.select_heading === 'Presenation Types') {
                                            return <div className="col-md-6 display-table margin-25px-top">
                                                <div className="card">
                                                    <div className="card-header bg-info">
                                                        <h4 className="text-white">Presenation Types</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <p dangerouslySetInnerHTML={{ __html: abs.abstracts_description }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    }
                                    {/* if (member.committe_type === 'Chair') {
                                return (
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <h4>CHAIR</h4>
                                        <div className="committee-box h-100">
                                            <h4>{member.member_name}</h4>
                                            <p>{member.member_affiliation}</p>
                                        </div>
                                    </div>
                                );
                            } */}

                                })
                            }
                        </div>

                    </div>
                </section>

                <section className='padding-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col margin-two-bottom sm-margin-15px-bottom xs-margin-10px-bottom text-center">
                                <h4 className="alt-font text-extra-dark-gray margin-10px-bottom font-weight-600">Submission Guidelines</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 ticket-details">
                                <ul className="list-unstyled4">
                                    <li className="position-relative list-style-4">Abstracts are to be submitted through online submission system only. Faxes or emails will not be accepted.</li>
                                    <li className="position-relative list-style-4">Abstracts must be in English, in Word Doc or PDF format, Should not exceed 500 words.</li>
                                    <li className="position-relative list-style-4">The presenting author should obtain necessary regulatory permissions and take responsibility for the accuracy of the results.</li>
                                    <li className="position-relative list-style-4">An e-mail confirming the receipt of abstract, including an abstract number, will be sent to the submitting author. This number should be quoted for all further correspondence.</li>
                                    <li className="position-relative list-style-4">Modification of submitted abstracts will be permitted only if the author informs conference secretary through email prior 60 days of the summit.</li>
                                    <li className="position-relative list-style-4">Abstracts will be reviewed by committee and selected for oral/poster presentation on the basis of merit. The summit organizing committee reserves the right to select papers and posters for presentation.</li>
                                    <li className="position-relative list-style-4">The acceptance and mode of presentation will be intimated to authors via e-mail within 7 working days from the date of submission.</li>
                                    <li className="position-relative list-style-4">The meeting rooms are equipped with data projectors thus only MS PowerPoint will be accepted.</li>
                                    <li className="position-relative list-style-4">Conflict of Interest: If the research is funded (partially or fully) by a proprietary organization, a statement to that effect must be included at the bottom of the abstract.</li>
                                    <li className="position-relative list-style-4">Please note that no more than two submissions will be allowed per presenter due to possible program limitations.</li>
                                    <li className="position-relative list-style-4">Please read the submission requirements carefully as submissions will not be changed later. Where possible abstracts will be published as received and the organizers reserve the right to make changes for editing purposes. It is the responsibility of the main author to ensure that submitted abstracts have been edited before submission to minimize errors in the program.</li>
                                    <li className="position-relative list-style-4">The author has to make the mode of presentation clear at the time of submission of abstracts.</li>
                                    <li className="position-relative list-style-4">Please choose the topic most related to your abstract. However, the committee reserves the right to decide on the definitive topic after abstract selection.</li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="row mb-5">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 generic-btn text-center"><a className="" href="https://industrial-engineering.synergiasummits.com/abstract">Submit Now</a></div>
                        </div> */}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Abstract