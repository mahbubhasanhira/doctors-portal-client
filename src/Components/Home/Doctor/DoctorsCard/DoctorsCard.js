import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorsCard = ({doctor}) => {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 text-center'>
           <div className='ml-3 mr-3'>
                <div className="card border-0">
                    <img className="card-img-top" src={doctor.image} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className='mt-3'>{doctor.name}</h5>
                        <p className='text-secondary'><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} />{doctor.phone}</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default DoctorsCard;