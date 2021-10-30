import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Packages></Packages>
        </div>
    );
};

export default Home;