import './Projet.scss'
import PropTypes from "prop-types";

const Projet = ({ img, type, title, onClick }) => {
    return (
        <div className='projet' onClick={onClick}>
            <img src={img} className='projetImage' alt="image projet" />
            <div className="projetInfo">
                <div className="projetTitle">
                    <h3>{type}</h3>
                    <h3>{title}</h3>
                </div>
                <svg  alt="arrow"  width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2436 8.70711C22.6342 8.31658 22.6342 7.68342 22.2436 7.29289L15.8797 0.928933C15.4891 0.538408 14.856 0.538408 14.4655 0.928933C14.0749 1.31946 14.0749 1.95262 14.4655 2.34315L20.1223 8L14.4655 13.6569C14.0749 14.0474 14.0749 14.6805 14.4655 15.0711C14.856 15.4616 15.4891 15.4616 15.8797 15.0711L22.2436 8.70711ZM0 9H21.5365V7H0V9Z" fill="white"/>
                </svg>
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
