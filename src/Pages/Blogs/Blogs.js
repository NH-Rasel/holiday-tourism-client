import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HorizontalGallery from 'react-dynamic-carousel';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://holiday-turism.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div id="blogs" className="container mt-5 mb-5">
            <div>
                <h3 className="text-info fw-bolder my-4"><u>Latest Blog</u></h3>
            </div>
            <HorizontalGallery
                tiles={
                    blogs.map(blog => <Blog key={blog._id}
                        blog={blog}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></Blog>)
                }
                elementWidth={310}
                fadeDistance={50}
                minPadding={20}
            />
        </div>
    );
};

export default Blogs;