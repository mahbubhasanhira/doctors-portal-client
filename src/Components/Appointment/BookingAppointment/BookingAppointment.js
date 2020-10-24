import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingAppointment = ({date}) => {

const bookingData = [
    {
      id: 1,
      doctors_categories: 'Teeth Orthodontics',
      appointment_time: '8.00AM - 9.00AM',
      totalSpace: 10
    },
    {
      id: 2,
      doctors_categories: 'Cosmetic Dentistry',
      appointment_time: '10.05AM - 11.30AM',
      totalSpace: 10
    },
    {
      id: 3,
      doctors_categories: 'Teeth Cleaning',
      appointment_time: '5.00PM - 6.30PM',
      totalSpace: 10
    },
    {
      id: 4,
      doctors_categories: 'Cavity Protection',
      appointment_time: '7.00AM - 8.30AM',
      totalSpace: 10
    },
    {
      id: 5,
      doctors_categories: 'Teeth Orthodontics',
      appointment_time: '8.00AM - 9.00AM',
      totalSpace: 10
    },
    {
      id: 6,
      doctors_categories: 'Teeth Orthodontics',
      appointment_time: '8.00AM - 9.00AM',
      totalSpace: 10
    }
  ]

    return (
      <section>
          <h1 style={{color:'#1CC7C1'}} className='text-center mb-5 pb-5'>Available Appointments On {date.toDateString()}</h1>
          <div className="row ml-5 mr-5">
            {
                bookingData.map(data => <BookingCard key={data.id} date={date} bookingData={data}/>)
            }
          </div>
      </section>
    );
};

export default BookingAppointment;