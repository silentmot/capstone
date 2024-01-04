import React from 'react';
import offer1 from './asset/offer1.png'; // Adjust the path as necessary
import offer2 from './asset/offer2.png'; // Adjust the path as necessary
import offer3 from './asset/offer3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// Adjust the path as necessary

const HomePage = () => {
    return (
        <main className="container mt-4">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={offer1} className="d-block w-100 rounded" alt="Offer 1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={offer2} className="d-block w-100 rounded" alt="Offer 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={offer3} className="d-block w-100 rounded" alt="Offer 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
        </main>
    );
};

export default HomePage;
