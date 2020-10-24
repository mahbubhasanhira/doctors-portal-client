import React from 'react';
import Chair from '../../../doctor-portal-resource/images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange, date}) => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256', fontSize:'50px'}}>APPOINTMENT</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                />
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={Chair} alt=""/>
            </div>
        </main>
    );
};

export default AppointmentHeader;