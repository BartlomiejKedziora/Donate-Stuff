import React from 'react';

const Contact = () => {
    return(
        <>
            <section id="contact" className="contact container">
                <h2 className="contact-title">Skontaktuj się z nami</h2>
                <div className="contact-decor"></div>
                <form className="contact-form">
                    <div className="contact-form-inputs">
                        <label className="contact-form-label">Wpisz swoje imię
                            <input className="contact-form-item" placeholder="Krzysztof" />
                        </label>
                        <label className="contact-form-label">Wpisz swój email
                            <input className="contact-form-item" placeholder="krzychu@xxx.pl" />
                        </label>
                    </div>
                    <div>
                    <label className="contact-form-label">Wpisz swoją wiadomość
                            <textarea className="contact-form-item" placeholder="Chciałbym przekazać ..." />
                        </label>
                    </div>
                    <button className="contact-form-btn">Wyślij</button>
                </form>
            </section>
        </>
    );
}

export default Contact;