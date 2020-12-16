import React from 'react';
import {Link} from 'react-router-dom';

const FourSteps = () => {
    return(
        <>
            <section className="steps container">
                <h2 id="steps" className="steps-title">Wystarczą 4 proste kroki</h2>
                <div className="steps-decor"></div>
                <div className="steps-intructions">
                    <article className="steps-intructions-col">
                        <div className="steps-intructions-img steps-img1"></div>
                        <p className="steps-intructions-title">Wybierz rzeczy</p>
                        <span className="steps-intructions-line"></span>
                        <p className="steps-intructions-text">ubrania, zabawki, sprzęt i inne</p>
                    </article>
                    <article className="steps-intructions-col">
                        <div className="steps-intructions-img steps-img2"></div>
                        <p className="steps-intructions-title">Spakuj je</p>
                        <span className="steps-intructions-line"></span>
                        <p className="steps-intructions-text">skorzystaj z worków na śmieci</p>
                    </article>
                    <article className="steps-intructions-col">
                        <div className="steps-intructions-img steps-img3"></div>
                        <p className="steps-intructions-title">Zdecyduj komu chcesz pomóc</p>
                        <span className="steps-intructions-line"></span>
                        <p className="steps-intructions-text">wybierz zaufane miejsce</p>
                    </article>
                    <article className="steps-intructions-col">
                        <div className="steps-intructions-img steps-img4"></div>
                        <p className="steps-intructions-title">Zamów kuriera</p>
                        <span className="steps-intructions-line"></span>
                        <p className="steps-intructions-text">kurier przyjedzie w dogodnym terminie</p>
                    </article>
                </div>
                <div className="steps-intructions-cta"><Link to="/signin" className="steps-intructions-cta-btn">oddaj rzeczy</Link></div>
            </section>
        </>
    );
}

export default FourSteps;