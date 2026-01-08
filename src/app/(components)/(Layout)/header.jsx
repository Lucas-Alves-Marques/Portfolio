'use client';
import Image from "next/image";
import ProfileImg from './../../../../public/img/MinhaFoto.jpeg';
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigate = (path) => {
        router.push(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full flex justify-between text-white items-center p-4 md:p-6 relative z-50">
            <div className="flex items-center font-semibold text-xl md:text-2xl">
                <Image
                    src={ProfileImg}
                    height={50}
                    width={50}
                    alt="Imagem de um homem negro, com cavanhaque, ocúlos redondos, e sorrindo"
                    className="rounded-4xl mr-3 md:mr-4 w-10 h-10 md:w-12 md:h-12"
                />
                <h1 className="whitespace-nowrap">Lucas Alves Marques</h1>
            </div>

            {/* Hamburger Button */}
            <button
                className="md:hidden text-2xl z-50 pointer-events-auto"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 font-semibold uppercase text-[1.1rem] lg:text-[1.2rem]">
                <li
                    onClick={() => navigate('/')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName === '/' ? 'border-b-3 pb-1 border-white' : ''}`}>
                    Sobre
                </li>
                <li
                    onClick={() => navigate('/Projetos')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName === '/Projetos' ? 'border-b-3 pb-1 border-white' : ''}`}>
                    Projetos
                </li>
                <li
                    onClick={() => navigate('/Atividades')}
                    className={`hover:scale-110 duration-300 transition-all cursor-pointer 
                    ${pathName === '/Atividades' ? 'border-b-3 pb-1 border-white' : ''}`}>
                    Atividades
                </li>
            </ul>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 bg-[#121212] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex flex-col gap-10 font-semibold uppercase text-2xl items-center">
                    <li
                        onClick={() => navigate('/')}
                        className={`cursor-pointer ${pathName === '/' ? 'text-blue-400' : ''}`}>
                        Sobre
                    </li>
                    <li
                        onClick={() => navigate('/Projetos')}
                        className={`cursor-pointer ${pathName === '/Projetos' ? 'text-blue-400' : ''}`}>
                        Projetos
                    </li>
                    <li
                        onClick={() => navigate('/Atividades')}
                        className={`cursor-pointer ${pathName === '/Atividades' ? 'text-blue-400' : ''}`}>
                        Atividades
                    </li>
                </ul>
            </div>
        </header>
    );
}
