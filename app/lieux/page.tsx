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
        <div className="">
             <Title>Lieux</Title>
             <AddLieuButton />
             <div className="">
                <div className="mt-12 transition-all">
                    <table className="transition-all w-full rounded">
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
                        <tr className="h-12 text-neutral bg-neutral/5">
                            <th className='p-4 w-28 rounded-tl-lg'>Adresse</th>
                            <th className='p-4 w-28'>Code Postal</th>
                            <th className='p-4 w-44'>Ville</th>
                            <th className='p-4 w-40'>Localisation</th>
                            <th className="p-4 w-12 rounded-tr-lg">Modifier</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all duration-150">
                            {lieux.map(lieu =>( 
                                    <tr className="group h-12 transition-all hover:bg-neutral/5 border-b border-neutral/5" key={lieu.idLieu}>
                                        <th className="p-4 font-light capitalize transition-all text-xs">{lieu.adresse}</th>
                                        <th className="p-4 font-light capitalize transition-all"> {lieu.codePostal}</th>
                                        <th className="p-4 transition-all">{lieu.ville}</th>
                                        <th className="p-4 font-light transition-all text-sm">{lieu.localisation}</th>
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
  