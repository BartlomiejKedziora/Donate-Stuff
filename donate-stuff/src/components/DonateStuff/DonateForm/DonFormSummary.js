import React, { useState } from 'react';

const DonFormSummary = ({change, values}) => {

    const [pageNumber, setPageNumber] = useState(values);

    const handleBack = (e) => {
        change({...pageNumber, step: +pageNumber.step - 1})
    }
    
    const handleForward = (e) => {
        change({...pageNumber, step: +pageNumber.step + 1})
    }

    return(
        <>
        <div className="donFormSum">
                <h2 className="donFormSum-title">Podsumowanie Twojej darowizny</h2>
                <div className="donFormSum-gifts">
                    <p className="donFormSum-gifts-title">Oddajesz:</p>
                    <p className="donFormSum-gifts gifts-bags">4 worki, ubrania w dobrym stanie, dzieciom</p>
                    <p className="donFormSum-gifts gifts-location">dla lokalizacji: Warszawa</p>
                </div>
                <div className="donFormSum-details">
                    <div className="donFormSum-details-left">
                        <p className="donFormSum-details-left-title">Adres odbioru:</p>
                        <p className="donFormSum-details-item">Ulica: Prosta 51</p>
                        <p className="donFormSum-details-item">Miasto: Kraków</p>
                        <p className="donFormSum-details-item">Kod pocztowy: 31-355</p>
                        <p className="donFormSum-details-item">Nr telefonu: 123 456 876</p>
                    </div>
                    <div className="donFormSum-details-right">
                        <p className="donFormSum-details-right-title">Adres odbioru:</p>
                        <p className="donFormSum-details-item">Data: 17.09.2000</p>
                        <p className="donFormSum-details-item">Godzina: 17.30</p>
                        <p className="donFormSum-details-item">Uwagi dla kuriera: Prosze pukać 2 razy, uważać na psa dingo i się dużo uśmiechać. Pzdr!</p>
                    </div>
                </div>
                <div className="donate-form-nav">
                    <span className="donForm1-btn" onClick={handleBack}>Wstecz</span>
                    <span className="donForm1-btn" onClick={handleForward}>Dalej</span>
                </div>
            </div>
        </>
    );
}

export default DonFormSummary;