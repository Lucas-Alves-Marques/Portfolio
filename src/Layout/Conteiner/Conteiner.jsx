import Style from './Conteiner.module.css';
import NavBar from '../NavBAr/NavBar';
import Footer from '../Footer/Footer';

function Conteiner(props) {

    return (

        <div className={Style.conteiner}>

            <NavBar />

            {props.children}

            <Footer />

        </div>

    )

};

export default Conteiner;