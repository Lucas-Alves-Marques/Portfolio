import Style from './Main.module.css';
import imgProfile from '../../Img/MinhaFoto.jpeg';

function Main() {

    return (

        <div className={Style.Main}>

            <img src={imgProfile}
                alt='Homen moreno com óculos aredondados, com brinco de cruz na orelha direita, camisa branca e sorrindo'
            />

            <div className={Style.presentation} >

                <h1>Olá, Sou Lucas Alves Maques</h1>
                <h4>Desenvolvedor Front-End Júnior em Formação</h4>
                <h5>React.js | Node.js </h5>
                <a
                    href="/Curriculum_LucasAlves.pdf"
                    download="Curriculum_LucasAlves.pdf"
                    className={Style.curriculum}
                >
                    Baixar Currículo
                </a>

            </div>


        </div>

    )
}

export default Main;