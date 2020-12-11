import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import PatientsTable from '../PatientsTable/PatientsTable';

const Patients = () => {
    const {isDoctor ,loggedInUser} = useContext(UserContext);
    const [allPatients, setAllPatients] = useState([]);
    
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
        .then(data =>setAllPatients(data))
        .catch(error => console.log(error));
        }
    },[]);



    return (
        <main style={{backgroundColor: "#F4FDFB"}}>
            <div className="row">
                <div className="col-md-2 sidebar">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-3">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3>Patients</h3>
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
                    <div className='mt-5 d_right bg-white'>
                        <div className="d-flex mb-3  justify-content-between">
                            <h5 className='text-brand'>All Patients</h5>
                            <p className='mr-5'>Week</p>
                        </div>
                        <div>
                            <PatientsTable allPatients={allPatients}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Patients;