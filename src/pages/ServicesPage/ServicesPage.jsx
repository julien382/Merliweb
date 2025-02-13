import './ServicesPage.scss'
import Above from '../../components/Above/Above'
import multitasking from "../../assets/undraw/multitasking.svg";
import ServiceWeb from '../../components/ServiceWeb/ServiceWeb';

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
                <ServiceWeb img={multitasking} title={"Design UX/UI"} text={"Création d’interfaces modernes et ergonomiques"}/>
                <ServiceWeb img={multitasking} title={"Développement de sites web"} text={"Sites vitrines, e-commerce, portfolios, blogs, Applications web"}/>
                <ServiceWeb img={multitasking} title={"Responsive Design"} text={"Sites adaptés à toutes les tailles d’écran (mobile, tablette, ordinateur)"}/>
                <ServiceWeb img={multitasking} title={"Développement personnalisé"} text={"Nous codons votre site de A à Z en react. pour garantir performance et fluidité."}/>
                <ServiceWeb img={multitasking} title={"Référencement SEO"} text={"Optimisation pour Google et les moteurs de recherche"}/>
                <ServiceWeb img={multitasking} title={"Maintenance & mises à jour"} text={"Sécurisation, optimisation et évolution du site"}/>
            </div>

            <div className='servicesWeb'>
                <h2>Découvrez nos services de communication</h2>
                <ServiceWeb img={multitasking} title={"Production Visuelle"} text={"Vidéos, photos, prises de vue aériennes avec drone, création de visuels professionnels."}/>
                <ServiceWeb img={multitasking} title={"Stratégie & Gestion Digitale"} text={"Gestion des réseaux sociaux, création de contenu, campagnes publicitaires."}/>
                <ServiceWeb img={multitasking} title={"Identité Visuelle & Branding"} text={"Conception de logos, chartes graphiques, création de supports de communication."}/>
            </div>
        </div>
    )
}

export default ServicesPage