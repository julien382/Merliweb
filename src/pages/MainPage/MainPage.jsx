import './MainPage.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
import building from "../../assets/undraw/building.svg";
import programming from "../../assets/undraw/programming.svg";
import studio from "../../assets/undraw/studio.svg";
import arrowBottom from "../../assets/arrowBottom.svg";
import arrowRight from "../../assets/arrowRight.svg";
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

const MainPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Désactiver le scroll lorsque la modale est ouverte
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
        <div className="mainPage">

            <div className="mainAbove">
                <span className='contentTextMainAbove'>
                    <h1>Surfez sur la vague du digital avec Merliweb</h1>
                    <p>{"L'agence qui donne vie à votre présence en ligne."}</p>
                    <Link to="/contact">
                        <button className="submitButton">Contactez-Nous</button>
                    </Link>
                </span>
                <img src={building} className="mainAboveImage" alt="mainAboveImage" />
            </div>

            <div className='mainDescription'>
                <h2>Vous cherchez à développer votre présence en ligne et à attirer plus de clients ?</h2>
                <p>Merliweb vous accompagne dans la création de votre site web et la gestion de votre communication digitale.
                Nous vous aidons à optimiser votre visibilité, à capter l’attention de votre audience et à générer des conversions grâce à des solutions modernes et performantes.</p>
                <div className='arrowMainService'>
                    <img src={arrowBottom} className="arrow" alt="arrow" />    
                </div>
            </div>

            <div className='mainService'>
                <div className='webMainService'>
                    <div className='textMainService'>
                        <h2>Création de sites web sur-mesure</h2>
                        <p>{"Nous concevons des sites web modernes, fonctionnels et responsive qui s'adaptent à tous vos besoins. Que vous ayez besoin d'un site vitrine, e-commerce, ou blog."}</p>
                        <div className='arrowMainService'>
                            <Link to="/services">
                                <img src={arrowRight} className="arrow" alt="arrow" />
                            </Link>
                        </div>
                    </div>
                    <img src={programming} className="mainServiceImage" alt="programming" />
                </div>
                <div className='webMainService flouMainCreationcontenu'>
                    <div className='textMainService'>
                        <h2>Création de contenu et gestion des réseaux sociaux</h2>
                        <p>De la photo à la vidéo, en passant par le drone et la GoPro, nous créons du contenu sur mesure et gérons vos réseaux pour maximiser votre impact digital.</p>
                        <div className='arrowMainService'>
                            <Link to="/services">
                                <img src={arrowRight} className="arrow" alt="arrow" />
                            </Link>
                        </div>
                    </div>
                    <img src={studio} className="mainServiceImage" alt="mainServiceImage" />
                </div>
            </div>

            <div className='mainTemoignages'>
                <p>Témoignages</p>
                <h2>Ce que disent nos clients</h2>
                <span className='contentMainTemoignage'>
                    <div className='mainTemoignage'>
                        <img src={programming} className="mainTemoignageImage" alt="mainTemoignageImage" />
                        <h3 className='mainTemoignageName'>Andrew Rathore</h3>
                        <p className='mainTemoignageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                    <div className='mainTemoignage'>
                        <img src={programming} className="mainTemoignageImage" alt="mainTemoignageImage" />
                        <h3 className='mainTemoignageName'>Vera Duncan</h3>
                        <p className='mainTemoignageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                    <div className='mainTemoignage'>
                        <img src={programming} className="mainTemoignageImage" alt="mainTemoignageImage" />
                        <h3 className='mainTemoignageName'>Mark Smith</h3>
                        <p className='mainTemoignageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                </span>
            </div>


            {isDesktop ? (
                // 🖥️ Version PC (Texte à gauche, Image à droite)
                <div className="mainActionContact desktop">
                    <div className="text">
                        <h2>MerliWeb, votre partenaire pour une transformation digitale réussie</h2>
                        <p className="mainActionName">
                            {"Fondée par Julien Hermain, MerliWeb a été créée pour valoriser chaque entreprise sur le web."}
                        </p>
                        <p className="mainActionText">
                            {"Notre mission ? Vous accompagner à chaque étape de votre transformation numérique : de la conception de sites web modernes et performants à la gestion de vos réseaux sociaux en passant par des stratégies de contenu impactantes."}
                        </p>
                        <p className="mainActionTextAction">
                            {'"Prêt(e) à vous démarquer dans le monde du digital ? Faisons équipe !"'}
                        </p>
                        <Link to="/contact">
                            <button className="submitButton">Prendre Contact</button>
                        </Link>
                    </div>
                    <img src={programming} className="mainActionImage" alt="Illustration projet digital" />
                </div>
            ) : (
                <div className='mainActionContact'>
                    <h2>MerliWeb, votre partenaire pour une transformation digitale réussie</h2>
                    <img src={programming} className="mainActionImage" alt="mainTemoignageImage" />
                    <p className='mainActionName'>{"Fondée par Julien Hermain, MerliWeb a été créée pour valoriser chaque entreprise sur le web."}</p>
                    <p className='mainActionText'>{"Notre mission ? Vous accompagner à chaque étape de votre transformation numérique : de la conception de sites web modernes et performants à la gestion de vos réseaux sociaux en passant par des stratégies de contenu impactantes."}</p>
                    <p className='mainActionTextAction'>{'"Prêt(e) à vous démarquer dans le monde du digital ? Faisons équipe !"'}</p>
                    <Link to="/contact">
                        <button className="submitButton">Prendre Contact</button>
                    </Link>
                </div>
            )}

            <div className='mainProjets'>
                <p>Nos Projets</p>
                <h2 className='mainProjetsTitle'>Découvrez nos réalisations</h2>
                <span className='containerMainProjets'>
                    {projetsData
                    .slice(0, isDesktop ? 6 : 3) // Affiche 3 sur mobile et 6 sur PC
                    .map((project, index) => (
                        <Projet 
                            key={index} 
                            img={project.images?.[0]} // Afficher la première image par défaut
                            type={project.type} 
                            title={project.title} 
                            onClick={() => handleClick(project)}
                        />
                    ))}
                </span>
                <Link to="/projets">
                    <button className="mainProjetsButton">Voir Plus</button>
                </Link>

                {/* Modale avec navigation des images */}
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

            <ActionContact />
        </div>
    );
}

export default MainPage;
