import React from 'react';
import quote from '../../../doctor-portal-resource/images/quote.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import img1 from '../../../doctor-portal-resource/images/Ellipse 1.png'
import img2 from '../../../doctor-portal-resource/images/Ellipse 2.png'
import img3 from '../../../doctor-portal-resource/images/Ellipse 3.png'

const Testimonial = () => {
    const testimonialData = [
        {
            name:'Winson Herry',
            address:'California',
            img:img1,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
        {
            name:'Winson Herry',
            address:'California',
            img:img2,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
        {
            name:'Winson Herry',
            address:'California',
            img:img3,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
    ]
    return (
        <section className='mt-5 pt-5 mb-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
                        <h1 className='pt-2'>What's Our Patients <br/> Says</h1>
                    </div>
                    <div className="col-md-6 d-flex">
                        <img  className='ml-auto' style={{width:'200px', height:'150px', objectFit:'cover', objectPosition:'center'}} src={quote} alt=""/>
                    </div>
                </div>
                <div className=' d-flex justify-content-center'>
                    <div className='row pt-5'>
                        {
                            testimonialData.map(data=> <TestimonialCard testimonialData={data}/>)
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;