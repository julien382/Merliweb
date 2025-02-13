import './ProjetsPage.scss'
import Above from '../../components/Above/Above'
import asset from "../../assets/undraw/asset.svg";
import ActionContact from '../../components/ActionContact/ActionContact';

const ProjetsPage = () => {
    return (
        <div className='projetsPage'>
            <Above 
                img={asset} 
                title={"Nos projets"} 
                text={"Nous collaborons étroitement avec nos clients pour donner vie à leurs ambitions digitales, en apportant des solutions personnalisées et innovantes. Voici quelques-uns des projets :"}
            />

            <ActionContact />
        </div>
    )
}

export default ProjetsPage