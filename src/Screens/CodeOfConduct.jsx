import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';


const CodeOfConduct = () => {
  return (
    <>
    <div className='code-of-conduct-p'>
        <Header />
        <section className="sub-banner-main-section w-100 justify-content-center">
          <div className="sub-banner-inner-con text-center">
                      <h1>Code of Conduct</h1>
                      <p className='text-white'>Inspiring Talks, Meet the Best Product People Around the World, <br /> and Party Together After the Event!</p>
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb d-inline-block mb-0">
                              <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                              <li className="breadcrumb-item active d-inline-block" aria-current="page">code-of-conduct</li>
                          </ol>
                      </nav>
                  </div>
          </section>
          <section className='padding-top padding-bottom'>
              <div className='container'>
                 

                  <div> 
                  <p>The MEETINGS21 is dedicated to providing an environment free from discrimination, bullying, harassment or victimization, where all attendees are treated with respect and dignity aiming to create a culture of diversity where all are valued for their contribution and individuality.</p>
                      <p>This code applies to all attendees both in person or remotely.</p>
                      <ul className='ml-3 ml-lg-5 mt-4'>
                        <li>
                        All communications (both verbal and written) should be appropriate for a professional audience that includes a diverse range of background. Sexist or inappropriate language and imagery should not be used at any time during meetings, conference and events – including presentations and posters. The Organizing Committee and Management of MEETINGS21 will have the prerogative to withdraw talks, posters and social media post from the premises and on online platforms, if they are deemed to contravene this code.
                        </li>
                        <li>
                        Be kind to others and treat each other with respect. Do not insult or put down other attendees. Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate.
                        </li>
                        <li>
                        Individuals asked to stop any inappropriate behavior are expected to comply immediately. Any attendees violating this code, after due consideration, may be asked to leave the event at the sole discretion of the Organizing Committee and Management of MEETINGS21 without refund.
                        </li>
                        <li>
                        Any breach of this code should be brought to the attention of the MEETINGS21 organizers at the event, who will inform the Committee and Management with the person’s agreement. The Organizing Committee and Management will contact the people involved and try to reach a resolution of the breach. In case of incidents involving two parties, it will appoint two members who will act as contact and support for the two persons and will review the case, trying to find a suitable solution. If appropriate, the offender will be reported to the home institution.
                        </li>
                      </ul>
                  </div>
                  
              </div>
          </section>
        <Footer />
    </div>
   </>
  )
}

export default CodeOfConduct