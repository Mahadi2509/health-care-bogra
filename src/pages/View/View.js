import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './View.css';

const View = () => {
    const serviceId = useParams();

    console.log(serviceId)

    return (
        <div style={{ height: '400px' }}>

        </div>
    );
};

export default View;