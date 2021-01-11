import React, { useState } from 'react';

const DonFormSummary = ({change, values}) => {

    const [state, setState] = useState(values);

    const handleBack = (e) => {
        change({...state, step: +state.step - 1})
    }
    
    const handleForward = (e) => {
        change({...state, step: +state.step + 1})
    }

    return(
        <>
        <div className="donFormSum">
                <h2 className="donFormSum-title">Podsumowanie Twojej darowizny</h2>
                <div className="donFormSum-gifts">
                    <p className="donFormSum-gifts-title">Oddajesz:</p>
                    <p className="donFormSum-gifts gifts-bags">{state.liczbaWorków} worki
                    {state.rzeczy1===undefined?"":", " + state.rzeczy1}
                    {state.rzeczy2===undefined?"":", " + state.rzeczy2}
                    {state.rzeczy3===undefined?"":", " + state.rzeczy3}
                    {state.rzeczy4===undefined?"":", " + state.rzeczy4}
                    {state.rzeczy5===undefined?"":", " + state.rzeczy5} 
                    {state.odbiorcy1===undefined?"":", " + state.odbiorcy1}
                    {state.odbiorcy2===undefined?"":", " + state.odbiorcy2}
                    {state.odbiorcy3===undefined?"":", " + state.odbiorcy3}
                    {state.odbiorcy4===undefined?"":", " + state.odbiorcy4}
                    {state.odbiorcy5===undefined?"":", " + state.odbiorcy5}</p>
                    <p className="donFormSum-gifts gifts-location">dla lokalizacji: {state.miejsceOdbioru}</p>
                </div>
                <div className="donFormSum-details">
                    <div className="donFormSum-details-left">
                        <p className="donFormSum-details-left-title">Adres odbioru:</p>
                        <p className="donFormSum-details-item">Ulica: {state.ulica}</p>
                        <p className="donFormSum-details-item">Miasto: {state.miasto}</p>
                        <p className="donFormSum-details-item">Kod pocztowy: {state.kod}</p>
                        <p className="donFormSum-details-item">Nr telefonu: {state.tel}</p>
                    </div>
                    <div className="donFormSum-details-right">
                        <p className="donFormSum-details-right-title">Termin odbioru:</p>
                        <p className="donFormSum-details-item">Data: {state.dataOdbioru}</p>
                        <p className="donFormSum-details-item">Godzina: {state.godzOdbioru}</p>
                        <p className="donFormSum-details-item">Uwagi dla kuriera: {state.uwagi}</p>
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