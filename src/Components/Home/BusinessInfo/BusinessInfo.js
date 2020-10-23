import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {

const infos = [
    {
        title:'Opening Hours',
        description:'We are open 24 hour',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit Our location',
        description:'Brokhy, NY 10036, United state ',
        icon:faMapMarkerAlt,
        background:'dark'
    },
    {
        title:'Contact us now',
        description:'+123456789',
        icon:faPhoneAlt,
        background:'primary'
    },
]

    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
                {
                    infos.map(info=> <InfoCard info={info}/>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;