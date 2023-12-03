import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hh42cjb', 'template_fwtdndb', form.current, 'v_YBZzcQo3fqMTdXW')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className="contact-content">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h1 className='page-name'>Contactez moi</h1>
            <div className="contact-main">
                <div className="contact-form-display">
                    <form ref={form} onSubmit={sendEmail} className='contact-form'>
                        <input type="text" name="user_name" className='contact-input' placeholder='Votre nom' />
                        <input type="email" name="user_email" className='contact-input' placeholder='Votre courriel' />
                        <textarea name="message" className='contact-input message' placeholder='Votre message' />
                        <div className="button-placer">
                            <input type="submit" value="Envoyer" className='send' />
                        </div>
                    </form>
                    <div className="social-media">
                        <p className='title'>Informations supplémentaire</p>
                        <p>Je suis présent sur les réseaux sociaux suivant: </p>
                        <ul className='contact-list'>
                            <li>
                                <Link to="https://github.com/XavierTessier1" target='_blank' ><img src="logos/GitHub_Logo.png" alt="" className='github' /></Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/xavier-tessier-/" target='_blank' ><img src="logos/LI-Logo.png" alt="" className='linkedin' /></Link>
                            </li>
                        </ul>
                        <hr />
                        <p>Mon numéro de téléphone : 450 508-5121</p>
                        <p>Mon courriel : xaviertessier023@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Contact;