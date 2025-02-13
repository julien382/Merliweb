import './ServicesPage.scss'
import Above from '../../components/Above/Above'
import multitasking from "../../assets/undraw/multitasking.svg";

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
                <div className='serviceWeb'>
                    <img src={multitasking} className="serviceWebImage" alt="serviceWebImage" />
                    <h3 className='serviceWebName'>Design UX/UI</h3>
                    <p className='serviceWebText'>Création d’interfaces modernes et ergonomiques</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage