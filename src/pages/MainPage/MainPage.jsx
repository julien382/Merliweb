import './MainPage.scss'
import mainAboveImage from "../../assets/undraw/contact.svg";

const MainPage = () => {

    return (
        <div className="mainPage">

            <div className="mainAbove">
                <h1>Surfez sur la vague du digital avec Merliweb</h1>
                <p>L'agence qui donne vie à votre présence en ligne.</p>
                <button className="submitButton">Contactez-Nous</button>
                <img src={mainAboveImage} className="mainAboveImage" alt="mainAboveImage" />
            </div>

        </div>
    )
}

export default MainPage
