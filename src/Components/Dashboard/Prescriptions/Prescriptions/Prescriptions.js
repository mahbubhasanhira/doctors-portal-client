import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';

const Prescriptions = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <h1>This is Prescriptions</h1>
                </div>
            </div>
        </main>
    );
};

export default Prescriptions;