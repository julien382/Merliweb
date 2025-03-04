import './Footer.scss'

import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <span className='footerInfos'>
                <div className='containerEntreprise'>
                    <h1 className='FooterNameType'>Merliweb</h1>
                    <p>Agence de Création</p>
                    <p>Digitales </p>
                </div>

                <div className='containerContact'>
                    <p className='FooterNameType'>Contact</p>
                    <a href="mailto:contact.merliweb@gmail.com">contact.merliweb@gmail.com</a>
                </div>

                <div className='containerMedia'>
                    <p className='FooterNameType'>Social Media</p>
                    <a href="https://www.linkedin.com/company/merliweb" target="_blank" rel="noopener noreferrer">
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://www.instagram.com/merliweb/" target="_blank" rel="noopener noreferrer">
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.tiktok.com/@agence_merliweb" target="_blank" rel="noopener noreferrer">
                        <p>TikTok</p>
                    </a>
                    <a href="https://www.facebook.com/people/Merliweb/61573613559840/" target="_blank" rel="noopener noreferrer">
                        <p>Facebook</p>
                    </a>
                </div>

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
            </span>

            <div className='containerCopyright'>
                <p className='copyright'>© 2025 Merliweb</p>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p className='copyrightLink'>Site web créé par Julien Hermain</p>
                </Link>
                <Link to="/mentionsLegales">
                    <p className='copyrightLink'>Mentions légales</p>
                </Link>
            </div>

        </footer>
    )
}

export default Footer