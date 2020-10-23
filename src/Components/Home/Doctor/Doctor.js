import React from 'react';
import './Doctor.css';
import doctor from '../../../doctor-portal-resource/images/doctor Copy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <section className='mb-5 pb-5'>
            <h4 style={{color:'#1CC7C1', textAlign:"center"}}>Our Doctors</h4>
            <div className='container d-flex justify-content-center'>
                <div className='row pt-5'>
                    <div className='col-md-4 text-center'>
                        <img className='img-fluid' src={doctor} alt=""/>
                        <h5 className='mt-3'>Dr. Caudi</h5>
                        <p><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} />+123456789</p>
                    </div>
                    <div className='col-md-4 text-center'>
                        <img className='img-fluid' src={doctor} alt=""/>
                        <h5 className='mt-3'>Dr. Caudi</h5>
                        <p><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} />+123456789</p>
                    </div>
                    <div className='col-md-4 text-center'>
                        <img className='img-fluid' src={doctor} alt=""/>
                        <h5 className='mt-3'>Dr. Caudi</h5>
                        <p><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} />+123456789</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctor;