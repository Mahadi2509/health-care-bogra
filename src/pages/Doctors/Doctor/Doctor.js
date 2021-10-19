import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, img, gender } = doctor;

    return (
        <div className="doctor">
            <img src={img} alt="doctors photo" />
            <h3>{name}</h3>
            <p>{gender}</p>
        </div>
    );
};

export default Doctor;