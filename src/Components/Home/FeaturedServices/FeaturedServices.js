import React from 'react';
import child from '../../../doctor-portal-resource/images/child.png';
import './Featured.css';

const FeaturedServices = () => {
    return (
    <section>
        <div className="container featured_container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className=''>
                        <img className='img-fluid child_img' src={child } alt=''/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                    <div className='featured_text'>
                        <h1 className='pt-2'>Exceptional Dental <br/> Care, on Your Terms</h1>
                        <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolores, totam rem impedit ipsa dolorum vero dolor! Maxime distinctio, dolore autem, natus tempore asperiores totam repudiandae eos eaque provident voluptatem ipsa nulla voluptas non voluptatum suscipit officia dolorum placeat beatae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem atque nulla cumque ad voluptates recusandae rerum voluptate culpa nisi.</p>
                        <button className='btn btn-brand'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
     </section>
       
    );
};

export default FeaturedServices;