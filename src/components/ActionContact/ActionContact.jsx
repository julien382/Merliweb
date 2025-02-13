import './ActionContact.scss'
import contact from "../../assets/undraw/contact.svg";

const ActionContact = () => {
    return (
        <div className='actionContact'>
            <img src={contact} className="actionContactImage" alt="Merliweb Logo" />
            <h2>Prêt à faire briller votre présence en ligne ?</h2>
            <p className='actionContactText'>{'Chez MerliWeb, nous sommes impatients de collaborer avec vous pour donner vie à vos projets numériques.'}</p>
            <button className="submitButton">Prendre Contact</button>
        </div>
    )
}

export default ActionContact