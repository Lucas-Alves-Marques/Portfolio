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

            <div className="flex bg-[#303030a8] rounded-2xl text-white 
                items-start justify-center p-8 m-auto w-[90rem]">

                <video
                    width={800}
                    height={800}
                    controls
                    poster={project.urlImg}
                    className="rounded-2xl border-2 border-white"
                >
                    <source src={project.urlVideo} type="video/mp4" />

                </video>
                <div className="p-8 h-[25rem] flex flex-col justify-between">

                    <div className="entrada flex flex-col">

                        <h1 className="uppercase font-bold text-[1.2rem]">{project.title}</h1>
                        <p>({project.date})</p>
                        <div className="mt-4">

                            <p className="text-justify">{project.description}</p>

                        </div>

                    </div>
                    <div className="mt-4 flex justify-around">

                        <button
                            className="mt-4 px-8 py-2 uppercase font-bold bg-black/50 
                                rounded-2xl hover:bg-black/70 transition-all cursor-pointer"
                            onClick={() => window.open(project.repository)}>

                            Repositório

                        </button>
                        <button
                            className="mt-4 px-8 py-2 uppercase font-bold bg-black/50 
                                rounded-2xl hover:bg-black/70 transition-all cursor-pointer"
                            onClick={() => CloseModal()}>

                            Fechar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}