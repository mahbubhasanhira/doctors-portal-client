import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar d-flex align-content-between  flex-wrap'>
            <div className='list_container'>
                <ul>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/dashboard'>Dashboard</Link>
                    </li>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/appointment'>Appointment</Link>
                    </li>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/patients'>Patients</Link>
                    </li>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/prescriptions'>Prescriptions</Link>
                    </li>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/setting'>Setting</Link>
                    </li>
                </ul>
            </div>
            <div className="log_out dashboard_list">
                <Link className='dashboard_link'>Log Out</Link>
            </div>
        </div>
    );
};

export default Sidebar;