import './Above.scss'
import PropTypes from "prop-types";
import arrowBottom from "../../assets/arrowBottom.svg";

const Above = ({ img, title, text }) => {
    return (
        <div className="above">
            <span className='containerAbove'>
                <img src={img} className="aboveImage" alt="mainAboveImage" />
                <span className='aboveText'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </span>
            </span>
            <div className='arrowMainService'>
                <img src={arrowBottom} className="arrow" alt="arrow" />
            </div>
        </div>
    )
}

Above.propTypes = {
    img: PropTypes.string.isRequired,  // L'image doit être une URL sous forme de string
    title: PropTypes.string.isRequired, // Le titre est une string obligatoire
    text: PropTypes.string.isRequired,  // Le texte est une string obligatoire
};

export default Above