import React from 'react';
import doctor from '../../../../doctor-portal-resource/images/doctor Copy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorsCard = () => {
    return (
        <div className='col-md-4 text-center'>
            <img className='img-fluid' src={doctor} alt=""/>
            <h5 className='mt-3'>Dr. Caudi</h5>
            <p><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} />+123456789</p>
        </div>
    );
};

export default DoctorsCard;