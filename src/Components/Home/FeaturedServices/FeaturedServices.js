import React from 'react';
import child from '../../../doctor-portal-resource/images/child.png';

const FeaturedServices = () => {
    return (
        <section>
        <div className="row ml-auto mr-auto mt-5 pt-5 w-75">
          <div className="col-md-5 pt-1">
              <img className='img-fluid' src={child } alt=''/>
          </div>
          <div className="col-md-6 pl-3 pt-3">
              <h1 className='pt-2'>Exceptional Dental <br/> Care, on Your Terms</h1>
              <p className='pt-4 pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolores, totam rem impedit ipsa dolorum vero dolor! Maxime distinctio, dolore autem, natus tempore asperiores totam repudiandae eos eaque provident voluptatem ipsa nulla voluptas non voluptatum suscipit officia dolorum placeat beatae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem atque nulla cumque ad voluptates recusandae rerum voluptate culpa nisi.</p>
              <button className='btn btn-brand'>Learn More</button>
          </div>
        </div>
     </section>
       
    );
};

export default FeaturedServices;