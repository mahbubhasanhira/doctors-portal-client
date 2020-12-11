import React from 'react';

const PatientsTable = ({allPatients}) => {
    return (
        <div className='table-responsive'>
            <table className="table table">
                <thead className='thead-light'>
                    <tr className='text-secondary'>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allPatients && 
                    allPatients.map((patients, index) => 
                        <tr>
                        <th scope="row">{index +1 }</th>
                        <td>{patients.name}</td>
                        <td>{patients.gender}</td>
                        <td>{patients.age}</td>
                        <td>{patients.weight}</td>
                        <td>{patients.phone}</td>
                        <td>{patients.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default PatientsTable;