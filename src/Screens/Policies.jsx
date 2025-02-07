import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
const Policies = () => {
  return (
    <>
      <div className='policy-p'>
        <Header />
        <section className="sub-banner-main-section w-100 justify-content-center">
          <div className="sub-banner-inner-con text-center">
            <h1>Policies</h1>
            <p className='text-white'>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-inline-block mb-0">
                <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                <li className="breadcrumb-item active d-inline-block" aria-current="page">Policies</li>
              </ol>
            </nav>
          </div>
        </section>
        <section className='padding-top padding-bottom'>
          <div className='container'>
            <h4>Cancellation policy:</h4>

            <p>
              If a registrant is unable to attend conference, they may substitute, by arrangement with the conference organizer, someone else to attend the conference, or transfer their participation to another conference organized by Meetings21(within 15 months). If the aforementioned solutions are not applicable to the registrant, the following policies of cancellation and refund apply:
            </p>

            <div className='ml-3 ml-lg-5 mt-4'>
              <ul>
                <li>
                  Cancellation order placed before 90 days of the conference: Eligible for 50% of payment Refund.
                </li>
                <li>
                  Cancellation order placed within 90-60 days of Conference: Eligible for 40% of payment Refund.
                </li>
                <li>
                  Cancellation order placed within 60-30 days of Conference: Not eligible for refund but transferred to upcoming event
                </li>
                <li>
                  Cancellation order placed within 30 days of Conference: Neither eligible for refund, nor transferrable to future events
                </li>
                <li>
                  Refunds will be made only after the completion of the conference
                </li>
                <li>
                  All the accommodations booked through us can be transferred for next edition or will be refunded as per the policy.
                </li>
                <li>
                  Discounted accommodations can only be transferred for next edition.
                </li>
              </ul>
            </div>

            <div>
              <h4>Please note:</h4>
              <ul className='ml-3 ml-lg-5 mt-4'>
                <li>The cancellation and refund request must be made formally through email to contact@meetings21.com</li>
                <li>For “No-Show” without cancelation notice sent within the period specified in the policy, registration fee and accommodation are nonrefundable.</li>
                <li>All refunds will be processed only after the conference.</li>
              </ul>
            </div>

            <div>
              <h4>Transfer of Registration:</h4>
              <ul className='ml-3 ml-lg-5 mt-4'>
                <li>
                  All fully paid registrations are transferable to other persons from the same organization, if registered person is unable to attend the event.
                </li>
                <li>
                  Transfer of registration is applicable only 45 days prior to the conference.
                </li>
                <li>
                  Transfers must be made by the registered person in writing, to contact@meetings21.com
                </li>
                <li>
                  Details include the full name of replacement person, their title, contact phone number and email address.
                </li>
                <li>
                  All other registration details will be assigned to the new person unless and otherwise specified.
                </li>
              </ul>
            </div>

            <div>
              <h4>Personal Reason:</h4>
              <p className='ml-3 ml-lg-5 mt-4'>
                The Organizer cannot refund or pay any compensation where could not attend the conference is prevented by reason of circumstances which amount to “personal reason”. Such as travel difficulties, visa problems, health issues, financial default etc.
              </p>
            </div>

            <div>
              <h4>Terms and Conditions:</h4>
              <ul className='ml-3 ml-lg-5 mt-4'>
                <li>
                  Organizer is not responsible for any loss or damage as a result of substitution, alteration, postponement, or cancellation of an event due to causes beyond its control including without limitation, force majeure, natural disasters, sabotage, accident, pandemics, trade or industrial disputes, terrorism, or hostilities.
                </li>
                <li>
                  The organizer reserves the right to cancel or postpone the conference in case of any natural disasters, calamities or terrorism activity. In this case, organizer cannot accept refund requests from the conference delegates, speakers or attendees that result from cancelled flights and or natural disasters, calamities, pandemic, terrorism activity or any other restrictions imposed by the conference venue country. The organizer will provide opportunity for the registered delegates and attendees to transfer their registration fee and accommodation charges to any future or related conferences.
                </li>
                <li>
                  The organizer will not accept any liability for personal injuries or for loss or damage to property belonging to the delegates, either during, or as a result of the conference.
                </li>
                <li>
                  By registering for the conference, you hereby agree the policies, terms and conditions.
                </li>
                <li>
                  The organization reserves the right to make alterations to the program, date and/or venue at any time without prior notice.
                </li>
                <li>
                  Registrations remain valid for event with new dates or for future editions, if the conference has to be postponed by causes beyond organizer control. Refund policy is not applicable in this condition.
                </li>
                <li>
                  In the event of cancellation, the organization will use reasonable and suitable alternative arrangements such as posting the news of cancellation on the appropriate event website to alert those who have booked or purchased tickets to attend the event.
                </li>
                <li>
                  Delegates are responsible for checking this information prior to the event. We advised to keep checking the website for updates of our conference.
                </li>
              </ul>
            </div>


            <div className="row">
              <div className="col-lg-12">
                <h4>Photos, videos and audio recordings:</h4>
                <p>At Meetings21 events, photos, videos or audio recordings may be made for the purpose of public relations or marketing. By registering, you agree that such recordings may be made, used and published by the Meetings21 or its representatives, including on the Internet, in social media or in print media.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h4>Responsibility for submitted content:</h4>
                <p>Content submitted by participants may not infringe the intellectual property of third parties unless permission has been granted by the rights holder or the use is permitted by law. Participants are legally responsible for the content they submit.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Policies


