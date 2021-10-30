import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HorizontalGallery from 'react-dynamic-carousel'
import Europe from './Europe/Europe';
import Asia from './Asia/Asia';
import America from './America/America';

const Packages = () => {
    const [europePack, setEuropePack] = useState([]);
    const [asiaPack, setAsiaPack] = useState([]);
    const [americaPack, setAmericaPack] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/europe')
            .then(res => res.json())
            .then(data => setEuropePack(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/asia')
            .then(res => res.json())
            .then(data => setAsiaPack(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/america')
            .then(res => res.json())
            .then(data => setAmericaPack(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div>
                <h5 className="text-info fw-bolder"><u>Select Your Package</u></h5>
            </div>
            <div id="europe">
                <h3 className="text-warning fw-bold my-4">--Europe--</h3>
            </div>
            <HorizontalGallery
                tiles={
                    europePack.map(europe => <Europe key={europe._id}
                        europe={europe}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></Europe>)
                }
                elementWidth={310}
                fadeDistance={50}
                minPadding={20}
            />
            <div id="asia">
                <h3 className="text-warning fw-bold my-4">--Asia--</h3>
            </div>
            <HorizontalGallery
                tiles={
                    asiaPack.map(asia => <Asia key={asia._id}
                        asia={asia}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></Asia>)
                }
                elementWidth={310}
                fadeDistance={50}
                minPadding={20}
            />
            <div id="america">
                <h3 className="text-warning fw-bold my-4">--America--</h3>
            </div>
            <HorizontalGallery
                tiles={
                    americaPack.map(america => <America key={america._id}
                        america={america}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 350,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    ></America>)
                }
                elementWidth={310}
                fadeDistance={50}
                minPadding={20}
            />
        </div>
    );
};

export default Packages;