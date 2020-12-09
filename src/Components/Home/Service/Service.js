import React from 'react';
import flouride from '../../../doctor-portal-resource/images/flouride.png';
import cavity from '../../../doctor-portal-resource/images/cavity.png';
import Whitening from '../../../doctor-portal-resource/images/whitening.png';
import ServiceDetail from '../serviceDetail/ServiceDetail';
import './Service.css'
const Service = () => {

const serviceData =[
    {
        name:'Fluoride Treatment',
        img:flouride,
    },
    {
        name:'Cavity Filling',
        img:cavity,
    },
    {
        name:'Teeth Whitening',
        img:Whitening,
    },
]

    return (
        <section className='service-container'>
            <div className='text-center'>
                <h4 className='text-green'>Our Services</h4>
                <h1>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <div className='w-75 row mt-5'>
                    {
                        serviceData.map(service=> <ServiceDetail service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;