import './ActionContact.scss'
import contact from "../../assets/undraw/contact.svg";
import { Link } from "react-router-dom";

const ActionContact = () => {
    return (
        <div className='actionContact'>
            <img src={contact} className="actionContactImage" alt="Merliweb Logo" />
            <span className='contentTextActionContact'>
                <h2>Prêt à faire briller votre présence en ligne ?</h2>
                <p className='actionContactText'>{'Chez Merliweb, nous sommes impatients de collaborer avec vous pour donner vie à vos projets numériques.'}</p>
                <Link to="/contact">
                    <button className="submitButton">Prendre Contact</button>
                </Link>
            </span>
        </div>
    )
}

export default ActionContact