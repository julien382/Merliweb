import './ProjetsPage.scss';
import { useState } from 'react';
import Above from '../../components/Above/Above';
import ActionContact from '../../components/ActionContact/ActionContact';
import Projet from '../../components/Projet/Projet';
import asset from "../../assets/undraw/asset.svg";
import react from "../../assets/undraw/react.svg";
import color from "../../assets/undraw/color.svg";
import cross from "../../assets/cross.svg";
import chevronLeft from "../../assets/chevronLeft.svg";
import chevronRight from "../../assets/chevronRight.svg";
import { Link } from "react-router-dom";

const projetsData = [
    {
        images: [asset, react, color], 
        type: "Site vitrine",
        title: "Merliweb",
        description: "Un site e-commerce innovant conçu pour maximiser l’expérience d’achat..."
    },
    {
        images: [react, asset, asset],
        type: "Application mobile",
        title: "App Foodies",
        description: "Une application mobile permettant aux utilisateurs de commander des plats en ligne..."
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
    }
];

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

                <div>
                    {projetsData.map((project, index) => (
                        <Projet 
                            key={index} 
                            img={project.images?.[0]} // Afficher la première image par défaut
                            type={project.type} 
                            title={project.title} 
                            onClick={() => handleClick(project)}
                        />
                    ))}
                </div>

                <Link to="/projets">
                    <button className="projetsButton">Voir Plus</button>
                </Link>
            </div>

            <ActionContact />

            {/* Modale avec navigation des images */}
            {selectedProject && selectedProject.images?.length > 0 && (
                <div className="modal" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <img src={cross} className="closeButton" alt="closeButton" onClick={closeModal} />
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        
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
