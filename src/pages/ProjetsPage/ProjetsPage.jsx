import './ProjetsPage.scss'
import Above from '../../components/Above/Above'
import ActionContact from '../../components/ActionContact/ActionContact';
import asset from "../../assets/undraw/asset.svg";
import arrowRight from "../../assets/arrowRight.svg";
import { Link } from "react-router-dom";

const ProjetsPage = () => {
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
                <div className='projet'>
                    <img src={asset} className='projetImage' alt="image projet" />
                    <div className="projetInfo">
                        <div className="projetTitle">
                            <h3>Site vitrine</h3>
                            <h3>Merliweb</h3>
                        </div>
                        <img src={arrowRight} className="projetArrow" alt="arrow" />
                    </div>
                </div>
                <div className='projet'></div>
                <div className='projet'></div>
                <div className='projet'></div>
                <div className='projet'></div>
                <div className='projet'></div>
                <Link to="/projets">
                    <button className="projetsButton">Voir Plus</button>
                </Link>
            </div>

            <ActionContact />
        </div>
    )
}

export default ProjetsPage