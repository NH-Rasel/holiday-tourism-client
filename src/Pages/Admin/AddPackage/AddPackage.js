import React from 'react';
import { useRef } from 'react';

const AddPackage = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleAddPackage = e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newPackage = { title, img, price, description };
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added package')
                    e.target.reset();
                }
            })
    }

    return (
        <div className="container  m-5">
            <h3>Add a new package </h3>
            <form className="p-4" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} onSubmit={handleAddPackage}>
                <div class="form-floating mb-3">
                    <input type="title" class="form-control" id="floatingInput" ref={titleRef} placeholder="Title" />
                    <label for="floatingInput">Title</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="link" class="form-control" id="floatingInput" ref={imgRef} placeholder="Image" />
                    <label for="floatingInput">Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="value" class="form-control" id="floatingInput" ref={priceRef} placeholder="Price URL" />
                    <label for="floatingInput">Price URL</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" ref={descriptionRef} placeholder="Description" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Description</label>
                </div>
                <button type="submit" className="btn btn-warning m-4">Add Package</button>
            </form>
        </div>
    );
};

export default AddPackage;