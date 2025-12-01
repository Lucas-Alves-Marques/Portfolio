'use client';
import Image from "next/image";
import { useState } from "react";
import Modal from "../(Modal)/modal";

export default function Card({ project }) {

    const [open, setOpen] = useState(false);

    return (

        <div className="bg-[#303030a8] rounded-2xl w-120 text-white flex flex-col 
            items-center justify-center p-2">

            {open && (
                <>
                    <Modal project={project} setOpen={setOpen} />
                </>
            )}

            <div className="relative">
                <Image
                    src={project.urlImg}
                    alt={`Imagem do projeto ${project.title}`}
                    width={500}
                    height={500}
                    className="rounded-2xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 rounded-2xl p-4 entrada">

                    <h1 className="text-center uppercase font-bold text-[1.2rem]">{project.title}</h1>
                    <p className="text-center">({project.date})</p>

                </div>
            </div>
            <button
                onClick={() => setOpen(true)}
                className="mt-4 px-8 py-2 uppercase font-bold bg-black/50 rounded-2xl 
                        hover:bg-black/70 transition-all cursor-pointer">

                Ver Mais

            </button>

        </div>

    )

}