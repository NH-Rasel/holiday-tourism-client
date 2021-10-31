import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const { userId } = useParams();
    const [users, setUsers] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${userId}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container">
            <h3>{userId}</h3>
            <ul>Name: {users.displayName}</ul>
        </div>
    );
};

export default MyBooking;