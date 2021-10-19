import React from 'react';
import './Header.css';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();

    const handleLogIn = () => {
        history.push('/login');
    }
    const handleLogOut = () => {

    }

    return (
        <div className="header-container">
            <div className="logo">
                <a href="/home"><img src={logo} alt="website logo" /></a>
                <h2>Health Care Bogra</h2>
            </div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/doctors">Doctor's</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div>
                <button onClick={handleLogIn} className="log-btn">Log In</button>
                <button onClick={handleLogOut} className="log-btn">Log Out</button>
            </div>
        </div>
    );
};

export default Header;