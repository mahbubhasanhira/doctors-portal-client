import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [isDoctor, setIsDoctor] = useState(false);


useEffect(() =>{
    fetch("http://localhost:4200/isDoctors", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                setIsDoctor(data);
            }
        })
        .catch(error => console.log(error));
},[])

    return (
        <div className='sidebar d-flex align-content-between  flex-wrap'>
            <div className='list_container'>
                <ul>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/'>Home</Link>
                    </li>
                    <li className='dashboard_list'>
                        <Link className="dashboard_link" to='/dashboard/appointment'>Appointment</Link>
                    </li>
                    {
                        isDoctor &&
                        <div>
                            <li className='dashboard_list'>
                                <Link className="dashboard_link" to='/dashboard/dashboard'>Dashboard</Link>
                            </li>
                            <li className='dashboard_list'>
                                <Link className="dashboard_link" to='/dashboard/patients'>Patients</Link>
                            </li>
                            <li className='dashboard_list'>
                                <Link className="dashboard_link" to='/dashboard/prescriptions'>Prescriptions</Link>
                            </li>
                            <li className='dashboard_list'>
                                <Link className="dashboard_link" to='/dashboard/addDoctor'>Add Doctors</Link>
                            </li>
                            <li className='dashboard_list'>
                                <Link className="dashboard_link" to='/dashboard/setting'>Setting</Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
            <div className="log_out dashboard_list">
                <Link className='dashboard_link'>Log Out</Link>
            </div>
        </div>
    );
};

export default Sidebar;