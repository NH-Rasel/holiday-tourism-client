import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import './Destination.css';

const Destinations = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="container">
            <form className="row row-cols-lg-auto  align-items-center input-field">
                <div className="col-12 col-lg-3">
                    <label className="visually-hidden" for="specificSizeInputName">Name</label>
                    <i className="fas fa-map-marker-alt fs-3"></i>
                    <input type="text" className="form-control" id="specificSizeInputName" placeholder="Where to.." />
                </div>
                <div className="col-12 col-lg-3">
                    <i className="fas fa-calendar-alt fs-3"></i>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                    <i className="fas fa-users fs-3"></i>
                    <select className="form-select" id="inlineFormSelectPref">
                        <option selected>Guests</option>
                        <option value="1">1 room 1 guest</option>
                        <option value="2">1 room 2 guests</option>
                        <option value="3">2 room 4 guests</option>
                    </select>
                </div>
                <div className="col-12 col-lg-3">
                    <button type="submit" className="btn btn-warning"><i class="fas fa-search"></i>Find Now</button>
                </div>
            </form>


        </div>
    );
};

export default Destinations;