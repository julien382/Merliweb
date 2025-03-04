import "./ContactPage.scss";
import contact from "../../assets/undraw/contact.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

import linkedin from "../../assets/reseaux/linkedin.svg";
import insta from "../../assets/reseaux/insta.svg";
import tiktok from "../../assets/reseaux/tiktok.svg";
import facebook from "../../assets/reseaux/facebook.svg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log("Formulaire envoyé:", formData);
    }
  };

  return (
    <div className="contactPage">
        <div className="contactContainerTitleSocial">
            <div className="contactPageTitle">
                <h1>Contactez-</h1>
                <h1>Nous</h1>
            </div>

            <div className='contactSocialMedia'>
                <a href="https://www.linkedin.com/company/merliweb" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="logoSocialMedia" alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/merliweb/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} className="logoSocialMedia" alt="insta" />
                </a>
                <a href="https://www.tiktok.com/@agence_merliweb" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} className="logoSocialMedia" alt="tiktok" />
                </a>
                <a href="https://www.facebook.com/people/Merliweb/61573613559840/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} className="logoSocialMedia" alt="facebook" />
                </a>
            </div>

        </div>

        <div className="contactPageContent"> 
            <div className="contactInfo">
                <div className='contactContainerInfo'>
                    <div className='containerLocalisation'>
                        <p className='FooterNameType'>Localisation</p>
                        <Link to="https://www.linkedin.com/in/julien-hermain/">
                            <p>Hauts-De-France</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/julien-hermain/">
                            <p>Merlimont</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/julien-hermain/">
                            <p>Berck</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/julien-hermain/">
                            <p>Le Touquet</p>
                        </Link>
                    </div>
                    <div className='containerContact'>
                        <p className='FooterNameType'>Contact</p>
                        <a href="mailto:contact.merliweb@gmail.com">contact.merliweb@gmail.com</a>
                    </div>
                </div>
                <div className="contentImageContact">
                    <img src={contact} className="imageContact" alt="Merliweb Logo" />
                </div>
            </div>

            <div className="contactForm">
                {submitted ? (
                <p className="successMessage">Merci pour votre message !</p>
                ) : (
                <form onSubmit={handleSubmit} className="formContainer">
                    <div className="formContent">
                        <div className="formGroup">
                        <label>Prénom</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Prénom"
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>

                        <div className="formGroup">
                        <label>Nom</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Nom"
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>

                        <div className="formGroup">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="formGroup">
                        <label>Téléphone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Téléphone"
                        />
                        </div>

                        <div className="formGroup groupe-message">
                        <label>Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                    </div>

                    <button type="submit" className="submitButton">ENVOYER</button>
                    
                </form>
                )}
            </div>

        </div>

    </div>
  );
};

export default ContactPage;
