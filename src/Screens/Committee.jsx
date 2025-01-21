import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import EventHeader from '../Header/EventHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Committee = () => {

    const committeeUrl = process.env.REACT_APP_API_URL;
    const location = useLocation();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentEventName, setCurrentEventName] = useState('');
    const [currentEventId, setCurrentEventId] = useState('');
    const [committeeData, setCommitteeData] = useState('');



    useEffect(() => {
        dynamicEvents();
    }, [])

    const dynamicEvents = async () => {
        const currentEvents = location.pathname.split('/');
        setCurrentEventName(currentEvents[1])
        console.log("currentEventNameres ===", currentEvents[1], currentEvents)
        try {
            const res = await axios.get(`${committeeUrl}${currentEvents[1]}/committees/`);
            setCommitteeData(res.data);
            console.log('committeeUrl ===', res.data);
        } catch {
            setError('Error loaded')
        }
    }




    return (

        <div>
            <div>
                <EventHeader />
                <section className="sub-banner-main-section w-100 justify-content-center">
                    <div className="sub-banner-inner-con text-center">
                        <h1>Committee</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-inline-block mb-0">
                                <li className="breadcrumb-item d-inline-block"><a href="/">HOME</a></li>
                                <li className="breadcrumb-item active d-inline-block" aria-current="page">Committee</li>
                            </ol>
                        </nav>
                    </div>
                </section>
            </div>
            <div className='container padding-top padding-bottom'>

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {committeeData.length > 0 && (() => {
                    // Group members by committee type
                    const groupedMembers = committeeData.reduce((acc, member) => {
                        if (!acc[member.committe_type]) {
                            acc[member.committe_type] = [];
                        }
                        acc[member.committe_type].push(member);
                        return acc;
                    }, {});

                    return (
                        <main className='row'>
                            {/* Render Chair */}
                            {groupedMembers['Chair'] && groupedMembers['Chair'].map((member, index) => (
                                <div className="col-lg-6 col-md-6 mb-4" key={`chair-${index}`}>
                                    <h4 className='text-primary'>CHAIR</h4>
                                    <div className="committee-box h-100">
                                        <h5>{member.member_name}</h5>
                                        <p>{member.member_affiliation}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Render Co-chair */}
                            {groupedMembers['Co-chair'] && groupedMembers['Co-chair'].map((member, index) => (
                                <div className="col-lg-6 col-md-6 mb-4" key={`cochair-${index}`}>
                                    <h4 className='text-primary'>CO-CHAIR</h4>
                                    <div className="committee-box h-100">
                                        <h5>{member.member_name}</h5>
                                        <p>{member.member_affiliation}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Render Committee Members */}
                            {groupedMembers['Committee_members'] && (
                                <>
                                    <div className="col-lg-12 col-md-12 mt-5">
                                        <h4 className='text-primary'>COMMITTEE MEMBERS</h4>
                                    </div>
                                    {groupedMembers['Committee_members'].map((member, index) => (
                                        <div className="col-lg-4 col-md-6 mb-4" key={`committee-member-${index}`}>
                                            <div className="committee-box h-100">
                                                <h5>{member.member_name}</h5>
                                                <p>{member.member_affiliation}</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </main>
                    );
                })()}

                {/* {!loading && !error && (
                    <div className="row">
                        {committeeData.length > 0 && committeeData.map((member, index) => {
                            if (member.committe_type === 'Chair') {
                                return (
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <h4>CHAIR</h4>
                                        <div className="committee-box h-100">
                                            <h4>{member.member_name}</h4>
                                            <p>{member.member_affiliation}</p>
                                        </div>
                                    </div>
                                );
                            }

                            if (member.committe_type === 'Co-chair') {
                                return (
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <h4>CO-CHAIR</h4>
                                        <div className="committee-box h-100">
                                            <h4>{member.member_name}</h4>
                                            <p>{member.member_affiliation}</p>
                                        </div>
                                    </div>
                                );
                            }

                            if (member.committe_type === 'Committee_members') {
                                return (
                                    <div className="mt-5">
                                        <div className="col-lg-12 col-md-12 mb-4">
                                            <h4>COMMITTEE MEMBERS</h4>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4">
                                            <div className="committee-box h-100">
                                                <h4>{member.member_name}</h4>
                                                <p>{member.member_affiliation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                )} */}

                {/* <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <h4>CHAIR</h4>
                        <div className="committee-box h-100">
                            <h4>Reza Kashtiban</h4>
                            <p>University of Warwick, UK</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-4">
                        <h4>CO-CHAIR</h4>
                        <div className="committee-box h-100">
                            <h4>Reza Kashtiban</h4>
                            <p>University of Warwick, UK</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 mb-4">
                        <h4>COMMITTEE MEMBERS</h4>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h4>COMMITTEE MEMBERS</h4>
                        <div className="committee-box h-100">
                            <h4>Reza Kashtiban</h4>
                            <p>University of Warwick, UK</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Rodrigo Martins</h4>
                            <p>Universidade NOVA de Lisboa, Portugal</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Daniele Botticelli</h4>
                            <p>
                                ARDEC Academy, Italy</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Francesco Caridi</h4>
                            <p>University of Messina, Italy</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Agnieszka Cizman</h4>
                            <p>Wroclaw University of Science and Technology, Poland</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Sayan Bhattacharyya</h4>
                            <p>Indian Institute of Science Education &amp; Research (IISER) Kolkata, India</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>A Senthil Kumar</h4>
                            <p>National University of Singapore, Singapore</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Francesco Fabbrocino</h4>
                            <p>Pegaso University, Italy</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Tomasz KISIELEWICZ</h4>
                            <p>Warsaw University of Technology, Poland</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Pedro Fonte</h4>
                            <p>University of Algarve, Portugal</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Walid A. Daoud</h4>
                            <p>City University of Hong Kong, Hong Kong</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Bidyut Saha</h4>
                            <p>University of Burdwan, India</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="committee-box h-100">
                            <h4>Raul Duarte Campilho</h4>
                            <p>ISEP - School of Engineering, Portugal</p>
                        </div>
                    </div>

                </div> */}

            </div>
            <div className="clearfix"></div>
            <Footer />
        </div>
    )
}

export default Committee