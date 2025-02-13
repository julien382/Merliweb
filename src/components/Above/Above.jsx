import './Above.scss'
import multitasking from "../../assets/undraw/multitasking.svg";
import arrowBottom from "../../assets/arrowBottom.svg";

const Above = () => {
    return (
        <div className="above">
            <img src={multitasking} className="aboveImage" alt="mainAboveImage" />
            <h1>Nos Services</h1>
            <p>{"Du développement web à la communication digitale, nous créons des solutions sur-mesure pour renforcer votre présence en ligne et atteindre vos objectifs. Voici nos services :"}</p>
            <img src={arrowBottom} className="arrow" alt="arrow" />
        </div>
    )
}

export default Above