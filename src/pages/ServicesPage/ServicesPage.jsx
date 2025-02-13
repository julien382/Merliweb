import './ServicesPage.scss'
import Above from '../../components/Above/Above'
import multitasking from "../../assets/undraw/multitasking.svg";
import designer from "../../assets/undraw/designer.svg";
import shopping from "../../assets/undraw/shopping.svg";
import device from "../../assets/undraw/device.svg";
import react from "../../assets/undraw/react.svg";
import projections from "../../assets/undraw/projections.svg";
import fastLoading from "../../assets/undraw/fastLoading.svg";
import social from "../../assets/undraw/social.svg";
import drone from "../../assets/undraw/drone.svg";
import socialDashboard from "../../assets/undraw/socialDashboard.svg";
import color from "../../assets/undraw/color.svg";
import ServiceWeb from '../../components/ServiceWeb/ServiceWeb';
import { Link } from "react-router-dom";

const ServicesPage = () => {
    return (
        <div className='servicesPage'>
            <Above 
                img={multitasking} 
                title={"Nos Services"} 
                text={"Du développement web à la communication digitale, nous créons des solutions sur-mesure pour renforcer votre présence en ligne et atteindre vos objectifs. Voici nos services :"}
            />
            <div className='servicesWeb'>
                <p>Nos services</p>
                <h2>Découvrez nos services Web</h2>
                <ServiceWeb img={designer} title={"Design UX/UI"} text={"Création d’interfaces modernes et ergonomiques"}/>
                <ServiceWeb img={shopping} title={"Développement de sites web"} text={"Sites vitrines, e-commerce, portfolios, blogs, Applications web"}/>
                <ServiceWeb img={device} title={"Responsive Design"} text={"Sites adaptés à toutes les tailles d’écran (mobile, tablette, ordinateur)"}/>
                <ServiceWeb img={react} title={"Développement personnalisé"} text={"Nous codons votre site de A à Z en react. pour garantir performance et fluidité."}/>
                <ServiceWeb img={projections} title={"Référencement SEO"} text={"Optimisation pour Google et les moteurs de recherche"}/>
                <ServiceWeb img={fastLoading} title={"Maintenance & mises à jour"} text={"Sécurisation, optimisation et évolution du site"}/>
            </div>

            <div className='servicesWeb'>
                <h2>Découvrez nos services de communication</h2>
                <ServiceWeb img={drone} title={"Production Visuelle"} text={"Vidéos, photos, prises de vue aériennes avec drone, création de visuels professionnels."}/>
                <ServiceWeb img={socialDashboard} title={"Stratégie & Gestion Digitale"} text={"Gestion des réseaux sociaux, création de contenu, campagnes publicitaires."}/>
                <ServiceWeb img={color} title={"Identité Visuelle & Branding"} text={"Conception de logos, chartes graphiques, création de supports de communication."}/>
            </div>

            <div className='servicesWebContact'>
                <h2>Construisez votre projet digital avec nous !</h2>
                <img src={social} className="servicesWebImage" alt="mainTemoignageImage" />
                <p className='servicesWebName'>{"Nous analysons votre entreprise pour définir les solutions digitales parfaitement adaptées à vos besoins. "}</p>
                <p className='servicesWebText'>{"Chaque projet est unique, c’est pourquoi nous vous proposons des options sur-mesure, en mettant l'accent sur ce qui vous correspond le mieux."}</p>
                <p className='servicesWebTextAction'>{"Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé."}</p>
                <Link to="/contact">
                    <button className="submitButton">Obtenir un devis</button>
                </Link>
            </div>
        </div>
    )
}

export default ServicesPage