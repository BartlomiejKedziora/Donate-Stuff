import React from 'react';
import {Link, Router} from 'react-router-dom';

const Banner = () => {
    return(
        <>
            <h1 id="banner">Zacznij pomagać!</h1>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <Link to="/signin">Oddaj rzeczy</Link>
            <Link to="/signin">Zorganizuj zbiórkę</Link>
        </>
    );
}

export default Banner;