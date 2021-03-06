import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooking = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://holiday-turism.herokuapp.com/user`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    //Delete a booking
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Confirm Delete?')
        if (proceed) {
            fetch(`https://holiday-turism.herokuapp.com/user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingBooking = user.filter(users => users._id !== id);
                        setUser(remainingBooking);
                    }
                })
        }

    }

    return (
        <div className="container m-5">
            <h2 className="fw-bold m-4">Manage All Booking</h2>
            {
                user?.map(users => <div key={users._id}
                    style={{ backgroundColor: 'lightgray', border: '1px solid aquamarine', borderRadius: '10px', margin: '10px', padding: '10px' }}
                >
                    <h5>Package: <span className="fw-bold">{users.title}</span></h5>
                    <p>Price: ${users.price}</p>
                    <p>Status: {users.status}</p>
                    <p>Booking date: {users.date}</p>
                    <Link to={`/updateBooking/${users._id}`}><button className="btn btn-warning me-3"><i className="fas fa-sync-alt"></i></button></Link>
                    <button onClick={() => handleDeleteBooking(users._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                </div>)
            }
        </div>
    );
};

export default ManageBooking;