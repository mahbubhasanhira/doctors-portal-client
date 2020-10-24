import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'

const BookingCard = ({date, bookingData}) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3 ">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{bookingData.doctors_categories}</h5>
                    <h6>{bookingData.appointment_time}</h6>
                    <p>{bookingData.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={() => setModalShow(true)} className='btn btn-brand'>BOOK APPOINTMENT</button>
                </div>
            </div>
            <AppointmentForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                bookingData={bookingData}
                date={date}
            />
        </div>
    );
};

export default BookingCard;