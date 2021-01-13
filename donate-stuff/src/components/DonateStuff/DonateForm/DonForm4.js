import React, { useState } from 'react';

const DonForm4 = ({change, values}) => {

    const [state, setState] = useState(values);

    const handleChange = ({ target: { value, name } }) => {
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleBack = (e) => {
        change({...state, step: +state.step - 1})
    }
    
    const handleForward = (e) => {
        change({...state, step: +state.step + 1})
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
                            <input className="donForm4-form-input" type="text" name="ulica" onChange={handleChange} value={state.ulica} /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Miasto</label>
                            <input className="donForm4-form-input" type="text" name="miasto" onChange={handleChange} value={state.miasto} /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Kod<br></br> pocztowy</label>
                            <input className="donForm4-form-input" type="text" name="kod" onChange={handleChange} value={state.kod} /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Numer<br></br> telefonu</label>
                            <input className="donForm4-form-input" type="text" name="tel" onChange={handleChange} value={state.tel} /> 
                        </div>
                    </div>
                    <div className="donForm4-form-right">
                        <p className="donForm4-form-right-title">Termin odbioru:</p>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Data</label>
                            <input className="donForm4-form-input" type="text" name="dataOdbioru" onChange={handleChange} value={state.dataOdbioru} /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Godzina</label>
                            <input className="donForm4-form-input" type="text" name="godzOdbioru" onChange={handleChange} value={state.godzOdbioru} /> 
                        </div>
                        <div className="donForm4-form-item">
                            <label className="donForm4-form-label">Uwagi<br></br> dla kuriera</label>
                            <textarea className="donForm4-form-input" type="text" name="uwagi" onChange={handleChange} value={state.uwagi} /> 
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