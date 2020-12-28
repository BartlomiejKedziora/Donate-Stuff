import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Home/Navigation/Navigation';
import ErrorMessage from './../Home/Contact/ErrorMessage';
import { FirebaseContext } from '../Firebase/index';
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();
    
    const [formError, setFormError] = useState(null);
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        passwordCheck: ""
    });

    const initialState = {
        email: "",
        password: "",
        passwordCheck: ""
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const validate = (signUpForm) => {
        if(!signUpForm.email) {
            return "Email jest wymagany";
        }
        
        if(!signUpForm.password) {
            return "Hasło jest wymagane";
        } 

        if(signUpForm.password.length < 6) {
            return "Hasło jest za krótkie";
        } 
        
        if(!signUpForm.passwordCheck) {
            return "Powtórz hasło";
        } else if (signUpForm.password !== signUpForm.passwordCheck){
            return "Hasło się nie zgadza";
        }

        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /*form validation*/
        const errorMsg = validate(signUpForm)
        if(errorMsg) {
            setFormError(errorMsg)
            console.log("błąd");
            return
        }

        console.log(signUpForm);

        /*firebase auth*/
        firebase.doCreateUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
            .then(authUser => {
                /*reset form, reset error msg*/
                setSignUpForm(initialState);
                setFormError(null);
                history.push('/donate-stuff');
            })
            .catch(error => {
                setFormError("Email lub hasło jest niepoprawne");
                console.log("błąd");
            });
    }
    

    return(
        <>
            <Navigation />
            <section className="signup container">
                <h2 className="signup-title">Załóż konto</h2>
                <div className="signup-decor"></div>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="signup-form-inputs">
                        <label className="signup-form-label">Email
                            <input type="email" name="email" value={signUpForm.email} onChange={handleChange} className="signup-form-item" />
                        </label>
                        <label className="signup-form-label">Hasło
                            <input type="password" name="password" value={signUpForm.password} onChange={handleChange}className="signup-form-item" />
                        </label>
                        <label className="signup-form-label">Powtórz hasło
                            <input type="password" name="passwordCheck" value={signUpForm.passwordCheck} onChange={handleChange} className="signup-form-item" />
                        </label>
                        {formError && <ErrorMessage formError={formError} />}
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