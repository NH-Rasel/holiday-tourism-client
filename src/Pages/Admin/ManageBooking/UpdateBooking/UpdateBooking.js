import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateBooking = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `https://holiday-turism.herokuapp.com/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updatedStatus = { status: updateStatus }
        setUser(updatedStatus);
    }

    const handleUpdateBooking = e => {
        const url = `https://holiday-turism.herokuapp.com/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    setUser({});
                }
            })
        e.preventDefault()

    }

    return (
        <div className="container m-2 m-lg-5">
            <h3>Update Booking Status</h3>
            <form className="p-1 p-lg-5" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} onSubmit={handleUpdateBooking}>
                <input className="form-control mb-3" type="text" value={user.email} readOnly aria-label="default input example" />
                <input className="form-control mb-3" type="text" value={user.title} readOnly aria-label="default input example" />
                <input onChange={handleStatusChange} className="form-control mb-3" type="text" value={user.status || ''} aria-label="default input example" />
                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default UpdateBooking;