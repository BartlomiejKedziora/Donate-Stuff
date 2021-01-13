import React, { useState } from 'react';

const DonForm2 = ({ change, values }) => {

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
            <div className="donForm2">
                <p className="donate-form-steps">Krok 2/4</p>
                <div className="donForm2-select-box">
                    <h2 className="donForm1-title">Zaznacz co chcesz oddać:</h2>
                    <label className="donForm2-select-label">Liczba 60l worków:  </label>
                    <select className="donForm2-select-list" name="liczbaWorkow" onChange={handleChange}>
                        <option value=""> --- wybierz --- </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="donate-form-nav">
                    <span className="donForm1-btn" onClick={handleBack}>Wstecz</span>
                    <span className="donForm1-btn" onClick={handleForward}>Dalej</span>
                </div>
            </div>
        </>
    );
}

export default DonForm2;