import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Home/Navigation/Navigation';
import ErrorMessage from './../Home/Contact/ErrorMessage';
import NavLoggedIn from '../DonateStuff/DonateNavigation/NavLoggedIn';
import { useHistory } from "react-router-dom";
import { FirebaseContext } from '../Firebase/index';


const SignIn = () => {

    const firebase = useContext(FirebaseContext);
    const history = useHistory();

    const [formError, setFormError] = useState(null);
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: ""
    });

    const initialState = {
        email: "",
        password: ""
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignInForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const validate = (signInForm) => {
        if(!signInForm.email) {
            return "Email jest wymagany";
        }
        
        if(!signInForm.password) {
            return "Hasło jest wymagane";
        } 
         else if(signInForm.password.length < 5) {
            return "Hasło musi mieć min.6 znaków";
        }

        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /*form validation*/
        const errorMsg = validate(signInForm)
        if(errorMsg) {
            setFormError(errorMsg)
            console.log("błąd");
            return
        }

        console.log(signInForm);
        
        /*firebase auth*/
        firebase.doSignInWithEmailAndPassword(signInForm.email, signInForm.password)
            .then(authUser => {
                /*reset form, reset error msg*/
                setSignInForm(initialState);
                setFormError(null);
                history.push('/');
            })
            .catch(error => {
                console.log(error);
                switch (error.code) {
                        case "auth/user-not-found": 
                        return setFormError("Nie ma takiego użytkownika")
                        case "auth/wrong-password": 
                        return setFormError("Błędne hasło")
                    }
            });        
    }

    return(
        <>
            <Navigation />
            <section className="signin container">
                <h2 className="signin-title">Zaloguj się</h2>
                <div className="signin-decor"></div>
                <form className="signin-form">
                    <div className="signin-form-inputs">
                        <label className="signin-form-label">Email
                            <input type="email" name="email" value={signInForm.email} onChange={handleChange} className="signin-form-item" />
                        </label>
                        <label className="signin-form-label">Hasło
                            <input type="password" name="password" value={signInForm.password} onChange={handleChange} className="signin-form-item" />
                        </label>
                        {formError && <ErrorMessage formError={formError} />}
                    </div>
                    <div className="signin-form-buttons">
                    <Link to="/signup" className="signin-form-btn">Załóż konto</Link>
                    <Link to="/donate-stuff" onClick={handleSubmit} className="signin-form-btn">Zaloguj się</Link>
                </div>
                </form>
            </section>            
        </>
    );
}

export default SignIn;