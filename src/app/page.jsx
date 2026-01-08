'use client';
import Image from "next/image";
import ProfileImg from './../../public/img/MinhaFoto.jpeg';
import { FaNodeJs as Node } from "react-icons/fa";
import { PiFileSql as SQL } from "react-icons/pi";
import { SiNextdotjs as NextJS } from "react-icons/si";

export default function Home() {

  return (

    <div className="flex flex-col justify-between text-white m-auto px-4 md:px-8 entrada2 max-w-7xl">

      <div className="m-auto flex flex-col md:flex-row mt-8 items-center justify-center gap-8 md:gap-16">

        <div className="flex-1 text-[1.1rem] md:text-[1.3rem] order-2 md:order-1">

          <h1 className="uppercase font-semibold text-3xl md:text-5xl text-center md:text-left mb-6">Bem-Vindo ao Meu Portfólio</h1>
          <p className="text-justify my-4 leading-relaxed">

            Oi! Eu sou o Lucas Alves Marques, Técnico em Desenvolvimento de Sistemas e atualmente trabalho
            como Desenvolvedor de Software Júnior em uma empresa que presta serviços para concursos públicos.
            No dia a dia, desenvolvo pequenos sistemas e ferramentas que facilitam as rotinas internas dos
            departamentos — e é justamente essa parte prática da programação que mais me motiva:
            ver algo que eu criei ajudando outras pessoas a trabalhar melhor.

          </p>
          <p className="text-justify mb-4 leading-relaxed">

            Com o tempo, descobri que o que eu mais gosto é o lado visual e interativo do desenvolvimento.
            Por isso, tenho focado bastante em front-end, mas também curto explorar o back-end e banco de dados
            quando o projeto pede algo mais completo.

          </p>
          <p className="text-justify leading-relaxed">

            Hoje meu objetivo é continuar crescendo como desenvolvedor front-end ou full-stack,
            sempre buscando aprender mais e criar soluções úteis, bonitas e funcionais.

          </p>

        </div>
        <div className="flex-shrink-0 order-1 md:order-2">
          <Image
            src={ProfileImg}
            alt="Imagem de um homem negro, com cavanhaque, ocúlos redondos, e sorrindo"
            className="rounded-4xl h-[18rem] w-[18rem] md:h-[25rem] md:w-[25rem] object-cover shadow-2xl"
          />
        </div>

      </div>
      <div className="flex flex-col mt-12 mb-12">

        <div className="flex gap-10 md:gap-20 py-4 items-center justify-center text-5xl md:text-7xl">

          <NextJS className="hover:text-black transition-all duration-500
              hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <Node className="hover:text-[#33ff00] transition-all duration-500
              hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(0,100,0,0.8)]" />
          <SQL className="hover:text-blue-400 transition-all duration-500
              hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(0,0,100,0.8)]" />

        </div>

      </div>

    </div>

  );

}
