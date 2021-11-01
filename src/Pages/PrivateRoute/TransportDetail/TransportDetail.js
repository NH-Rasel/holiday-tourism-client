import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";

const TransportDetail = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="container m-5">
            <form className="p-4" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} action="">
                <div className="form-floating">
                    <select className="form-select mb-3" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Select your vehicles</option>
                        <option value="1">Bus</option>
                        <option value="2">Airline</option>
                        <option value="3">Cruise</option>
                        <option value="3">Train</option>
                    </select>
                    <label for="floatingSelect">Choose a option</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="PickUp" />
                    <label for="floatingPassword">From</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Destination" />
                    <label for="floatingPassword">To</label>
                </div>
                <div className="text-start">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                    <button className="btn btn-warning mt-3">Book ticket</button>
                </div>
            </form>
        </div>
    );
};

export default TransportDetail;