import React, { useState } from 'react'
import EventHeader from '../Header/EventHeader'
import { Link } from 'react-router-dom'


const RegistrationForm = () => {

    const [selectedPlans, setSelectedPlans] = useState([]);
    const [countNo, setCountNo] = useState(1);
    const [promoCode, setPromoCode] = useState(false);
    const [extraAccom, setExtraAccom] = useState(false);
    const [accompanying, setAccompanying] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [totalPrice, setTotalPrice] = useState(1099); // Base registration price
    // const [promoCode, setPromoCode] = useState(false); // Base registration price

    const incCount = () => {
        setCountNo(countNo + 1)
    }
    const decCount = () => {
        if (countNo > 1) {
            setCountNo(countNo - 1)
        }
    }

    const ExtraAccommodation = () => {
        setExtraAccom(true)
        if (extraAccom) {
            setExtraAccom(false)
        }
    }

    const plans = [
        {
            title: "Early Bird Registrations",
            date: "Before December 19, 2024",
            price: {
                Academic: 899,
                Industry: 999,
                Student: 699,
                Virtual: 399,
            },
            highlight: false,
        },
        {
            title: "Mid Term Registrations",
            date: "Before January 09, 2025",
            price: {
                Academic: 1099,
                Industry: 1199,
                Student: 749,
                Virtual: 499,
            },
            highlight: true,
        },
        {
            title: "Late Registrations",
            date: "After January 09, 2025",
            price: {
                Academic: 1299,
                Industry: 1399,
                Student: 799,
                Virtual: 599,
            },
            highlight: false,
        },
    ];

    const handleCheckboxChange = (index) => {
        setSelectedPlans((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };



    const rooms = [
        { id: "single", label: "Single Occupancy", price: 630 },
        { id: "double", label: "Double Occupancy", price: 720 },
    ];
    const handleRoomSelection = (roomPrice) => {
        setSelectedRoom(roomPrice);
        calculateTotalPrice(accompanying, roomPrice);
    };

    const handleAccompanyingChange = (change) => {
        const updatedCount = Math.max(0, accompanying + change);
        setAccompanying(updatedCount);
        calculateTotalPrice(updatedCount, selectedRoom);
    };

    const calculateTotalPrice = (accompanyingCount, roomPrice) => {
        const basePrice = 1099;
        const accompanyingCost = accompanyingCount * 200;
        const roomCost = roomPrice || 0;
        setTotalPrice(basePrice + accompanyingCost + roomCost);
    };

    const handlePromoCode = () => {
        setPromoCode(true)
        if (promoCode) {
            setPromoCode(false)
        }
    };

    const handleReset = () => {
        // setPromoCode("");
        setAccompanying(0);
        setSelectedRoom("");
        setTotalPrice(1099);
    };

    return (
        <main>
            <EventHeader />
            <section className="sub-banner-main-section w-100 justify-content-center">
                <div className="sub-banner-inner-con text-center">
                    <h1>Registration Form</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-block mb-0">
                            <li className="breadcrumb-item d-inline-block"><Link to="/">HOME</Link></li>
                            <li className="breadcrumb-item active d-inline-block" aria-current="page">Registration</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="container mt-5">
                <form className="p-4 border rounded shadow-sm mb-5">
                    <div className="form-section">
                        <div className="row">
                            <div className="col-2">
                                <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <select className="form-control" id="title">
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                        <option>Dr.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Telephone:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="organization">Organization:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fas fa-building"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="organization"
                                    placeholder="Organization/Institution"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-city"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder="Enter your city name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="country">Country:</label>
                                    <select className="form-control" id="country">
                                        <option>Select country</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="interested">Interested In:</label>
                            <select className="form-control" id="interested">
                                <option>Poster Presentation</option>
                                <option>Keynote Speech</option>
                                <option>Workshop</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="billing">Billing Address:</label>
                            <textarea
                                className="form-control"
                                id="billing"
                                rows="3"
                                placeholder="Enter your billing address"
                            ></textarea>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <div className="form-group">
                                    <label>Participants:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button onClick={decCount} className="btn btn-secondary" type="button">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={countNo}
                                            readOnly
                                        />
                                        <div className="input-group-append">
                                            <button onClick={incCount} className="btn btn-secondary" type="button">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* packages types start */}
                    <div className="my-5 regster-packages">
                        <div className="row">
                            {plans.map((plan, index) => (
                                <div className="col-md-4" key={index}>
                                    <div
                                        className={`card text-center ${plan.highlight ? "text-dark" : " text-dark"
                                            }`}
                                    >
                                        <div className="card-header bg-dark text-white">
                                            <h5 className="card-title">{plan.title}</h5>
                                            <p className="mb-0">{plan.date}</p>
                                            <small>Oral/ Poster/ Delegate</small>

                                            <div className='text-center'>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={selectedPlans.includes(index)}
                                                    onChange={() => handleCheckboxChange(index)}
                                                    style={{ height: '25px', width: '25px' }} />
                                                <br />
                                            </div>

                                        </div>
                                        <div className="card-body">
                                            {/* {plan.highlight && (
                                                <div className="text-center mb-3">
                                                    <i className="fas fa-check fa-2x text-primary"></i>
                                                </div>
                                            )} */}
                                            <div className="form-group">
                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" />
                                                        Academic
                                                    </span>

                                                    <span className="float-right text-danger font-weight-bold">
                                                        ${plan.price.Academic}
                                                    </span>
                                                </label>

                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" />
                                                        Industry
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                        ${plan.price.Industry}
                                                    </span>
                                                </label>

                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" />
                                                        Student
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                        ${plan.price.Student}
                                                    </span>
                                                </label>

                                                <label className="d-flex justify-content-between">
                                                    <span>
                                                        <input type="radio" name={`plan-${index}`} className="mr-2" />
                                                        Virtual
                                                    </span>
                                                    <span className="float-right text-danger font-weight-bold">
                                                        ${plan.price.Virtual}
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* packages types end */}

                    {/* acomidation start */}
                    <div className=" mt-5">
                        <div className="row">
                            {rooms.map((room) => (
                                <div className="col-md-4 mb-4" key={room.id}>
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            <h5>Accommodation</h5>
                                            <p>February 23 - 25, 2025</p>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong className='btn btn-link px-0' onClick={ExtraAccommodation}>
                                                    ${room.price} {room.label}
                                                </strong>
                                                <p>Breakfast included</p>
                                            </div>
                                            <button
                                                className={`btn ${selectedRoom === room.price ? "btn-primary" : "btn-outline-primary"
                                                    }`}
                                                onClick={() => handleRoomSelection(room.price)}
                                            >
                                                <i className="fas fa-bed"></i>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {
                            extraAccom ? <div className='card  mb-3' style={{ width: '350px' }}>
                                <div className="card-header bg-secondary text-white"><h6 className='tex'>Need Extra Nights Accommodation</h6></div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Extra Nights: </span>
                                        <span className='w-50'>
                                            <select className='form-control'>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Check-in Date:</span>
                                        <span className='w-50'>
                                            <input type="date" className='form-control' />
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-betwee mb-2'>
                                        <span className='w-50'>Check-out Date:</span>
                                        <span className='w-50'>
                                            <input type="date" className='form-control' />
                                        </span>
                                    </div>

                                </div>

                            </div> : ""
                        }

                        <div className=" bg-secondary text-white px-3 py-2 border mb-4" style={{ width: '300px' }}>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="promoCodeCheckbox"
                                    onChange={handlePromoCode}
                                />
                                <label className="form-check-label" htmlFor="promoCodeCheckbox">
                                    Have a promo code?
                                </label>
                            </div>
                        </div>
                        {
                            promoCode ? <div className='input-group mb-4' style={{ width: '300px' }}> <input type='text' className='form-control' /> <button className='btn btn-warning'>Apply</button> </div> : null
                        }

                        <div className="d-flex align-items-center mb-4">
                            <label className="mr-3">Accompanying (<b className='text-primary'>$200 for each person</b>):</label>

                            <div className="form-group" style={{ width: 150 }}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button onClick={decCount} className="btn btn-secondary" type="button">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={countNo}
                                        readOnly
                                    />
                                    <div className="input-group-append">
                                        <button onClick={incCount} className="btn btn-secondary" type="button">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <button
        className="btn btn-outline-secondary mr-2"
        onClick={() => handleAccompanyingChange(-1)}
    >
        -
    </button>
    <span>{accompanying}</span>
    <button
        className="btn btn-outline-secondary ml-2"
        onClick={() => handleAccompanyingChange(1)}
    >
        +
    </button> */}
                        </div>

                        <div className="card">
                            <div className="card-header bg-light">
                                <h5>SUMMARY</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Registration Price: $<b className='text-primary'>1099</b></p>
                                        <p>Accommodation: $<b className='text-primary'>{selectedRoom || 0}</b></p>
                                        {/* <p>Accompanying: $<b className='text-primary'>{accompanying * 200}</b></p> */}
                                    </div>
                                    <div className="col-md-6">
                                        <p>Participants: <b className='text-primary'>1</b></p>
                                        <p>Total No. Nights: <b className='text-primary'>0</b></p>
                                        <p>Accompanying: <b className='text-primary'>0</b></p>
                                    </div>
                                </div>

                                <hr />
                                <h5>Total Price: $<b className='text-primary'>{totalPrice}</b></h5>
                            </div>
                        </div>

                        <div className="card my-3">
                            <div className="card-body bg-light">
                                <div className="text-center mt-4">
                                    <h4>
                                        By clicking "pay", you agree to the privacy policy, terms & conditions and cancellation policy
                                    </h4>
                                    <div className="form-group">
                                        <label>Selected Price: $ (Inclusive of all taxes)</label>

                                        {/* <div className="input-group" style={{ width: '200px' }}>
                                            <label htmlFor="" className='btn btn-secondary'>$</label>
                                            <input
                                                type="text"
                                                className="form-control d-inline-block w-auto ml-2"
                                                value={totalPrice}
                                                readOnly
                                            />
                                        </div> */}
                                        <div class="input-group mb-3 mx-auto my-4" style={{ width: '300px' }}>
                                            <span class="input-group-text px-3" id="basic-addon1">$</span>
                                            <input type="text" value={totalPrice} class="form-control form-control-lg bg-white text-primary font-weight-bold" readOnly />
                                        </div>

                                    </div>
                                    <button className="btn btn-outline-secondary px-3 mr-3" onClick={handleReset}>
                                        Reset
                                    </button>
                                    <button className="btn btn-success px-5">Pay</button>
                                </div>
                            </div>
                        </div>

                        <div className="card my-3">
                            <div className="card-body bg-light">
                                <div className="registration-includes">
                                    <h5>Registration includes ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>Access to conference sessions, poster sessions, and panel discussion</li>
                                        <li>Conference material</li>
                                        <li>Access to all the conference rooms</li>
                                        <li>Access to Conference Recording</li>
                                        <li>E-Copy of the Abstract Book</li>
                                        <li>Participation E-Certificate (if opted)</li>
                                        <li>Access to video conference platform for one year</li>
                                        <li>Conference app</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card my-3">
                            <div className="card-body bg-light">
                                <div className="policies-section">
                                    <h5>Registration Cancellation Policy ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>Cancellation policy is strictly followed and all cancellations must be made in writing.</li>
                                        <li>Cancellation before 120 days of the conference start date will receive a full refund, less a $200 towards the administrative fee.</li>
                                        <li>Cancellation before 90 days of the conference start date will receive a 50% refund.</li>
                                        <li>Cancellations received below 90 days of the conference start date are non-refundable and can only be transferred to the next edition.</li>
                                        <li>Discounted registrations can only be transferred for the next edition or can opt for a Credit Shell.</li>
                                        <li>Refunds will be made within 60 days of receipt of cancellation notification.</li>
                                    </ul>

                                    <h5>Accommodation Policy ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>All the accommodations booked through us can be transferred for the next edition or will be refunded as per the policy.</li>
                                        <li>Discounted accommodations can only be transferred for the next edition.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="disaster-policy-section">
                                    <h5>Cancellation Policy in the Events of Natural Disasters or Unpredictable Activity ↓</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            Organizer is not responsible for any loss or damage as a result of substitution, alteration,
                                            postponement, or cancellation of an event due to causes beyond its control including without
                                            limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes,
                                            terrorism, or hostilities.
                                        </li>
                                        <li>
                                            The organizer reserves the right to cancel or postpone the conference in case of any natural disasters,
                                            calamities, or terrorism activity. In this case, the organizer cannot accept refund requests from the
                                            conference delegates, speakers, or attendees that result from canceled flights and/or natural disasters,
                                            calamities, terrorism activity.
                                        </li>
                                        <li>
                                            The organizer will provide the opportunity for the registered delegates and attendees to transfer
                                            their registration fee and accommodation charges to any future or related conferences.
                                        </li>
                                        <li>
                                            The organizer will not accept any liability for personal injuries or for loss or damage to property
                                            belonging to the delegates, either during or as a result of the conference.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* acomidation end */}

                </form>
            </div>
        </main>
    )
}

export default RegistrationForm