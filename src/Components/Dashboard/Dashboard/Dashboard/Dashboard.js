import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <main>
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <h1>This is Dashboard</h1>
            </div>
        </div>
    </main>
    );
};

export default Dashboard;