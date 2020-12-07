import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import PatientsTable from '../PatientsTable/PatientsTable';

const Patients = () => {

    const [allPatients, setAllPatients] = useState([]);
    
    useEffect(() =>{
        fetch("http://localhost:4200/allPatients")
        .then(res => res.json())
        .then(data =>setAllPatients(data))
        .catch(error => console.log(error));
    },[]);



    return (
        <main style={{backgroundColor: "#F4FDFB"}}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-3">
                    <h3>Patients</h3>
                    <div className='mt-5 mr-5 p-5 bg-white'>
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