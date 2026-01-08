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

        <div className="w-full h-full flex flex-col entrada2">

            <h1 className="text-center text-white uppercase w-full font-bold text-4xl">Atividades</h1>

            <div className={`mt-15 ${atividades.length > 2
                ? 'grid grid-cols-3 gap-y-10 gap-x-20 mx-auto overflow-y-auto max-h-[calc(95vh-19.5rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
                : 'flex items-center justify-center gap-20'}`}>

                {atividades.map((atividade) => (

                    <Card project={atividade} key={atividade.id} />

                ))}
                <div className="flex bg-[#303030a8] rounded-2xl w-[30rem] h-[19rem] text-white 
                             items-center justify-center uppercase font-bold text-xl">

                    <p>Atividade em produção...</p>

                </div>

            </div>

        </div>


    );

}