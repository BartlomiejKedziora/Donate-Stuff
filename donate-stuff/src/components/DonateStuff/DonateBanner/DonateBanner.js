import React from 'react';
import {Link} from 'react-router-dom';

const DonateBanner = () => {
    return(
        <header className="header-hero container">
            <div className="header-bckg header-bckg-donate"></div>
            <div className="header">
                <h1 id="banner" className="header-title">Oddaj rzeczy, których już nie chcesz</h1>
                <h2 className="header-title">POTRZEBUJĄCYM</h2>
                <div className="header-decor"></div>
                <div className="header-subtitle">Wystarczą 4 proste kroki: </div>
                <div className="header-sqrs">
                    <div className="header-sqrs-item"><p className="header-sqrs-txt">1<br></br><br></br>Wybierz rzeczy</p></div>
                    <div className="header-sqrs-item"><p className="header-sqrs-txt">2<br></br><br></br>Spakuj je w worki</p></div>
                    <div className="header-sqrs-item"><p className="header-sqrs-txt">3<br></br><br></br>Wybierz fundację</p></div>
                    <div className="header-sqrs-item"><p className="header-sqrs-txt">4<br></br><br></br>Zamów kuriera</p></div>
                </div>
            </div>   
        </header>
    );
}

export default DonateBanner;