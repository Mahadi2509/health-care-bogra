import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, discription } = service;
    const history = useHistory();

    const handleFullDetails = () => {
        history.push(`/viwe/${id}`)
    }

    return (
        <Card className="service-card">
            <Card.Img height="200px" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {discription.slice(0, 100)}
                </Card.Text>
                <Button onClick={handleFullDetails} className="detail-btn">Full Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;