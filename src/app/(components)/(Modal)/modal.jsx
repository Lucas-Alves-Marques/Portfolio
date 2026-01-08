
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

        <div className={`fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-50 flex 
             entradaModal ${transition && 'opacity-0 ease-in-out duration-800'}`}>

            <div className="flex flex-col lg:flex-row bg-[#303030] rounded-2xl text-white 
                items-center lg:items-start justify-center p-4 md:p-8 m-auto w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto">

                <div className="w-full lg:w-2/3 flex items-center justify-center">
                    <video
                        width={800}
                        height={800}
                        controls
                        poster={project.urlImg}
                        className="rounded-2xl border-2 border-white w-full h-auto"
                    >
                        <source src={project.urlVideo} type="video/mp4" />

                    </video>
                </div>
                <div className="p-4 md:p-8 w-full lg:w-1/3 flex flex-col justify-between">

                    <div className="entrada flex flex-col items-center lg:items-start text-center lg:text-left">

                        <h1 className="uppercase font-bold text-xl md:text-[1.2rem]">{project.title}</h1>
                        <p>({project.date})</p>
                        <div className="mt-4">

                            <p className="text-justify text-sm md:text-base">{project.description}</p>

                        </div>

                    </div>
                    <div className="mt-8 md:mt-4 flex flex-col sm:flex-row justify-around gap-4 w-full">

                        <button
                            className="px-8 py-2 uppercase font-bold bg-black/50 
                                rounded-2xl hover:bg-black/70 transition-all cursor-pointer whitespace-nowrap"
                            onClick={() => window.open(project.repository)}>

                            Repositório

                        </button>
                        <button
                            className="px-8 py-2 uppercase font-bold bg-black/50 
                                rounded-2xl hover:bg-black/70 transition-all cursor-pointer whitespace-nowrap"
                            onClick={() => CloseModal()}>

                            Fechar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}
