import React from 'react';
import Footer from '../../Common/Footer/Footer/Footer';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <FeaturedServices/>
            <MakeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctor/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;    