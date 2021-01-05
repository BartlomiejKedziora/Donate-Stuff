import React, { useState } from 'react';
import DonForm1 from './DonForm1';
import DonForm2 from './DonForm2';
import DonForm3 from './DonForm3';
import DonForm4 from './DonForm4';
import DonFormSummary from './DonFormSummary';
import DonFormThx from './DonFormThx';



const DonateForm = () => {

    return(
        <>
            <section id="donate-form" className="donate-form container">
                {/* <DonForm1 /> */}
                {/* <DonForm2 /> */}
                {/* <DonForm3 /> */}
                {/* <DonForm4 /> */}
                {/* <DonFormSummary /> */}
                <DonFormThx />
            </section>
        </>
    );
}

export default DonateForm;