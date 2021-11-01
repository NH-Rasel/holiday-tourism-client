import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const BookingInfo = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://holiday-turism.herokuapp.com/user', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added booking')
                    reset();
                }
            })
    };
    return (
        <div className="container m-2 m-lg-5">
            <form className="p-1 p-lg-5" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} onSubmit={handleSubmit(onSubmit)}>
                <div class="form-floating mb-3">
                    <input {...register("email")} type="text" class="form-control" placeholder="Your Email" />
                    <label for="floatingTextarea">Your Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input {...register("date")} type="text" id="floatingTextarea" class="form-control" placeholder="dd/mm/yy" />
                    <label for="floatingTextarea">dd/mm/yy</label>
                </div>
                <div class="form-floating mb-3">
                    <input {...register("title")} type="text" id="floatingTextarea" class="form-control"
                        placeholder="Package Title" />
                    <label for="floatingTextarea">Package Title</label>
                </div>
                <div class="form-floating mb-3">
                    <input {...register("price")} type="number" id="floatingTextarea" class="form-control" placeholder="Price" />
                    <label for="floatingTextarea">Price</label>
                </div>
                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default BookingInfo;