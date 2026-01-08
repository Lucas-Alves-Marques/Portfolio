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

        <div className="w-full h-full flex flex-col entrada2 py-4 w-full ">

            <h1 className="text-center text-white uppercase w-full font-bold text-3xl md:text-4xl">Projetos</h1>

            <div className={`mt-8 md:mt-15 gap-10 lg:gap-20 mx-auto overflow-y-auto max-h-none md:max-h-[calc(95vh-19.5rem)]
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-items-center 
                 flex flex-wrap w-[100%] justify-center items-center`}>

                {projects.map((project) => (

                    <Card project={project} key={project.id} />

                ))}
                <div className="flex bg-[#303030a8] rounded-2xl w-full max-w-[30rem] h-[19rem] text-white 
                         items-center justify-center uppercase font-bold text-xl p-4 text-center">

                    <p>Projeto em produção...</p>

                </div>

            </div>

        </div>

    );

}