import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Home/Navigation/Navigation';


const SignIn = () => {
    return(
        <>
            <Navigation />
            <section class="signin container">
                <h2 className="signin-title">Zaloguj się</h2>
                <div className="signin-decor"></div>
                <form className="signin-form">
                    <div className="signin-form-inputs">
                        <label className="signin-form-label">Email
                            <input className="signin-form-item" type="email" />
                        </label>
                        <label className="signin-form-label">Hasło
                            <input className="signin-form-item" type="password"  />
                        </label>
                    </div>
                    <div className="signin-form-buttons">
                    <Link to="/signup" className="signin-form-btn">Załóż konto</Link>
                    <button className="signin-form-btn">Zaloguj się</button>
                </div>
                </form>
            </section>            
        </>
    );
}

export default SignIn;