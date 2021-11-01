import React from 'react';
import { Link } from 'react-router-dom';


const AllPackage = ({ allPackage }) => {
    const { _id, title, img, price } = allPackage;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title fw-bold"><i className="fas fa-map-marker-alt fs-5 text-info"></i> {title}</h4>
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

export default AllPackage;