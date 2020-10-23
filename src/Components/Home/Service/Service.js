import React from 'react';
import flouride from '../../../doctor-portal-resource/images/flouride.png';
import cavity from '../../../doctor-portal-resource/images/cavity.png';
import Whitening from '../../../doctor-portal-resource/images/whitening.png';
import ServiceDetail from '../serviceDetail/ServiceDetail';

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
        <section className='service-container mt-5'>
            <div className='text-center'>
                <h4 style={{color:'#1CC7C1'}}>Our Services</h4>
                <h1>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                        serviceData.map(service=> <ServiceDetail service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;