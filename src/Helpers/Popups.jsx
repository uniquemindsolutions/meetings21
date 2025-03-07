import React from 'react'


const Popups = ({ isOpen, onClose, children, RefId }) => {
    if (!isOpen) return null;
    return (
        <main>
            <div className="container">
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center p-4">
                                <button onClick={onClose} className="btn btn-danger float-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                    </svg>
                                </button>
                                <br />
                                <br />
                                <br />
                                <img src={process.env.PUBLIC_URL + "/images/success-img.png"} className="img-fluid mb-3" alt="success img" width="100" />
                                <h2>Your payment was <span className="text-success">successful</span> </h2>
                                <p>Thank you for your payment. <br /> We will be in contact with more details shortly</p>
                                {/* <h5>Here is Your reference ID:</h5>
                                <h4 className="text-primary">{RefId}</h4> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </main>
    )
}

export default Popups