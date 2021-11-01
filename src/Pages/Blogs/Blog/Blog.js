import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, img, writer, date } = blog;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p><i className="fas fa-calendar-alt pe-2 fs-6 text-info"></i>{date}</p>
                    <h4 className="card-title fw-bold"> {title}</h4>
                    <div className="d-flex justify-content-between py-2">
                    </div>
                    <h6 className="fw-bold"><i className="far fa-user-circle fw-bold px-2 fs-5 text-info"></i><small>Writer: </small>{writer}</h6>
                    <Link to={`/packageDetails/${_id}`}><button className="btn btn-warning">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;