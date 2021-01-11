import React, { useState } from 'react';

const DonForm1 = ({ change, values }) => {

    const [state, setState] = useState(values);

    console.log(state);
    console.log(values);


    const handleChange = ({ target: { value, name } }) => {
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleForward = (e) => {
        change({...state, step: +state.step + 1})
        console.log(state);
    }

    return(
        <>
            <div className="donForm1">
                <p className="donate-form-steps">Krok 1/4</p>
                <div className="donForm1-checkbox-list">
                    <h2 className="donForm1-title">Zaznacz co chcesz oddać:</h2>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" name="rzeczy1" onChange={handleChange} value={"ubrania, które nadają sie do ponownego użycia"} />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">ubrania, które nadają sie do ponownego użycia</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" name="rzeczy2" onChange={handleChange} value={"ubrania do wyrzucenia"} />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">ubrania do wyrzucenia</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" name="rzeczy3" onChange={handleChange} value={"zabawki"} />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">zabawki</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" name="rzeczy4" onChange={handleChange} value={"książki"} />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">książki</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" name="rzeczy5" onChange={handleChange} value={"inne"} />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">inne</p>
                        </label>
                    </div>
                </div>
                <span className="donForm1-btn" onClick={handleForward}>Dalej</span>
            </div>
        </>
    );
}

export default DonForm1;