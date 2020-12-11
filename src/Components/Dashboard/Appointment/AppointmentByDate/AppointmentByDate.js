import React from 'react';
import './AppointmentByDate.css'
import TableRow from './TableRow/TableRow';

const AppointmentByDate = ({appointment, selectedDate}) => {

    return (
       <div className='div_for_mobile'>
           <div className='d-flex justify-content-between'>
                <h4 className='text-brand'>Appointment</h4>
                <p>{selectedDate.toDateString()}</p>
           </div>
           <div>
            {    appointment.length > 0 ?
                        <table className="table table-borderless">
                            <thead>
                                <tr className='text-secondary'>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {    appointment.length > 0 &&
                                    appointment.map(data => <TableRow key={data._id} data={data}/>)
                                }
                            </tbody>
                        </table>
                    :
                    <h3 className='text-center mt-5 pt-5'>No Appointment For This Date</h3>
                }
           </div>
       </div>
    );
};

export default AppointmentByDate;