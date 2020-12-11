import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import AddDoctorsForm from '../AddDoctorsForm/AddDoctorsForm';
import './AddDoctors.css'

const AddDoctors = () => {
    const {loggedInUser} = useContext(UserContext);
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
                <div className='mt-5 bg-white d_right'>
                    <div className="d-flex mb-3  justify-content-between">
                        <h5 className='text-brand'>Add Doctors</h5>
                        <p className='mr-5'>Week</p>
                    </div>
                    <div>
                        <AddDoctorsForm/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default AddDoctors;