import React, { useEffect, useState } from 'react';
import './DashboardCard.css'

const DashboardCard = ({todayAppointment}) => {


    const [allPatients, setAllPatients] = useState([]);
    
    useEffect(() =>{
        fetch("http://localhost:4200/allPatients")
        .then(res => res.json())
        .then(data =>setAllPatients(data))
        .catch(error => console.log(error));
    },[]);



    return (
        <div className="row mr-5 ml-1 mt-5">
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_red d_b_status_card">
                    <h1 className='p-2'>50</h1>
                    <h6 className=''>Pending Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_blue d_b_status_card">
                    <h1 className='p-2'>{todayAppointment.length > 0 && todayAppointment.length}</h1>
                    <h6 className=''>Todays Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_green d_b_status_card">
                    <h1 className='p-2'>{allPatients.length > 0 && allPatients.length}</h1>
                    <h6 className=''>Total Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_orange d_b_status_card">
                    <h1 className='p-2'>{allPatients.length > 0 && allPatients.length}</h1>
                    <h6 className=''>Total Patients</h6>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;