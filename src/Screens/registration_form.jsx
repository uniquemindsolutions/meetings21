import React, { useState } from 'react'
import EventHeader from '../Header/EventHeader'
import { Link } from 'react-router-dom'


const RegistrationForm = () => {



    return (
        <main>
            <EventHeader />
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>Registration Fee Information</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">Registration Fee</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className='container padding-top'>
                <h2>Registration Fees (USD)</h2>
                <p>Fees that apply to payments received prior to the indicated deadlines.</p>
                <table className='table table-striped table-hover table-bordered' border="1" cellspacing="0" cellpadding="8">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Category</th>
                            <th>Early Rate<br />Until January 21, 2025</th>
                            <th>Standard Rate<br />Until April 28, 2025</th>
                            <th>Late Rate<br />Until August 21, 2025</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Invited Presentation</td>
                            <td>$ 649</td>
                            <td>$ 749</td>
                            <td>$ 849</td>
                        </tr>
                        <tr>
                            <td>Oral Presentation</td>
                            <td>$ 699</td>
                            <td>$ 799</td>
                            <td>$ 899</td>
                        </tr>
                        <tr>
                            <td>Poster Presentation</td>
                            <td>$ 399</td>
                            <td>$ 499</td>
                            <td>$ 599</td>
                        </tr>
                        <tr>
                            <td>Student Delegate</td>
                            <td>$ 299</td>
                            <td>$ 399</td>
                            <td>$ 499</td>
                        </tr>
                        <tr>
                            <td>Delegate</td>
                            <td>$ 799</td>
                            <td>$ 899</td>
                            <td>$ 999</td>
                        </tr>
                        <tr>
                            <td>Virtual Presentation</td>
                            <td>$ 199</td>
                            <td>$ 299</td>
                            <td>$ 399</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className='mt-5'>Accommodation Fees (USD)</h2>
                <table className='table table-striped table-hover table-bordered' border="1" cellspacing="0" cellpadding="8">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Category</th>
                            <th>Single Occupancy</th>
                            <th>Double Occupancy</th>
                            <th>Triple Occupancy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>One Night</td>
                            <td>$ 200</td>
                            <td>$ 230</td>
                            <td>$ 260</td>
                        </tr>
                        <tr>
                            <td>Two Nights</td>
                            <td>$ 400</td>
                            <td>$ 460</td>
                            <td>$ 520</td>
                        </tr>
                        <tr>
                            <td>Three Nights</td>
                            <td>$ 600</td>
                            <td>$ 690</td>
                            <td>$ 780</td>
                        </tr>
                        <tr>
                            <td>Four Nights</td>
                            <td>$ 800</td>
                            <td>$ 920</td>
                            <td>$ 1040</td>
                        </tr>
                    </tbody>
                </table>

                <h6>*4.5% transaction fee to be added.</h6>
                <h6>** Please pay by Cash (USD) on-site if you (Delegate) choose to do onsite registration.</h6>
            </section>

            <div className="text-center my-5">
                <div class="index3-plan-btn text-center">
                    <div class="generic-btn">
                        <Link to="/:name/:id/online-registration">Proceed to Registration <i class="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <h6>PAYMENT OPTIONS</h6>
                <h6>Preferred mode of payment:</h6>
                <p>Credit Card Online – VISA / MasterCard / PayPal</p>

                <h6>Other payment options:</h6>
                <ul className='ml-4'>
                    <li>Onsite</li>
                    <li>Please refer to the invoice for detailed payment instructions</li>
                </ul>

                <h5>What do the registration fees include:</h5>
                <ul className='ml-4'>
                    <li>Access to all conference sessions</li>
                    <li>Conference material</li>
                    <li>Participation Certificate</li>
                    <li>Lunch on Conference Days</li>
                    <li>Awards Ceremony</li>
                    <li>Networking Event</li>
                    <li>Entrance to the Exhibition</li>
                    <li>Coffee Breaks during Conference Days</li>
                    <li>Wi-Fi During the Conference</li>
                </ul>

                <h5>Accommodation includes:</h5>
                <p>For delegates who reserved accommodation through conference website can avail following:</p>
                <ul className='ml-4 mb-5'>
                    <li>Complimentary Wi-Fi in the guest rooms</li>
                    <li>Complimentary Breakfast</li>
                </ul>
            </div>
            
        </main>
    )
}

export default RegistrationForm