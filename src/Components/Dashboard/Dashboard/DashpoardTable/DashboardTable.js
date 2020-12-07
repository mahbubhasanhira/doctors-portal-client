import React from 'react';

const DashboardTable = ({todayAppointment}) => {
    return (
        <div>
             { 
                todayAppointment.length > 0 ?
             <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                       { todayAppointment.map((patients, index) => 
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{patients.appointmentDate}</td>
                                <td>{patients.name}</td>
                                <td>{patients.name}</td>
                                <td>{patients.phone}</td>
                                <td><button className='pt-0 pb-0 btn btn-brand'>view</button></td>
                                <td><button className='pt-0 pb-0 btn btn-brand'>Pending</button></td>
                            </tr>)
                        }
                </tbody>
            </table>
            :
            <h3 className='p-5'>There is No Appointment Today</h3>
        }
        </div>
    );
};

export default DashboardTable;