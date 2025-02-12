import "./ContactPage.scss";
import contact from "../../assets/undraw/contact.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <h1>Contactez-</h1>
            <h1>Nous</h1>
            <div className='contactSocialMedia'>

            </div>
            <div className='contactInfo'>
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
                    <Link to="https://www.linkedin.com/in/julien-hermain/">
                        <p>Merliweb@*****.**</p>
                    </Link>
                    <Link to="https://www.linkedin.com/in/julien-hermain/">
                        <p>06 ** ** ** **</p>
                    </Link>
                </div>
            </div>

            <img src={contact} className="imageContact" alt="Merliweb Logo" />

      <div className="contactForm">
        {submitted ? (
          <p className="successMessage">Merci pour votre message !</p>
        ) : (
          <form onSubmit={handleSubmit} className="formContainer">
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

            <div className="formGroup">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit" className="submitButton">ENVOYER</button>
          </form>
        )}
      </div>

    </div>
  );
};

export default ContactPage;
