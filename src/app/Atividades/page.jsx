'use client';
import { useEffect, useState } from "react";
import Card from "../(components)/(Cards)/Card";

export default function Atividades() {

    const [atividades, setAtividades] = useState([]);

    useEffect(() => {

        fetch('./db.json', {

            method: 'GET',
            headers: {

                'Content-Type': 'application/json'

            }

        })
            .then(resp => resp.json())
            .then(data => setAtividades(data.atividades))
            .catch(err => console.log(err))

    }, [])

    return (

        <div className="w-full h-full flex flex-col entrada2 px-4 md:px-8 pb-10">

            <h1 className="text-center text-white uppercase w-full font-bold text-3xl md:text-4xl">Atividades</h1>

            <div className={`mt-10 md:mt-15 mb-10 ${atividades.length > 2
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'
                : 'flex flex-wrap items-center justify-center gap-8 md:gap-20'}`}>

                {atividades.map((atividade) => (

                    <Card project={atividade} key={atividade.id} />

                ))}
                <div className="flex bg-[#303030a8] rounded-2xl w-full max-w-[30rem] h-[19rem] text-white 
                             items-center justify-center uppercase font-bold text-lg md:text-xl text-center p-4">

                    <p>Atividade em produção...</p>

                </div>

            </div>

        </div>


    );

}