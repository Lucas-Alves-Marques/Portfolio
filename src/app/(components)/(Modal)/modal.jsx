import { useState } from "react";

export default function Modal({ project, setOpen }) {

    const [transition, setTransition] = useState(false);

    const CloseModal = () => {

        setTransition(true);

        setTimeout(() => {

            setOpen(false);
            setTransition(false);

        }, 800);

    };

    return (

        <div className={`fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-50 flex overflow-y-auto p-4 md:p-8 
             entradaModal ${transition && 'opacity-0 ease-in-out duration-800'}`}>

            <div className="flex flex-col lg:flex-row bg-[#1e1e1e] rounded-2xl text-white 
                items-center lg:items-start justify-center p-4 md:p-8 m-auto w-full max-w-6xl shadow-2xl relative">

                <div className="w-full lg:w-2/3">
                    <video
                        width="100%"
                        height="auto"
                        controls
                        poster={project.urlImg}
                        className="rounded-2xl border-2 border-white/20 shadow-lg"
                    >
                        <source src={project.urlVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="p-4 md:p-8 w-full lg:w-1/3 flex flex-col justify-between">

                    <div className="entrada flex flex-col">

                        <h1 className="uppercase font-bold text-xl md:text-[1.2rem]">{project.title}</h1>
                        <p className="text-gray-400">({project.date})</p>
                        <div className="mt-4">

                            <p className="text-justify text-sm md:text-base leading-relaxed">{project.description}</p>

                        </div>

                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-around">

                        <button
                            className="flex-1 px-8 py-3 uppercase font-bold bg-white/10 
                                border border-white/20 rounded-2xl hover:bg-white/20 transition-all cursor-pointer text-sm"
                            onClick={() => window.open(project.repository)}>

                            Repositório

                        </button>
                        <button
                            className="flex-1 px-8 py-3 uppercase font-bold bg-red-500/20 
                                border border-red-500/30 text-red-200 rounded-2xl hover:bg-red-500/30 transition-all cursor-pointer text-sm"
                            onClick={() => CloseModal()}>

                            Fechar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}