import "./ContactPage.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import contact from "../../assets/undraw/contact.svg";
import linkedin from "../../assets/reseaux/linkedin.svg";
import insta from "../../assets/reseaux/insta.svg";
import tiktok from "../../assets/reseaux/tiktok.svg";
import facebook from "../../assets/reseaux/facebook.svg";

import { Helmet } from 'react-helmet';

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
      emailjs
        .send(
          "service_6pmg15r", // Remplace par ton Service ID
          "template_tq3cbzd", // Remplace par ton Template ID
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          "cLxd46YmpNQhT3bju" // Remplace par ta Clé publique
        )
        .then(
          (response) => {
            console.log("Email envoyé avec succès !", response.status, response.text);
            setSubmitted(true);
          },
          (error) => {
            console.error("Erreur lors de l'envoi de l'email :", error);
          }
        );
    }
  };

  return (
    <div className="contactPage">

      <Helmet>
        <title>Contact - Merliweb</title>
        <meta
          name="description"
          content="Contactez Merliweb pour discuter de vos besoins en développement web et solutions digitales. Nous sommes à votre écoute."
        />
        <meta
          name="keywords"
          content="contact, Merliweb, solutions web, création de site, développement digital"
        />
        <meta property="og:title" content="Contact - Merliweb" />
        <meta
          property="og:description"
          content="Contactez Merliweb pour discuter de vos besoins en développement web et solutions digitales. Nous sommes à votre écoute."
        />
        <meta property="og:image" content="/assets/logo/Merliweb.svg" />
        <meta property="og:url" content="https://www.merliweb.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
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
              <p>Hauts-De-France</p>
              <p>Merlimont</p>
              <p>Berck</p>
              <p>Le Touquet</p>
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
