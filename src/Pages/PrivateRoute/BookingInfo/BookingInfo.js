import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const BookingInfo = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://holiday-turism.herokuapp.com/user', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('Successfully added booking')
                    reset();
                }
            })
    };
    return (
        <div className="container m-2 m-lg-5">
            <form className="p-1 p-lg-5" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <input {...register("title")} type="text" id="disabledTextInput" class="form-control" placeholder="Package Name" />
                </div>
                <div class="mb-3">
                    <input {...register("price")} type="number" id="disabledTextInput" class="form-control" placeholder="Price" />
                </div>

                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default BookingInfo;