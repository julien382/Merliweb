import './ProjetsPage.scss'
import Above from '../../components/Above/Above'
import ActionContact from '../../components/ActionContact/ActionContact';
import asset from "../../assets/undraw/asset.svg";
import { Link } from "react-router-dom";
import Projet from '../../components/Projet/Projet';

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
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Projet img={asset} type={"Site vitrine"} title={"Merliweb"}/>
                <Link to="/projets">
                    <button className="projetsButton">Voir Plus</button>
                </Link>
            </div>

            <ActionContact />
        </div>
    )
}

export default ProjetsPage