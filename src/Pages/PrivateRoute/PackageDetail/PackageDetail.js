import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PackageDetail = () => {
    const { packageId } = useParams();
    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch(`https://holiday-turism.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackages(data));

    }, []);


    return (
        <div style={{ border: '2px solid lightgray', borderRadius: '10px' }} className="container d-lg-flex align-items-center justify-content-between m-lg-4 p-2 p-lg-3">
            <div className="text-start">
                <h2><i className="fas fa-map-marker-alt fs-4 me-2 text-info"></i>{packages.title}</h2>
                <p>{packages.description}</p>
                <h4 className="fw-bold">${packages.price}/per person  |  3day/4 night</h4>
                <Link to="/bookingInfo"><button className="btn btn-warning">Book Now</button></Link>
            </div>
            <img style={{ borderRadius: '10px' }} src={packages.img} alt="" />
        </div>
    );
};

export default PackageDetail;