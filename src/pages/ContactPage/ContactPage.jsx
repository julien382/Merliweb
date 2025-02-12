import './ContactPage.scss'
import contact from "../../assets/undraw/contact.svg";

import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div className='contactPage'>
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

            <div className='contactForm'>
                <p>prenom</p>
                <p>nom</p>
                <p>email</p>
            </div>

        </div>
    )
}

export default ContactPage