import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://holiday-turism.herokuapp.com/packages/${userId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default MyBooking;
