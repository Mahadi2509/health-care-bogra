import React from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
import './View.css';

const View = () => {
    const { services } = useService();
    const { serviceId } = useParams();

    const selectedService = services.find(service => service.id == serviceId);
    console.log(selectedService)
    return (
        <div>

        </div>
    );
};

export default View;