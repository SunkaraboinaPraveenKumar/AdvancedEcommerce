import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom';
const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("Visa");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };
    //direct to home page
    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname||"/"
    const handleOrderConfirm=()=>{
        alert("Your Order is Placed Sucessfully");
        localStorage.removeItem("cart");
        navigate(from,{replace:true})
    }
    return (
        <div className='modalCard'>
            <button variant="primary" className='py-2 lab-btn' onClick={handleShow}>Proceed to CheckOut</button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            href="#visa"
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls='visa'
                                            aria-selected={activeTab === 'visa'}
                                            onClick={() => handleTabChange("visa")}
                                        >
                                            <img
                                                src="https://imgs.search.brave.com/dBtcA2GZb4W3ce7lW72TpdM1jP-d_NgwWkoNTssL1B8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzLzc4N19t/YXN0ZXJjYXJkLmpw/Zw"
                                                alt="" style={{ width: '30%' }} />
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            href="#paypal"
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls='paypal'
                                            aria-selected={activeTab === 'paypal'}
                                            onClick={() => handleTabChange("paypal")}
                                        >
                                            <img
                                                src="https://imgs.search.brave.com/ur2fKXbUSQTBNo_HFOuGspk3cYJYqyDuC9d74GDb5FI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvUGF5UGFsLUxv/Z28tNTAweDI4MS5w/bmc"
                                                alt="" style={{ width: '30%',
                                                    paddingTop:'10px'
                                                 }} />
                                        </a>
                                    </li>
                                </ul>
                                {/* contents */}
                                <div className='tab-content' id='myTabContent'>
                                    {/* visa content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id="visa"
                                        role="tabpanel"
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="text" name="name" id="name" className='form-control' required />
                                                    <span>Card Holder Name</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name="number"
                                                        id="number" className='form-control' required
                                                    />
                                                    <span>Card Number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row gap-2'>
                                                    <div className='inputbox'>
                                                        <input type="number" name="date" id="date" className='form-control' required />
                                                        <span>Expiry Date</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type="number" name="name" id="name" className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id="paypal"
                                        role="tabpanel"
                                        aria-labelledby='paypal-tab'
                                    >
                                        {/* paypal tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Pay Pal Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="email" name="name" id="name" className='form-control' required />
                                                    <span>Email your Email</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name="number"
                                                        id="number" className='form-control' required
                                                    />
                                                    <span>Enter Your Name</span>
                                                </div>
                                                <div className='d-flex flex-row gap-2'>
                                                    <div className='inputbox'>
                                                        <input type="number" name="date" id="date" className='form-control' required />
                                                        <span>Extra info</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add PayPal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Payment Disclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'>
                                    <em>Payment Disclaimer: </em>
                                    In no event shall payment or partial payment
                                    by Owner for any material or service
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CheckOutPage;
