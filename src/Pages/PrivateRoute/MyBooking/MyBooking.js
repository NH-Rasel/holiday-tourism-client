import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const MyBooking = () => {
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
            <h2 className="fw-bold m-4">My Booking History</h2>
            {
                user?.map(users => <div key={users._id}
                    style={{ backgroundColor: 'lightgray', border: '1px solid aquamarine', borderRadius: '10px', margin: '10px', padding: '10px' }}
                >
                    <h5>Package: <span className="fw-bold">{users.title}</span></h5>
                    <p>Price: ${users.price}</p>
                    <p>Booking date: {users.date}</p>
                    <button onClick={() => handleDeleteBooking(users._id)} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                </div>)
            }
        </div>
    );
};

export default MyBooking;
