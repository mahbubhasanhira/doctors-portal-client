import React from 'react';
import './DashboardCard.css'

const DashboardCard = ({todayAppointment, allPatients}) => {
    const pending = todayAppointment.filter(appointment => appointment.Status === "Not Visited");
    const visited = todayAppointment.filter(appointment => appointment.Status === "Visited");

    return (
        <div className="row mr-5 ml-1 mt-5">
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_red d_b_status_card">
                    <h1 className='p-2'>{pending.length < 10 && pending.length !== 0 ? `0${pending.length}` : pending.length}</h1>
                    <h6>Pending Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_blue d_b_status_card">
                    <h1 className='p-2'>{todayAppointment.length < 10 && todayAppointment.length !== 0 ? `0${todayAppointment.length}` : todayAppointment.length}</h1>
                    <h6>Todays Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center bg_color_green d_b_status_card">
                    <h1 className='p-2'>{visited.length < 10 && visited.length !== 0 ? `0${visited.length}` : visited.length}</h1>
                    <h6>Visited Appointments</h6>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="d-flex align-items-center text-center bg_color_orange d_b_status_card">
                    <div className='ml-auto mr-auto'>
                        <h6>Love From</h6>
                        <h4>Mahbub Hasan</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;