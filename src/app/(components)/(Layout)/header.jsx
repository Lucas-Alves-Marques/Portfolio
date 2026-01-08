'use client';
import Image from "next/image";
import ProfileImg from './../../../../public/img/MinhaFoto.jpeg';
import { usePathname, useRouter } from "next/navigation";

export default function Header() {

    const pathName = usePathname();

    const router = useRouter();

    return (

        <div className="w-full flex flex-col md:flex-row justify-between text-white items-center p-4 gap-4 md:gap-0">

            <div className="flex items-center font-semibold text-xl md:text-2xl">

                <Image
                    src={ProfileImg}
                    height={40}
                    width={40}
                    alt="Imagem de um homem negro, com cavanhaque, ocúlos redondos, e sorrindo"
                    className="rounded-4xl mr-4 md:h-[50px] md:w-[50px]"
                />
                <h1 className="whitespace-nowrap">Lucas Alves Marques</h1>

            </div>
            <ul className="flex gap-4 md:gap-8 font-semibold uppercase text-[0.9rem] md:text-[1.2rem]">

                <li
                    onClick={() => router.push('/')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName == '/' ? 'border-b-3 pb-1 border-white' : ''}`}>

                    Sobre

                </li>
                <li
                    onClick={() => router.push('/Projetos')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName == '/Projetos' ? 'border-b-3 pb-1 border-white' : ''}`}>

                    Projetos

                </li>
                <li
                    onClick={() => router.push('/Atividades')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName == '/Atividades' ? 'border-b-3 pb-1 border-white' : ''}`}>

                    Atividades

                </li>

            </ul>

        </div>

    );

}