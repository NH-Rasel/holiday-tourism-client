import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PackageDetail = () => {
    const { user } = useAuth();
    const { packageId } = useParams();
    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackages(data));

    }, []);

    const handleBooking = () => {
        const booking = user;
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        });
    }


    return (
        <div style={{ border: '2px solid lightgray', borderRadius: '10px' }} className="container d-lg-flex align-items-center justify-content-between m-4 p-3">
            <div className="text-start">
                <h2><i className="fas fa-map-marker-alt fs-4 me-2 text-info"></i>{packages.title}</h2>
                <p>{packages.description}</p>
                <h4 className="fw-bold">${packages.price}/per person  |  3day/4 night</h4>
                <button onClick={() => handleBooking(packages._id)} className="btn btn-warning">Book Now</button>
            </div>
            <img style={{ borderRadius: '10px' }} src={packages.img} alt="" />
        </div>
    );
};

export default PackageDetail;