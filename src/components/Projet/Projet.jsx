import './Projet.scss'
import PropTypes from "prop-types";
import arrowRight from "../../assets/arrowRight.svg";

const Projet = ({ img, type, title, onClick }) => {
    return (
        <div className='projet'>
            <img src={img} className='projetImage' alt="image projet" />
            <div className="projetInfo">
                <div className="projetTitle">
                    <h3>{type}</h3>
                    <h3>{title}</h3>
                </div>
                <img src={arrowRight} className="projetArrow" alt="arrow" onClick={onClick} />
            </div>
        </div>
    );
};

Projet.propTypes = {
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Projet;
