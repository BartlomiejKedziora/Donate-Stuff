import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
    return(
        <header className="header-hero container">
            <div className="header-bckg"></div>
            <div className="header">
                <h1 id="banner" className="header-title">Zacznij pomagać!</h1>
                <h2 className="header-title">Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className="header-decor"></div>
                <div className="header-cta">
                    <Link to="/signin" className="header-cta-btn">Oddaj rzeczy</Link>
                    <Link to="/signin" className="header-cta-btn">Zorganizuj zbiórkę</Link>
                </div>
            </div>   
        </header>
    );
}

export default Banner;