import './ServiceWeb.scss'
import PropTypes from "prop-types";

const ServiceWeb = ({ img, title, text }) => {
    return (
        <div className='serviceWeb'>
            <img src={img} className="serviceWebImage" alt="serviceWebImage" />
            <h3 className='serviceWebName'>{title}</h3>
            <p className='serviceWebText'>{text}</p>
        </div>
    )
}

ServiceWeb.propTypes = {
    img: PropTypes.string.isRequired,  // L'image doit être une chaîne de caractères (URL)
    title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères
    text: PropTypes.string.isRequired,  // Le texte doit être une chaîne de caractères
};

export default ServiceWeb