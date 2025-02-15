import './ProjetsPage.scss';
import { useState, useEffect } from 'react';
import Above from '../../components/Above/Above';
import ActionContact from '../../components/ActionContact/ActionContact';
import Projet from '../../components/Projet/Projet';

import ohmylunch1 from "../../assets/projets/ohmylunch/ohmylunch1.png";
import ohmylunch2 from "../../assets/projets/ohmylunch/ohmylunch2.png";
import ohmylunch3 from "../../assets/projets/ohmylunch/ohmylunch3.png";
import baratto1 from "../../assets/projets/baratto/baratto1.png";
import baratto2 from "../../assets/projets/baratto/baratto2.png";
import baratto3 from "../../assets/projets/baratto/baratto3.png";
import baratto4 from "../../assets/projets/baratto/baratto4.png";
import reelHenson1 from "../../assets/projets/reelHenson/reelHenson1.jpg";
import reelHenson2 from "../../assets/projets/reelHenson/reelHenson2.jpg";
import reelHenson3 from "../../assets/projets/reelHenson/reelHenson3.jpg";
import asset from "../../assets/undraw/asset.svg";
import cross from "../../assets/cross.svg";
import chevronLeft from "../../assets/chevronLeft.svg";
import chevronRight from "../../assets/chevronRight.svg";

const projetsData = [
    {
        images: [ohmylunch1, ohmylunch2, ohmylunch3], 
        type: "Site de réservation",
        title: "ohmylunch",
        description: "Plateforme pour choisir et composer son menu en restaurant.",
        link: "https://julien382.github.io/ohmylunch/"
    },
    {
        images: [baratto1, baratto2, baratto3, baratto4],
        type: "Site Vitrine",
        title: "Baratto Precision",
        description: "Site vitrine pour une entreprise d'impression 3D",
        link: "https://barattoprecision.com/"
    },
    {
        images: [reelHenson1, reelHenson2, reelHenson3],
        type: "Reel",
        title: "Henson",
        description: "Réalisation d'un reel sur un événement d'attelage chez les Henson",
        link: "https://www.instagram.com/reel/DF-AlQZNqy7/?igsh=Ym5lYzNnMW4xN2dm"
    }
];

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    // Désactiver le scroll de la page quand la modale est ouverte
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden"; // Désactiver le scroll
        } else {
            document.body.style.overflow = "auto"; // Réactiver le scroll
        }

        return () => {
            document.body.style.overflow = "auto"; // Nettoyage lors du démontage
        };
    }, [selectedProject]);

    const handleClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (selectedProject?.images?.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex + 1 < selectedProject.images.length ? prevIndex + 1 : 0
            );
        }
    };

    const prevImage = () => {
        if (selectedProject?.images?.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex - 1 >= 0 ? prevIndex - 1 : selectedProject.images.length - 1
            );
        }
    };

    const displayedProjects = showAll ? projetsData : projetsData.slice(0, 6);

    return (
        <div className='projetsPage'>
            <Above 
                img={asset} 
                title={"Nos projets"} 
                text={"Nous collaborons étroitement avec nos clients pour donner vie à leurs ambitions digitales, en apportant des solutions personnalisées et innovantes. Voici quelques-uns des projets :"}
            />

            <div className='projets'>
                <p>Nos Projets</p>
                <h2>Découvrez nos réalisations</h2>

                <div className="projetsGrid">
                    {displayedProjects.map((project, index) => (
                        <Projet 
                            key={index} 
                            img={project.images?.[0]} 
                            type={project.type} 
                            title={project.title} 
                            onClick={() => handleClick(project)}
                        />
                    ))}
                </div>

                {projetsData.length > 6 && (
                    <button 
                        className="projetsButton" 
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Voir Moins" : "Voir Plus"}
                    </button>
                )}
            </div>

            <ActionContact />

            {/* Modale */}
            {selectedProject && selectedProject.images?.length > 0 && (
                <div className="modal" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className='modalContentText'>
                            <img src={cross} className="closeButton" alt="closeButton" onClick={closeModal} />
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <p className='modalLink'>Voir le projet</p>
                            </a>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <p className='modalLink'>Voir le projet</p>
                            </a>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <p className='modalLink'>Voir le projet</p>
                            </a>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <p className='modalLink'>Voir le projet</p>
                            </a>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <p className='modalLink'>Voir le projet</p>
                            </a>
                        </div>
                        
                        <div className="carousel">
                            {selectedProject.images.length > 1 && (
                                <img src={chevronLeft} className="prevButton" alt="prevButton" onClick={prevImage} />
                            )}

                            <img 
                                src={selectedProject.images[currentImageIndex]} 
                                alt={selectedProject.title} 
                                className="modalImage"
                            />

                            {selectedProject.images.length > 1 && (
                                <img src={chevronRight} className="nextButton" alt="nextButton" onClick={nextImage} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjetsPage;
