import './Footer.scss'
import logo from '../../assets/logo/Merliweb.svg';

import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <h1 className='nameLogoFooter'>ohmylunch</h1>
            <div className='containerContact'>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <img src={logo} alt="Facebook" />
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <img src={logo} alt="Instagram" />
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <img src={logo} alt="Mail" />
                </Link>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <img src={logo} alt="Tripadvisor" />
                </Link>
            </div>
            <div className='containerCopyright'>
                <p className='copyright'>Copyright © 2025 ohmylunch</p>
                <Link to="https://www.linkedin.com/in/julien-hermain/">
                    <p className='copyright'>Site web créé par Julien Hermain</p>
                </Link>
                <p className='copyright'>Mentions légales</p>
            </div>            
        </footer>
    )
}

export default Footer