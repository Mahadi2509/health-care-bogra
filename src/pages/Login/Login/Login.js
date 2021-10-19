import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router'

const Login = () => {
    const { loginWithUseingGoogle, loginUser, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.from || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get value of input fields
    const handleTypeEmail = e => {
        setEmail(e.target.value)
    }
    const handleTypePassword = e => {
        setPassword(e.target.value)
    }

    // manually login process
    const handleToLogIn = e => {
        e.preventDefault();
        loginUser(email, password)
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })

    }


    // sign in with google
    const handleGoogleLogin = () => {
        loginWithUseingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleToLogIn}>
                    <input className="login-input" type="email" name="email" id="" placeholder="Enter email" onBlur={handleTypeEmail} />
                    <br />
                    <input className="login-input" type="password" name="password" id="" placeholder="Enter password" onBlur={handleTypePassword} />
                    <br />
                    <input className="login-btn" type="submit" value="Login" />
                </form>

                <div>---------------- or ---------------</div>
                <div>
                    <p>You have no account? <Link to="/register">Create account</Link></p>
                    <button onClick={handleGoogleLogin} className="login-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;