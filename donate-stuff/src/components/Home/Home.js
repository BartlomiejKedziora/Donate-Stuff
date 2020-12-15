import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Orange from './Orange/Orange';
import FourSteps from './FourSteps/FourSteps';
import Receivers from "./Receivers/Receivers"

const Home = () => {
    return(
        <>
            <Navigation />
            <Banner />
            <Orange />
            <FourSteps />
            <AboutUs />
            <Receivers />
            <Contact />
            <Footer />
        </> 
    );
}

export default Home;