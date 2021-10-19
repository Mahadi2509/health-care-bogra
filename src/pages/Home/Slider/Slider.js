import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import slider1 from '../../../images/slider/slider1.png';
import slider2 from '../../../images/slider/slider2.png';
import slider3 from '../../../images/slider/slider3.png';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="slider-img"
                    src={slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slider-img"
                    src={slider2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slider-img"
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;