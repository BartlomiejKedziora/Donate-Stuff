import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

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

    const handleSubmit = (e) => {
        e.preventDefault();

        /*reset form*/
        setContactForm(initialState);
    } 
    
    /*form validation*/

    // const nameValidation = (fieldName, fieldValue) => {
    //     if (fieldValue.trim() === "") {
    //         return 'Podaj imię';
    //     }
    //     if (/[^a-zA-Z -]/.test(fieldValue)) {
    //         return 'Podaj tylko litery';
    //       }
    //     if (fieldValue.trim().length < 3) {
    //     return `${fieldName} needs to be at least three characters`;
    //     }
    //     return null;
    // };

    // const validate = {
    //     name: name => nameValidation('First Name', name),
    //   };
      


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
                        <button type="submit" className="contact-form-btn">Wyślij</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;