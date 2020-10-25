import React from 'react';
import './AppointmentByDate.css'

const AppointmentByDate = ({appointment, selectedDate}) => {
    return (
       <div>
           <div className='d-flex justify-content-between'>
                <h4 className='text-brand'>Appointment</h4>
                <p>{selectedDate.toDateString()}</p>
           </div>
           <div>
            {    appointment.length > 0 ?
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointment.map(data =>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>
                                            <select className='action_status'>
                                                <option>Not visited</option>
                                                <option>Visited</option>
                                            </select>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    :
                    <h2 className='text-center mt-5 pt-5'>No Appointment Today</h2>
                }
           </div>
       </div>
    );
};

export default AppointmentByDate;