import './Footer.scss'

import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className='containerEntreprise'>
                <h1 className='FooterNameType'>Merliweb</h1>
                <p>Agence de Création</p>
                <p>Digitales </p>
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

            <div className='containerMedia'>
                <p className='FooterNameType'>Social Media</p>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p>LinkedIn</p>
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p>Facebook</p>
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p>Instagram</p>
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p>TikTok</p>
                </Link>
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

            <div className='containerCopyright'>
                <p className='copyright'>© 2025 Merliweb</p>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p className='copyrightLink'>Site web créé par Julien Hermain</p>
                </Link>
                <p className='copyright'>Mentions légales</p>
            </div>

        </footer>
    )
}

export default Footer