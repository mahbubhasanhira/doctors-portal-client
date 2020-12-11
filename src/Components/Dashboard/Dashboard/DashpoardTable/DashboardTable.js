import React from 'react';

const DashboardTable = ({todayAppointment}) => {
    return (
        <div className='table-responsive'>
            { 
                todayAppointment.length > 0 ?
                    <table className="table table-borderless">
                        <thead>
                            <tr className='border-bottom'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { todayAppointment.map((patients, index) => 
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{patients.appointmentDate}</td>
                                        <td>{patients.name}</td>
                                        <td>{patients.gender}</td>
                                        <td>{patients.age}</td>
                                        <td>{patients.phone}</td>
                                        <td><button className={patients.Status === 'Visited' ? 'bg_color_green visited rounded' : ' action_status bg_color_red rounded'}>{patients.Status}</button></td>
                                    </tr>)
                                }
                        </tbody>
                    </table>
                :
                <h3 className='p-5'>There is No Appointment Today.</h3>
            }
        </div>
    );
};

export default DashboardTable;