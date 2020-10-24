import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../doctor-portal-resource/images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
           <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256', fontSize:'50px'}}>Your Smile <br/> Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, corporis. Nemo necessitatibus magnam vero cupiditate?</p>
                <Link to='/appointment' className="btn btn-brand">GET APPOINTMENT</Link>
           </div>
           <div className="col-md-6">
               <img className='img-fluid' src={Chair} alt=""/>
           </div>
        </main>
    );
};

export default HeaderMain;