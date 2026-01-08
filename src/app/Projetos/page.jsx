'use client'
import Card from "../(components)/(Cards)/Card";
import { useEffect, useState } from "react";

export default function Projetos() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch("./db.json", {

            method: 'GET',
            headers: {

                'Content-Type': 'application/json'

            }

        })
            .then(resp => resp.json())
            .then(data => setProjects(data.projetos))
            .catch(err => console.log(err))

    }, [])


    return (

        <div className="w-full h-full flex flex-col entrada2">

            <h1 className="text-center text-white uppercase w-full font-bold text-4xl">Projetos</h1>

            <div className={`mt-15 ${projects.length > 2
                ? 'grid grid-cols-3 gap-y-10 gap-x-20 mx-auto overflow-y-auto max-h-[calc(95vh-19.5rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
                : 'flex items-center justify-center gap-20'}`}>

                {projects.map((project) => (

                    <Card project={project} key={project.id} />

                ))}
                <div className="flex bg-[#303030a8] rounded-2xl w-[30rem] h-[19rem] text-white 
                         items-center justify-center uppercase font-bold text-xl">

                    <p>Projeto em produção...</p>

                </div>

            </div>

        </div>

    );

}