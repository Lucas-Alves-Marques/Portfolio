import Style from '../Footer/Footer.module.css';
import { FaGithub as GitHub } from "react-icons/fa6";
import { FaLinkedinIn as LinkedIn } from "react-icons/fa";
import { CgMail as Email } from "react-icons/cg";

function Footer() {

    const navigateTo = (url) => {

        window.open(url)

    };

    return (

        <div className={Style.Footer}>

            <h2>Contatos</h2>

            <div className={Style.icons}>

                <GitHub onClick={() => { navigateTo('https://github.com/Lucas-Alves-Marques') }} />
                <LinkedIn onClick={() => { navigateTo('https://www.linkedin.com/in/lucas-alves-752055214/') }} />
                <Email onClick={() => { navigateTo('mailto:lucas.marquesalv24@gmail.com') }} />

            </div>

        </div>
    );
}

export default Footer;