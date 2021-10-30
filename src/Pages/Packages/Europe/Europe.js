import React from 'react';
import { Link } from 'react-router-dom';


const Europe = ({ europe }) => {
    const { _id, title, img, price } = europe;
    return (
        <div>
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title fw-bold"><i className="fas fa-map-marker-alt fs-5 text-info"></i> {title}</h4>
                    <div className="d-flex justify-content-between py-2">
                        <h6 className="fw-bold">${price}/per person</h6>
                        <h6 className="fw-bold">3 day/4 night</h6>
                    </div>
                    <Link to={`/packageDetails/${_id}`}><button className="btn btn-warning">See details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Europe;