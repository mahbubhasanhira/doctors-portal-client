import React from 'react';
import doctor from '../../../doctor-portal-resource/images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='appointment-container'>
            <div className="container">
                <div className="row ml-auto mr-auto mt-5 pt-5 w-75">
                    <div className="col-md-5 d-none d-md-block">
                        <img className='img-fluid' src={doctor} alt=''/>
                    </div>
                    <div className="col-md-7 pl-5 text-white">
                        <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                        <h1 className='pt-2'>Make an appointment <br/> Today</h1>
                        <p className='mt-3 mb-3'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, atque?</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
            </div>
            </div>
     </section>
    );
};

export default MakeAppointment;