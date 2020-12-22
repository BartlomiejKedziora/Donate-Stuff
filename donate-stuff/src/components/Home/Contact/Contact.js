import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ErrorMessage from './ErrorMessage';


const Contact = () => {

    const [formError, setFormError] = useState(null);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const initialState = {
        name: "",
        email: "",
        message: ""
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContactForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const validate = (contactForm) => {
        if(!contactForm.email) {
            return "Email jest wymagany";
        }
        
        if(!contactForm.name) {
            return "Imię jest wymagane";
        } 
        // else if(/^[A-Za-z]+$/.test(contactForm.name)) {
        //     return "Podaj tylko litery";
        // }
         else if(contactForm.name.length < 3) {
            return "Imię jest za krótkie";
        }

        if(contactForm.message.length < 10) {
            return "Wiadomość musi mieć min. 10 znaków";
        }

        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /*form validation*/
        const errorMsg = validate(contactForm)
        if(errorMsg) {
            setFormError(errorMsg)
            console.log("błąd");
            return
        }

        /*send form via EmailJS*/
        const data = {
            service_id: 'gmail',
            template_id: 'template_evpmesg',
            user_id: 'user_Q5MsBWQ6HAqS2qTmb3uB7',
            template_params: contactForm
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

        /*reset form, reset error msg*/
        setContactForm(initialState);
        setFormError(null);
    } 

    return(
        <>
            <section id="contact" className="contact-bckg container">
                <div className="contact">
                    <h2 className="contact-title">Skontaktuj się z nami</h2>
                    <div className="contact-decor"></div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-form-inputs">
                            <label className="contact-form-label">Wpisz swoje imię
                                <input type="text" name="name" value={contactForm.name} onChange={handleChange} className="contact-form-item" placeholder="Krzysztof" />
                            </label>
                            <label className="contact-form-label">Wpisz swój email
                                <input type="email" name="email" value={contactForm.email} onChange={handleChange} className="contact-form-item" placeholder="krzychu@xxx.pl" />
                            </label>
                        </div>
                        <div>
                        <label className="contact-form-label">Wpisz swoją wiadomość
                                <textarea type="text" name="message" value={contactForm.message} onChange={handleChange} className="contact-form-item" placeholder="Chciałbym przekazać ..." />
                            </label>
                        </div>
                        {formError && <ErrorMessage formError={formError} />}
                        <button type="submit" className="contact-form-btn">Wyślij</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;