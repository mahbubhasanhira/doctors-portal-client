import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import DashboardCard from '../DashboardCard/DashboardCard';
import DashboardTable from '../DashpoardTable/DashboardTable';

const Dashboard = () => {
const {loggedInUser, isDoctor} = useContext(UserContext);
const [todayAppointment, setTodayAppointment] = useState([]);
const [allPatients, setAllPatients] = useState([]);

const latestDate = new Date().toDateString();

    useEffect(() =>{
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(isDoctor && userInfo){
        fetch(`https://doctors-portal-101.herokuapp.com/allPatients?email=${userInfo.email}`,{
            method:'GET',
            headers:{
                "Content-Type": "application/json",
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data =>{
            const  latestAppoint = data.filter(appointment => appointment.appointmentDate === latestDate);
            setTodayAppointment(latestAppoint);
            setAllPatients(data);
        })
        .catch(error => console.log(error));
        }
    },[]);

    return (
        <main style={{backgroundColor: "#F4FDFB"}}>
            <div className="row">
                <div className="col-md-2 sidebar">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pt-3">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3>Dashboard</h3>
                        </div>
                        <div className='user_photo'>
                            {
                                loggedInUser.photo ? 
                                    <img className='rounded-circle border border-info' src={loggedInUser.photo} alt=""/>
                                : 
                                <>
                                    { loggedInUser.name &&  <h1 className='bg-info rounded-circle p-1 mr-5'>{loggedInUser.name.slice(0,1)}</h1>}
                                </>
                            }
                        </div>
                    </div>
                    <DashboardCard todayAppointment={todayAppointment} allPatients={allPatients}/>
                    <div className="bg-white d_right">
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