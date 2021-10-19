import React from 'react';
import './Header.css';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const history = useHistory();
    const { user, logOut } = useAuth();

    const handleLogIn = () => {
        history.push('/login');
    }
    const handleLogOut = () => {
        logOut();
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
            <div className="d-flex align-items-center">
                {
                    user?.email && <p className="mt-3 text-white">{user?.displayName}</p>
                }
                {
                    user?.email ? <a onClick={handleLogOut} className="log-btn">Log Out</a> :
                        <a onClick={handleLogIn} className="log-btn">Log In / Register</a>
                }
            </div>
        </div>
    );
};

export default Header;