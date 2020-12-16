import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Home/Navigation/Navigation';


const SignOut = () => {
    return(
        <>
            <Navigation />
            <section class="signout container">
                <h2 className="signout-title">Wylogowanie nastąpiło pomyślnie!</h2>
                <div className="signout-decor"></div>
                <Link to="/" className="signout-form-btn">Strona główna</Link>
            </section>            
        </>
    );
}

export default SignOut;