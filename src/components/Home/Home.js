import React from 'react';
import Card from '../Card/Card';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div id="home" >
            <TopHeader/>
            <Service/>
            <Card/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;