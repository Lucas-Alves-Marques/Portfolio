import Style from './NavBar.module.css';
import imgProfile from '../../Img/MinhaFoto.jpeg';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const navigateToMain = () => {

        navigate('/')

    };

    return (

        <div className={Style.navBar}>

            <div className={Style.profile} onClick={() => { navigateToMain() }}>

                <img
                    src={imgProfile}
                    alt='Homen moreno com óculos aredondados, com brinco de cruz na orelha direita, camisa branca e sorrindo'
                />

                <h3>Lucas Alves</h3>

            </div>
            <ul className={Style.navigation}>

                <li>Sobre Mim</li>
                <li>Projetos</li>
                <li>Atividades</li>

            </ul>

        </div>

    );

};

export default NavBar;