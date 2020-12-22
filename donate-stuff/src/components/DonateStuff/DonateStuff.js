import React from 'react';
import DonateNavigation from './DonateNavigation/DonateNavigation';
import DonateBanner from './DonateBanner/DonateBanner';
import DonateOrange from './DonateOrange/DonateOrange';
import DonateForm from './DonateForm/DonateForm';
import Contact from './../Home/Contact/Contact';
import Footer from './../Home/Footer/Footer';

const DonateStuff = () => {
    return(
        <>
            <DonateNavigation />
            <DonateBanner />
            <DonateOrange />
            <DonateForm />
            <Contact />
            <Footer />
        </> 
    );
}

export default DonateStuff;