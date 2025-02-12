import './MainPage.scss'
import building from "../../assets/undraw/building.svg";
import programming from "../../assets/undraw/programming.svg";
import studio from "../../assets/undraw/studio.svg";
import arrowBottom from "../../assets/arrowBottom.svg";
import arrowRight from "../../assets/arrowRight.svg";
import { Link } from "react-router-dom";
import ActionContact from '../../components/ActionContact/ActionContact';

const MainPage = () => {

    return (
        <div className="mainPage">

            <div className="mainAbove">
                <h1>Surfez sur la vague du digital avec Merliweb</h1>
                <p>{"L'agence qui donne vie à votre présence en ligne."}</p>
                <Link to="/contact">
                    <button className="submitButton">Contactez-Nous</button>
                </Link>
                <img src={building} className="mainAboveImage" alt="mainAboveImage" />
            </div>

            <div className='mainService'>
                <div className='containerTextMainService'>
                    <h2>Vous cherchez à développer votre présence en ligne et à attirer plus de clients ?</h2>
                    <p>Merliweb vous accompagne dans la création de votre site web et la gestion de votre communication digitale.
                    Nous vous aidons à optimiser votre visibilité, à capter l’attention de votre audience et à générer des conversions grâce à des solutions modernes et performantes.</p>
                    <img src={arrowBottom} className="arrow" alt="arrow" />
                </div>
                <div className='containerTextMainService'>
                    <h2>Création de sites web sur-mesure</h2>
                    <p>{"Nous concevons des sites web modernes, fonctionnels et responsive qui s'adaptent à tous vos besoins. Que vous ayez besoin d'un site vitrine, e-commerce, ou blog."}</p>
                    <Link to="/services">
                        <img src={arrowRight} className="arrow" alt="arrow" />
                    </Link>
                    <img src={programming} className="mainServiceImage" alt="programming" />
                </div>
                <div className='containerTextMainService'>
                    <h2>Création de contenu et gestion des réseaux sociaux</h2>
                    <p>De la photo à la vidéo, en passant par le drone et la GoPro, nous créons du contenu sur mesure et gérons vos réseaux pour maximiser votre impact digital.</p>
                    <Link to="/services">
                        <img src={arrowRight} className="arrow" alt="arrow" />
                    </Link>
                    <img src={studio} className="mainServiceImage" alt="mainServiceImage" />
                </div>
            </div>

            <div className='mainTemoignages'>
                <p>Témoignages</p>
                <h2>Ce que disent nos clients</h2>
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
            </div>

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

            <div className='mainProjets'>
                <p>Nos Projets</p>
                <h2>Découvrez nos réalisations</h2>
                <div className='mainProjet'></div>
                <div className='mainProjet'></div>
                <div className='mainProjet'></div>
                <Link to="/projets">
                    <button className="projetsButton">Voir Plus</button>
                </Link>
            </div>

            <ActionContact />
        </div>
    )
}

export default MainPage
