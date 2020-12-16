import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Home/Navigation/Navigation';


const SignUp = () => {
    return(
        <>
            <Navigation />
            <section class="signup container">
                <h2 className="signup-title">Zaloguj się</h2>
                <div className="signup-decor"></div>
                <form className="signup-form">
                    <div className="signup-form-inputs">
                        <label className="signup-form-label">Email
                            <input className="signup-form-item" type="email" />
                        </label>
                        <label className="signup-form-label">Hasło
                            <input className="signup-form-item" type="password"  />
                        </label>
                        <label className="signup-form-label">Powtórz hasło
                            <input className="signup-form-item" type="password"  />
                        </label>
                    </div>
                    <div className="signup-form-buttons">
                    <Link to="/signin" className="signup-form-btn">Zaloguj się</Link>
                    <button className="signup-form-btn">Załóż konto</button>
                </div>
                </form>
            </section>  
        </>
    );
}

export default SignUp;