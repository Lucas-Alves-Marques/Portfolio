'use client';
import Image from "next/image";
import ProfileImg from './../../public/img/MinhaFoto.jpeg';
import { FaNodeJs as Node } from "react-icons/fa";
import { PiFileSql as SQL } from "react-icons/pi";
import { SiNextdotjs as NextJS } from "react-icons/si";

export default function Home() {

  return (

    <div className="flex flex-col justify-center text-white m-auto entrada2 max-w-7xl w-full md:h-[calc(100vh-14rem)] h-auto py-8 md:py-0">

      <div className="flex flex-col-reverse md:flex-row mt-8 items-center justify-center gap-8">

        <div className="text-[1.1rem] md:text-[1.3rem] max-w-4xl">

          <h1 className="uppercase font-semibold text-2xl md:text-3xl lg:text-4xl text-center md:text-center">Bem-Vindo ao Meu Portifólio</h1>
          <p className="text-justify my-4">

            Olá! Eu sou o Lucas Alves Marques, Técnico em Desenvolvimento de Sistemas e atualmente trabalho
            como Desenvolvedor de Software Júnior em uma empresa que presta serviços para concursos públicos.
            No dia a dia, desenvolvo pequenos sistemas e ferramentas que facilitam as rotinas internas dos
            departamentos — e é justamente essa parte prática da programação que mais me motiva:
            ver algo que eu criei ajudando outras pessoas a trabalhar melhor.

          </p>
          <p className="text-justify mb-4">

            Com o tempo, descobri que o que eu mais gosto é o lado visual e interativo do desenvolvimento.
            Por isso, tenho focado bastante em front-end, mas também curto explorar o back-end e banco de dados
            quando o projeto pede algo mais completo.

          </p>
          <p className="text-justify">

            Hoje meu objetivo é continuar crescendo como desenvolvedor front-end ou full-stack,
            sempre buscando aprender mais e criar soluções úteis, bonitas e funcionais.

          </p>

        </div>
        <Image
          src={ProfileImg}
          alt="Imagem de um homem negro, com cavanhaque, ocúlos redondos, e sorrindo"
          className="rounded-4xl h-[15rem] w-auto md:h-[25rem]"
        />

      </div>
      <div className="flex flex-col mt-8 md:mt-16">

        <div className="flex gap-10 md:gap-20 py-4 items-center justify-center text-4xl md:text-6xl">

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