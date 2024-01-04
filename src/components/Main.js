import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpecialsPage from './pages/SpecialsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

const Main = () => {
    return (
        <div className='Main text-align: center'>
            <h1>Little Lemon Restaurant</h1>
            <p>Little Lemon is a small, family-owned restaurant in the heart of the city. We serve delicious food with a smile.</p>


            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="Specials" element={<SpecialsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/booking" element={<BookingPage />} />

            </Routes>
        </div>
    );
}

export default Main;
