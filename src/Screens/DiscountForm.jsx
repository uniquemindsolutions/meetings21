import React, { useState } from 'react'
import EventHeader from '../Header/EventHeader'


const DiscountForm = () => {

  const [selectedPlans, setSelectedPlans] = useState([]);
  const [countNo, setCountNo] = useState(1);
  const [promoCode, setPromoCode] = useState(false);
  const [extraAccom, setExtraAccom] = useState(false);
  const [accompanying, setAccompanying] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [processingFee, setProcessingFee] = useState(10); // Base registration price
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
    { id: "triple", label: "Triple Occupancy", price: 810 },
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
      {/* new form start */}
      <div className="container">
        <form className="p-4 border rounded shadow-sm mb-5">
          <div className="form-section">
            <h5>Personal Details</h5>
            <div className="row">
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <select className="form-control" id="title">
                    <option>Prof.</option>
                    <option>Dr.</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
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

            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="billing">Billing Address:</label>
                  <textarea
                    className="form-control"
                    id="billing"
                    rows="3"
                    placeholder="Enter your billing address"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="billing">Write Description :</label>
                  <textarea
                    className="form-control"
                    id="billing"
                    rows="3"
                    placeholder="10% Discount on registration fee"
                  ></textarea>
                </div>
              </div>

              <div className="col-sm-4 mb-4">
                <label htmlFor="">Enter Amount</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa-solid fa-dollar-sign"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
            </div>



            <div className="card">
              <div className="card-header bg-light">
                <h5>SUMMARY</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><span style={{ width: '350px', display: 'inline-block' }}>Registration Price:</span> $<b className='text-primary'>1099</b></p>
                    
                  </div>

                </div>

                <hr />
                <h5>Sub-Total : $<b className='text-primary'>{totalPrice}</b></h5>
                <hr />
                <h5>Processing Fee(5%) : $<b className='text-primary'>10</b></h5>
                <hr />
                <h5>Grand Total : $<b className='text-primary'>{totalPrice}</b></h5>
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
                    <div class="input-group mb-3 mx-auto my-4" style={{ width: '300px' }}>
                      <span class="input-group-text px-3" id="basic-addon1">$</span>
                      <input type="text" value={totalPrice} class="form-control form-control-lg bg-white text-primary font-weight-bold" readOnly />
                    </div>
                  </div>

                  <div className="text-center">
                    <label htmlFor="option1" className='mr-5'>
                      <input type="radio" name="option" id='option1'
                        value="option2" className='mr-3' />
                      <img src={process.env.PUBLIC_URL + 'images/cc-avenue_logo.png'} alt="logo" style={{ width: 150 }} />
                    </label>

                    <label htmlFor="option2">
                      <input type="radio" name="option" id='option2'
                        value="option2" className='mr-3' />
                      <img src={process.env.PUBLIC_URL + 'images/paypal-logo.png'} alt="logo" style={{ width: 150 }} />
                    </label>
                  </div>

                  <button className="btn btn-outline-secondary px-3 mr-3" onClick={handleReset}>
                    Reset
                  </button>
                  <button className="btn btn-success px-5">Pay</button>
                </div>
              </div>
            </div>
          </div>




        </form>
      </div>
      {/* new form end */}
    </main>
  )
}

export default DiscountForm