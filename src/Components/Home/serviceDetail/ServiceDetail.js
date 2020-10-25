import React from 'react';
import './ServicesDetail.css';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center services_card'>
            <img src={service.img} alt=""/>
            <h5 className='mt-4 mb-4'>{service.name}</h5>
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis aspernatur eius sunt necessitatibus!</p>
        </div>
    );
};

export default ServiceDetail;