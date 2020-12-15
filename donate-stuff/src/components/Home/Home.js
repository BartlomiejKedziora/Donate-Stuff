import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return(
        <>
            <Navigation />
            <Banner />
            <AboutUs />
            <Contact />
            <Footer />
        </> 
    );
}

export default Home;