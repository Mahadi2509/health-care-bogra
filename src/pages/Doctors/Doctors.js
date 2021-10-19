import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
    return (
        <div>
            <h1>Our Expert Doctor's</h1>
            <div className="doctors-container">
                {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
            </div>
        </div>
    );
};

export default Doctors;