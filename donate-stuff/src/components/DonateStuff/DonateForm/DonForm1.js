import React, { useState } from 'react';

const DonForm1 = () => {

    return(
        <>
            <div className="donForm1">
                <p className="donate-form-steps">Krok 1/4</p>
                <div className="donForm1-checkbox-list">
                    <p className="donForm1-title">Zaznacz co chcesz oddać:</p>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">ubrania, które nadają sie do ponownego użycia</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">ubrania do wyrzucenia</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">zabawki</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">książki</p>
                        </label>
                    </div>
                    <div className="donForm1-checkbox-item">
                        <label className="donForm1-checkbox-label">
                            <input type="checkbox" className="donForm1-checkbox-input" />
                            <span className="donForm1-checkbox-span"></span>
                            <p className="donForm1-checkbox-text">inne</p>
                        </label>
                    </div>
                </div>
                <span className="donForm1-btn">Dalej</span>
            </div>
        </>
    );
}

export default DonForm1;