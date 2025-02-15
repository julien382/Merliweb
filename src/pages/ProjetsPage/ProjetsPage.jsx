import { useState } from 'react';
import './ProjetsPage.scss';
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
import asset from "../../assets/undraw/asset.svg";
import color from "../../assets/undraw/color.svg";
import cross from "../../assets/cross.svg";
import chevronLeft from "../../assets/chevronLeft.svg";
import chevronRight from "../../assets/chevronRight.svg";

const projetsData = [
    {
        images: [ohmylunch1, ohmylunch2, ohmylunch3], 
        type: "Site de réservation",
        title: "ohmylunch",
        description: "Plateforme pour choisir et composer son menu en restaurant."
    },
    {
        images: [baratto1, baratto2, baratto3, baratto4],
        type: "Site Vitrine",
        title: "Baratto Precision",
        description: "Site vitrine pour une entreprise d'impression 3D"
    },
    {
        images: [color, asset, asset],
        type: "E-commerce",
        title: "ShopNow",
        description: "Un site e-commerce moderne et optimisé pour la conversion..."
    },
    {
        images: [asset, asset, asset],
        type: "Portfolio",
        title: "John Doe Portfolio",
        description: "Un portfolio interactif mettant en valeur les projets d’un designer..."
    },
    {
        images: [asset, asset, asset],
        type: "Blog",
        title: "TechNews",
        description: "Un blog dynamique et responsive sur les nouvelles technologies..."
    },
    {
        images: [asset, asset, asset],
        type: "Plateforme SaaS",
        title: "CloudManager",
        description: "Une solution SaaS pour la gestion des services cloud..."
    },
    {
        images: [asset, asset, asset],
        type: "Application",
        title: "Task Manager",
        description: "Une application de gestion de tâches pour les professionnels..."
    }
];

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const handleClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Reset l’index quand on ouvre la modale
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
                            img={project.images?.[0]} // Afficher la première image par défaut
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

            {/* Modale avec navigation des images */}
            {selectedProject && selectedProject.images?.length > 0 && (
                <div className="modal" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className='modalContentText'>
                            <img src={cross} className="closeButton" alt="closeButton" onClick={closeModal} />
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>

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
