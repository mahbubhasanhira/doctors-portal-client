import React from 'react';
import facebook from '../../../../../doctor-portal-resource/logo/facebook.png';
import google from '../../../../../doctor-portal-resource/logo/google.png';
import twitter from '../../../../../doctor-portal-resource/logo/twitter.png';

const FColumn4 = () => {
    return (
        <div className='f_menu'>
            <h3 className='text-green mb-3'>Our Address</h3>
            <ul>
                <li>
                    <a href="#">New York - 101010 Hudson <br/> Yards</a>
                </li>
                <li className='mt-3 mb-5'>
                    <a href=""><img className='footer_img' src={facebook} alt=""/></a>
                    <a href=""><img className='footer_img' src={google} alt=""/></a>
                    <a href=""><img className='footer_img' src={twitter} alt=""/></a>
                </li>
                <li>
                    <a href="#">Call Now</a><br/>
                    <button className='btn btn-brand text-white'>+202552485</button>
                </li>
            </ul>
        </div>
    );
};

export default FColumn4;