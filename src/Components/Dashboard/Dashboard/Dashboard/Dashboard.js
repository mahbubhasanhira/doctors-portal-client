import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import DashboardCard from '../DashboardCard/DashboardCard';
import DashboardTable from '../DashpoardTable/DashboardTable';

const Dashboard = () => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [todayAppointment, setTodayAppointment] = useState([]);

    const convertedToDateString = new Date().toDateString();

    useEffect(() =>{
        fetch("http://localhost:4200/appointmentsByDate", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
            body:JSON.stringify({convertedToDateString, email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                setTodayAppointment(data);
            }
        })
        .catch(error => console.log(error));
    },[convertedToDateString])

    return (
        <main style={{backgroundColor: "#F4FDFB"}}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pt-3">
                    <h3>Dashboard</h3>
                    <DashboardCard todayAppointment={todayAppointment}/>
                    <div className="bg-white mt-5 mr-5 p-5">
                        <div className="d-flex  justify-content-between">
                            <h5 className='text-brand'>Recent Appointments</h5>
                            <p className='mr-5'>Week</p>
                        </div>
                        <div>
                            <DashboardTable todayAppointment={todayAppointment}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;