import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({testimonialData}) => {
    return (
        <div className='col-md-4 text-center'>
            <div className='card-container'>
                <p className='text-secondary'>{testimonialData.review}</p>
                <div className="row mt-5 d-flex align-items-center">
                    <div className='col-3 test-card-item'>
                        <img src={testimonialData.img} alt=""/>
                    </div>
                    <div className='col-7 test-card-item'>
                        <h5 className='text-green'>{testimonialData.name}</h5>
                        <h6 className='text-gray'>{testimonialData.address}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;