import './ErrorPage.scss'
import errorImage from "../../assets/undraw/errorImage.svg";

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <img src={errorImage} className="errorImage" alt="errorImage" />
            <h1 className='errorTitle'>Page Introuvable</h1>
            <Link to="/" className='homeLink'>
              <p className='logotexte'>{"Retour à l'accueil"}</p>
            </Link>
        </div>
    )
}

export default ErrorPage