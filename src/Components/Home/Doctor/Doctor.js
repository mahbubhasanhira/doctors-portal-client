import React, { useEffect, useState } from 'react';
import './Doctor.css';
import doctor from '../../../doctor-portal-resource/images/doctor Copy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import DoctorsCard from './DoctorsCard/DoctorsCard';

const Doctor = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        fetch("http://localhost:4200/getallDoctors")
        .then(res => res.json())
        .then(doctors =>{
            if(doctors){
                setDoctors(doctors);
                console.log(doctors);
            }
        })
        .catch(error => console.log(error));
    },[])

    return (
        <section className='mb-5 pb-5'>
            <h4 style={{color:'#1CC7C1', textAlign:"center"}}>Our Doctors</h4>
            <div className='container d-flex justify-content-center'>
                <div className='row pt-5'>
                    {
                        doctors.map( doctor => <DoctorsCard doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;