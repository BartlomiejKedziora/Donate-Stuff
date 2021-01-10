import React, { useState } from 'react';
import DonForm1 from './DonForm1';
import DonForm2 from './DonForm2';
import DonForm3 from './DonForm3';
import DonForm4 from './DonForm4';
import DonFormSummary from './DonFormSummary';
import DonFormThx from './DonFormThx';



const DonateForm = () => {

    const [pageNumber, setPageNumber] = useState({step:1});

    const handleChange = (values) => {
        setPageNumber(prev => ({
            ...prev,
            ...values
        }))
    }

    const getForm = () => {
        switch (pageNumber.step) {
            case 1: 
                return <DonForm1 change={handleChange} values={pageNumber} />
            case 2: 
                return <DonForm2 change={handleChange} values={pageNumber} />
            case 3: 
                return <DonForm3 change={handleChange} values={pageNumber} />
            case 4: 
                return <DonForm4 change={handleChange} values={pageNumber} />
            case 5: 
                return <DonFormSummary change={handleChange} values={pageNumber} />
            case 6: 
                return <DonFormThx change={handleChange} values={pageNumber} />
            default:
                return <div />
        }
    }

    return(
        <>
            <section id="donate-form" className="donate-form container">
                {getForm()}
            </section>
        </>
    );
}

export default DonateForm;