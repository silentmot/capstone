import React from 'react';
import logo from '../img/f16.svg';
import '../App.css';





const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <h1>Welcome to the Capstone Project!</h1>
        </header>
    );
}

export default Header;
