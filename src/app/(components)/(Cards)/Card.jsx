'use client';
import Image from "next/image";
import { useState } from "react";
import Modal from "../(Modal)/modal";

export default function Card({ project }) {

    const [open, setOpen] = useState(false);

    return (

        <div className="bg-[#303030a8] rounded-2xl w-full max-w-[30rem] text-white flex flex-col 
            items-center justify-center p-2 md:p-3 mx-auto">

            {open && (
                <>
                    <Modal project={project} setOpen={setOpen} />
                </>
            )}

            <div className="relative w-full">
                <Image
                    src={project.urlImg}
                    alt={`Imagem do projeto ${project.title}`}
                    width={500}
                    height={300}
                    className="rounded-2xl w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 rounded-2xl p-4 entrada text-center">

                    <h1 className="uppercase font-bold text-lg md:text-[1.2rem]">{project.title}</h1>
                    <p className="text-sm md:text-base">({project.date})</p>

                </div>
            </div>
            <button
                onClick={() => setOpen(true)}
                className="mt-4 px-6 md:px-8 py-2 uppercase font-bold bg-black/50 rounded-2xl 
                        hover:bg-black/70 transition-all cursor-pointer text-sm md:text-base">

                Ver Mais

            </button>

        </div>

    )

}