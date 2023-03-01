import { ModifyUserButton } from "../../components/layout/ModifyUserButton";
import Title from "../../components/layout/Title";
import { AddLieuButton } from "../../components/layout/AddLieuButton";
import { Lieu } from "../../typing";
import React from "react";
import { ModifyLieuButton } from "../../components/layout/ModifyLieuButton";


const fetchLieux = async () => {
    const res = await fetch('http://amie.labinno-mtech.fr/api/lieu/getalllieux')
    const lieux: Lieu[] = await res.json()
    return lieux;
}

export default async function Lieux() {
    const lieux = await fetchLieux(); 
   return (
        <div className="ml-4">
             <Title>Lieux</Title>
             <AddLieuButton />
             <div className="">
                <div className="mt-12 transition-all">
                    <table className="transition-all w-3/4 shadow-[5px_5px_0_0_rgba(106,165,23,0.12)] border border-secondary">
                        {/* <!-- head --> */}
                        {/* type Lieu = {
                            adresse: string;
                            codePostal: string;
                            coordoneesGps: string;
                            idLieu: number;
                            localisation: string;
                            ville: string;
                        } */}
                        <thead >
                        <tr className="h-12">
                            <th className='p-4 h-12 w-28 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Adresse</th>
                            <th className='p-4 h-12 w-28 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Code Postal</th>
                            <th className='p-4 h-12 w-44 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Ville</th>
                            <th className='p-4 h-12 w-40 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Localisation</th>
                            <th className="p-4 h-12 w-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all">Modifier</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all duration-150">
                            {lieux.map(lieu =>( 
                                    <tr className="group transition-all hover:bg-secondary border-b border-secondary" key={lieu.idLieu}>
                                        <th className="p-4 h-12 font-light capitalize transition-all">{lieu.adresse}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {lieu.codePostal}</th>
                                        <th className="p-4 h-12 font-light transition-all">{lieu.ville}</th>
                                        <th className="p-4 h-12 font-light transition-all">{lieu.localisation}</th>
                                        <th className="p-4 h-12">
                                            <ModifyLieuButton lieu={lieu} />
                                        </th>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    )
}
  