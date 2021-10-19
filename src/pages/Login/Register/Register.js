import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
import { useHistory, useLocation } from 'react-router'

const Register = () => {
    const { user, loginWithUseingGoogle, setName, createNewUser, setUser, setError, setUserName } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.from || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get value of input fields
    const handleTypeName = e => {
        setName(e.target.value)
    }
    const handleTypeEmail = e => {
        setEmail(e.target.value)
    }
    const handleTypePassword = e => {
        setPassword(e.target.value)
    }

    // manually registration system
    const handleToRegister = e => {
        e.preventDefault();
        createNewUser(email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message)
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
    console.log(user)

    return (
        <div className="login-form">
            <h1>Create New Account</h1>
            <div>
                <form onSubmit={handleToRegister}>
                    <input className="login-input" type="text" id="" placeholder="Enter your name" onBlur={handleTypeName} />
                    <br />
                    <input className="login-input" type="email" name="email" id="" placeholder="Enter email" onBlur={handleTypeEmail} />
                    <br />
                    <input className="login-input" type="password" name="password" id="" placeholder="Enter password" onBlur={handleTypePassword} />
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