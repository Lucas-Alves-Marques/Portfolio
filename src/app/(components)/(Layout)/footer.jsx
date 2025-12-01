'use client';
import { FaGithub as GitHub } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";

export default function Footer() {

    return (

        <div className="w-full flex flex-col items-center justify-center text-white
             bg-black/50 py-4 backdrop-blur-sm">

            <h1 className="uppercase text-2xl font-semibold mb-4">Contatos</h1>
            <div className="flex gap-10 text-3xl">

                <GitHub
                    onClick={ () => window.open( 'https://github.com/Lucas-Alves-Marques','_blank' ) }
                    className="hover:scale-110 duration-300 transition-all cursor-pointer"
                />
                <Linkedin
                    onClick={ () => window.open( 'https://www.linkedin.com/in/lucas-alves-752055214/','_blank'  ) }
                    className="hover:scale-110 duration-300 transition-all cursor-pointer"
                />
                <Email
                    onClick={ () => window.open( 'mailto:lucas.marquesalv24@gmail.com','_blank') }
                    className="hover:scale-110 duration-300 transition-all cursor-pointer"
                />

            </div>

        </div>

    );

}