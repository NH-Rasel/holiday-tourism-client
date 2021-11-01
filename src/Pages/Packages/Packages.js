import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HorizontalGallery from 'react-dynamic-carousel'
import AllPackage from './AllPackage/AllPackage';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://holiday-turism.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id="packages" className="container mt-5 mb-5">
            <div>
                <h5 className="text-info fw-bolder"><u>Select Your Package</u></h5>
            </div>
            <HorizontalGallery
                tiles={
                    packages.map(allPackage => <AllPackage key={allPackage._id}
                        allPackage={allPackage}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></AllPackage>)
                }
                elementWidth={310}
                fadeDistance={50}
                minPadding={20}
            />
        </div>
    );
};

export default Packages;