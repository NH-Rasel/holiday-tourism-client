import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="banner" id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="img-fluid" src="https://i.ibb.co/tH3mxTJ/beach-1.png" class="d-block w-100" alt="..." />
                    <div className="banner-text">
                        <h4>Search the best place for spending holidays</h4>
                        <button>Book Now</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="img-fluid" src="https://i.ibb.co/Y7vG5zB/adventure-1.png" class="d-block w-100" alt="..." />
                    <div className="banner-text">
                        <h4 className="text-info">Adventure with us. Find your best adventure place and travel with your partner</h4>
                        <button>Book Now</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="img-fluid" src="https://i.ibb.co/s3gMp4v/city-1.png" class="d-block w-100" alt="..." />
                    <div className="banner-text">
                        <h4 className="text-light">Book hotel in your desire city at the best value</h4>
                        <button>Book Now</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="img-fluid" src="https://i.ibb.co/Dz0XLST/ticket-1.png" class="d-block w-100" alt="..." />
                    <div className="banner-text">
                        <h4>Book your tickets right now through <span className="text-danger">HOLIDAY TOURISM</span></h4>
                        <button>Book Tickets</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Home;