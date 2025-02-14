import { useState } from 'react';
import './ProjetsPage.scss';
import Above from '../../components/Above/Above';
import ActionContact from '../../components/ActionContact/ActionContact';
import asset from "../../assets/undraw/asset.svg";
import { Link } from "react-router-dom";
import Projet from '../../components/Projet/Projet';

// Données des projets
const projetsData = [
    {
        img: asset,
        type: "Site vitrine",
        title: "Merliweb",
        description: "Un site e-commerce innovant conçu pour maximiser l’expérience d’achat...",
    },
    {
        img: asset,
        type: "Application mobile",
        title: "App Foodies",
        description: "Une application mobile permettant aux utilisateurs de commander des plats en ligne...",
    },
    {
        img: asset,
        type: "E-commerce",
        title: "ShopNow",
        description: "Un site e-commerce moderne et optimisé pour la conversion...",
    },
    {
        img: asset,
        type: "Portfolio",
        title: "John Doe Portfolio",
        description: "Un portfolio interactif mettant en valeur les projets d’un designer...",
    },
    {
        img: asset,
        type: "Blog",
        title: "TechNews",
        description: "Un blog dynamique et responsive sur les nouvelles technologies...",
    },
    {
        img: asset,
        type: "Plateforme SaaS",
        title: "CloudManager",
        description: "Une solution SaaS pour la gestion des services cloud...",
    }
];

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
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

                {projetsData.map((project, index) => (
                    <Projet 
                        key={index} 
                        img={project.img} 
                        type={project.type} 
                        title={project.title} 
                        onClick={() => handleClick(project)}
                    />
                ))}

                <Link to="/projets">
                    <button className="projetsButton">Voir Plus</button>
                </Link>
            </div>

            <ActionContact />

            {/* Modale affichant le projet sélectionné */}
            {selectedProject && (
                <div className="modal" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton" onClick={closeModal}>✖</button>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <img src={selectedProject.img} alt={selectedProject.title} className="modalImage"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjetsPage;
