import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


const CompletedEvents = () => {
  return (
    <main>
        <Header/>
        <section className="sub-banner-main-section w-100 justify-content-center">
          <div className="sub-banner-inner-con text-center">
            <h1>Completed Meetings</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-inline-block mb-0">
                <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                <li className="breadcrumb-item active d-inline-block" aria-current="page">Completed Mettings</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className='container padding-top'>
            <h4>No Completed Meetings Yet</h4>
        </section>
    </main>
  )
}

export default CompletedEvents