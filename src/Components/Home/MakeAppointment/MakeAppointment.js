import React from 'react';
import doctor from '../../../doctor-portal-resource/images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='appointment-container'>
            <div className="container">
                <div className="row ml-auto mr-auto mt-5 pt-5 w-100">
                    <div className="col-lg-6 col-sm-12 col-md-6 d-none d-md-block">
                        <img className='img-fluid doc_img' src={doctor} alt=''/>
                    </div>
                    <div className="col-lg-6 col-sm12 col-md-6 text-white make_appointment_text">
                        <div>
                            <h5 className='text-green'>APPOINTMENT</h5>
                            <h1 className='pt-2'>Make an appointment <br/> Today</h1>
                            <p className='mt-3 mb-3'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, atque?</p>
                            <button className='btn btn-brand'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
     </section>
    );
};

export default MakeAppointment;