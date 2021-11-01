import React from 'react';
import { useRef } from 'react';

const AddBlog = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const writerRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();

    const handleAddBlog = e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const writer = writerRef.current.value;
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;

        const newBlog = { title, img, writer, date, description };
        fetch('https://holiday-turism.herokuapp.com/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added Blog')
                    e.target.reset();
                }
            })
    }
    return (
        <div className="container  m-5">
            <h3>Add a new Blog </h3>
            <form className="p-4" style={{ border: '2px solid lightgray', borderRadius: '10px', width: 'auto' }} onSubmit={handleAddBlog}>
                <div className="form-floating mb-3">
                    <input type="title" className="form-control" id="floatingInput" ref={titleRef} placeholder="Title" />
                    <label for="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="link" className="form-control" id="floatingInput" ref={imgRef} placeholder="Image" />
                    <label for="floatingInput">Image URL</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="value" className="form-control" id="floatingInput" ref={writerRef} placeholder="Price URL" />
                    <label for="floatingInput">Writer</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="value" className="form-control" id="floatingInput" ref={dateRef} placeholder="Price URL" />
                    <label for="floatingInput">Date</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" ref={descriptionRef} placeholder="Description" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Description</label>
                </div>
                <button type="submit" className="btn btn-warning m-4">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;