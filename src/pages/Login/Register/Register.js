import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
import { useHistory, useLocation } from 'react-router'

const Register = () => {
    const { user, loginWithUseingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleToRegister = () => {

    }

    const handleGoogleLogin = () => {
        loginWithUseingGoogle()

    }
    console.log(user)

    return (
        <div className="login-form">
            <h1>Create New Account</h1>
            <div>
                <form onSubmit={handleToRegister}>
                    <input className="login-input" type="text" id="" placeholder="Enter your name" />
                    <br />
                    <input className="login-input" type="email" name="email" id="" placeholder="Enter email" />
                    <br />
                    <input className="login-input" type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input className="login-input" type="password" name="re-password" id="" placeholder="Enter re-password" />
                    <br />
                    <input className="login-btn" type="submit" value="Register" />
                </form>

                <div>---------------- or ---------------</div>
                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <button onClick={handleGoogleLogin} className="login-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;