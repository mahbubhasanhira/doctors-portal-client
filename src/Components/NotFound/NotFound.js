import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPic from '../../doctor-portal-resource/images/404.png';

const NotFound = () => {
    return (
        <div style={{margin:'20px auto'}} className='container'>
            <h1 className='btn btn-brand'><Link className='text-dark' to='/'>Home</Link></h1>
            <img className='img-fluid' style={{margin:'20px 150px'}}  src={notFoundPic} alt=""/>
        </div>
    );
};

export default NotFound;