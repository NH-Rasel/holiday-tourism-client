import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Packages from '../Packages/Packages';
import Transport from '../Transport/Transport';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Packages></Packages>
            <Transport></Transport>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;