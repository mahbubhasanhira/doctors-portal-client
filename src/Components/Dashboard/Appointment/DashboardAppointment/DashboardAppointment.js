import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashboardAppointment.css';

const DashboardAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [selectedDate, setSelectedDate ] = useState(new Date());

    const handleDateChanged = date => {
        setSelectedDate(date);
    }

    const convertedToDateString = selectedDate.toDateString();
    
    useEffect(() =>{
        fetch("http://localhost:4200/appointmentsByDate", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
            body:JSON.stringify({convertedToDateString})
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                setAppointment(data);
            }
        })
        .catch(error => console.log(error));
    },[convertedToDateString])

    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pt-3">
                    <h2>Appointments</h2>
                    <div className="row mt-5">
                        <div className="col-md-5 d_board_div_container">
                            <Calendar className='react_calender'
                                onChange={handleDateChanged}
                                value={selectedDate}
                            />
                        </div>
                        <div className="col-md-5 d_board_div_container">
                            <AppointmentByDate selectedDate={selectedDate} appointment={appointment}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardAppointment;