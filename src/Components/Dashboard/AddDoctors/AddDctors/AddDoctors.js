import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import AddDoctorsForm from '../AddDoctorsForm/AddDoctorsForm';
import './AddDoctors.css'

const AddDoctors = () => {
    return (
        <main style={{backgroundColor: "#F4FDFB"}}>
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10 p-3">
                <h3>Add Doctor</h3>
                <div className='mt-5 mr-5 p-5 bg-white'>
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