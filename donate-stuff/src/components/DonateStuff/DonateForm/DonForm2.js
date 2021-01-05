import React, { useState } from 'react';

const DonForm2 = () => {

    return(
        <>
            <div className="donForm2">
                <p className="donate-form-steps">Krok 2/4</p>
                <div className="donForm2-select-box">
                    <h2 className="donForm1-title">Zaznacz co chcesz oddać:</h2>
                    <label className="donForm2-select-label">Liczba 60l worków:  </label>
                    <select className="donForm2-select-list">
                        <option value="" selected> --- wybierz --- </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="donate-form-nav">
                    <span className="donForm1-btn">Wstecz</span>
                    <span className="donForm1-btn">Dalej</span>
                </div>
            </div>
        </>
    );
}

export default DonForm2;