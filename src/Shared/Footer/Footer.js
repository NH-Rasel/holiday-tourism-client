import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-lg-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col">
                        <h4 className="fw-bold text-info">Subscribe to our newsletter</h4>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-warning" type="button" id="button-addon2">Button</button>
                        </div>
                        <div className="mt-3">
                            <h4 className="fw-bold text-info">Follow Us</h4>
                            <div>
                                <a href="https://www.facebook.com/"><i style={{ fontSize: '30px', color: 'orange' }} className="fab fa-facebook m-3"></i></a>
                                <a href="https://www.instagram.com/"><i style={{ fontSize: '30px', color: 'orange' }} className="fab fa-instagram m-3"></i></a>
                                <a href="https://twitter.com"><i style={{ fontSize: '30px', color: 'orange' }} className="fab fa-twitter m-3"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="fw-bold text-info">Contact Us</h4>
                        <div className="d-flex justify-content-center align-items-center ms-lg-5">
                            <i style={{ fontSize: '20px', color: 'orange' }} className="fas fa-envelope-open-text me-3"></i>
                            <div className="lh-1 mt-3 text-start text-white">
                                <p>info@holiday_tourism.com</p><p>support@holiday_tourism.com</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <i style={{ fontSize: '20px', color: 'orange' }} className="fas fa-location-arrow me-3"></i>
                            <div className="lh-1 mt-3 text-start text-white">
                                <p>
                                    2752, Willison Street
                                </p>
                                <p>Eagan, United State</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="fw-bold text-info">We Accepts</h4>
                        <div>
                            <i style={{ fontSize: '40px', color: 'white' }} className="fab fa-cc-visa m-2"></i>
                            <i style={{ fontSize: '40px', color: 'white' }} className="fab fa-cc-mastercard m-2"></i><br />
                            <i style={{ fontSize: '40px', color: 'white' }} className="fab fa-cc-paypal m-2"></i>
                            <i style={{ fontSize: '40px', color: 'white' }} className="fab fa-cc-discover m-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;