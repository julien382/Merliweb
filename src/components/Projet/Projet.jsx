import './Projet.scss'
import PropTypes from "prop-types";
import arrowRight from "../../assets/arrowRight.svg";

const Projet = ({ img, type, title }) => {
    return (
        <div className='projet'>
            <img src={img} className='projetImage' alt="image projet" />
            <div className="projetInfo">
                <div className="projetTitle">
                    <h3>{type}</h3>
                    <h3>{title}</h3>
                </div>
                <img src={arrowRight} className="projetArrow" alt="arrow" />
            </div>
        </div>
    )
}

Projet.propTypes = {
    img: PropTypes.string.isRequired,  // L'image doit être une URL (string) et est requise
    type: PropTypes.string.isRequired, // Le type de projet (ex: "Site Vitrine") est requis
    title: PropTypes.string.isRequired // Le titre du projet est requis
};

export default Projet