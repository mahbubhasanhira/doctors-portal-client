import React, { useState } from 'react';
import Footer from '../../Common/Footer/Footer/Footer';
import Navbar from '../../Common/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate ] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader date={selectedDate} handleDateChange={handleDateChange}/>
            <BookingAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;