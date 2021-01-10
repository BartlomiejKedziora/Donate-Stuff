import React, { useState } from 'react';

const DonForm3 = ({change, values}) => {

    const [pageNumber, setPageNumber] = useState(values);

    const handleBack = (e) => {
        change({...pageNumber, step: +pageNumber.step - 1})
    }
    
    const handleForward = (e) => {
        change({...pageNumber, step: +pageNumber.step + 1})
    }

    return(
        <>
            <div className="donForm3">
                <p className="donate-form-steps">Krok 3/4</p>
                <div className="donForm3-select-box">
                    <h2 className="donForm3-title">Lokalizacja:</h2>
                    <select className="donForm3-select-list">
                        <option value="" selected> --- wybierz --- </option>
                        <option value="Kraków">Kraków</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
                <div className="donForm3-checkbox-list">
                    <p className="donForm3-checkbox-title">Komu chcesz pomóc?</p>
                        <label className="donForm3-checkbox-label">
                            <input type="checkbox" className="donForm3-checkbox-input" />
                            <span className="donForm3-checkbox-text">dzieciom</span>
                        </label>
                        <label className="donForm3-checkbox-label">
                            <input type="checkbox" className="donForm3-checkbox-input" />
                            <span className="donForm3-checkbox-text">samotnym matkom</span>
                        </label>
                        <label className="donForm3-checkbox-label">
                            <input type="checkbox" className="donForm3-checkbox-input" />
                            <span className="donForm3-checkbox-text">bezdomnym</span>
                        </label>
                        <label className="donForm3-checkbox-label">
                            <input type="checkbox" className="donForm3-checkbox-input" />
                            <span className="donForm3-checkbox-text">niepełnosprawnym</span>
                        </label>
                        <label className="donForm3-checkbox-label">
                            <input type="checkbox" className="donForm3-checkbox-input" />
                            <span className="donForm3-checkbox-text">osobom starszym</span>
                        </label>
                </div>
                <div className="donForm3-question">
                    <p className="donForm3-checkbox-title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                    <input className="donForm3-question-input" type="text" />
                </div>
                <div className="donate-form-nav">
                    <span className="donForm1-btn" onClick={handleBack}>Wstecz</span>
                    <span className="donForm1-btn" onClick={handleForward}>Dalej</span>
                </div>
            </div>
        </>
    );
}

export default DonForm3;