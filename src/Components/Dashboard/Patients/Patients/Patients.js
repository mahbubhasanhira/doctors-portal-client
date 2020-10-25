import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';

const Patients = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <h1>This is Patients</h1>
                </div>
            </div>
        </main>
    );
};

export default Patients;