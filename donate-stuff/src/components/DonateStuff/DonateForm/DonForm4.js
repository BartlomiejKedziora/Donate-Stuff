import React, { useState } from 'react';

const DonForm4 = ({change, values}) => {

    const [pageNumber, setPageNumber] = useState(values);

    const handleBack = (e) => {
        change({...pageNumber, step: +pageNumber.step - 1})
    }
    
    const handleForward = (e) => {
        change({...pageNumber, step: +pageNumber.step + 1})
    }

    return(
        <>
            <div className="donForm4">
                <p className="donate-form-steps">Krok 4/4</p>
                <h2 className="donForm1-title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <form className="donForm4-form">
                    <div className="donForm4-form-left">
                        <p className="donForm4-form-left-title">Adres odbioru:</p>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Ulica</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Miasto</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Kod<br></br> pocztowy</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Numer<br></br> telefonu</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                    </div>
                    <div className="donForm4-form-right">
                        <p className="donForm4-form-right-title">Termin odbioru:</p>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Data</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Godzina</label>
                            <input className="donForm4-form-input" type="text" /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Uwagi<br></br> dla kuriera</label>
                            <textarea className="donForm4-form-input" type="text" /> 
                        </div>
                    </div>
                    <div className="donForm4-form-right"></div>
                </form>
                <div className="donate-form-nav">
                    <span className="donForm1-btn" onClick={handleBack}>Wstecz</span>
                    <span className="donForm1-btn" onClick={handleForward}>Dalej</span>
                </div>
            </div>
        </>
    );
}

export default DonForm4;