'use client'
import { useRouter } from "next/navigation";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'  
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Lieu, User } from "../../typing";
import { GiTeacher } from "react-icons/gi";
import { BsClipboardCheck } from "react-icons/bs";
import React, { useState } from "react";
import { VscInfo } from "react-icons/vsc";
import { MdOndemandVideo } from "react-icons/md";
import { HiDocumentSearch } from "react-icons/hi";

export const AddEventForm = () => {
    const router = useRouter()
    const lieux = useQuery({
        queryKey: ['lieuData'],
        queryFn: () =>
          fetch('http://amie.labinno-mtech.fr/api/lieu/getalllieux').then(
            (res) => res.json(),
          ),
      })
      console.log(lieux)
      const users = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateurs').then((res) => res.json()),
      })
      console.log(users)
    const addNewEvent = async (event: any) => {
        const formData = new FormData(event.currentTarget);
        const entries = Object.fromEntries(formData.entries());
        const body = {
            "date_debut": entries.date_debut,
            "date_fin": entries.date_fin,
            "description": entries.description,
            "heure_debut": entries.heure_debut,
            "heure_fin": entries.heure_fin,
            "image": "",
            "label": entries.label,
            "lien_replay": entries.replay,
            "lien_ressources": entries.ressources,
            "statut": entries.statut
        }
        
        fetch(`http://amie.labinno-mtech.fr/api/evenement/createevenement/${entries.creator}/${entries.lieux}`, {
            headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST',
                //@ts-ignore
                body: JSON.stringify(body)
            }
        );
        router.refresh()
    }
    
  return (
    <form className='grid gap-2 p-2 rounded-xl m-auto' onSubmit={addNewEvent}>
            {/* l'image de l'event */}
                <input type="file" name="photo" id="photo" className="file-input file-input-bordered file-input-lg w-full"/>
            {/* Le titre de l'event */}
            <input 
                className='input input-bordered text-xl font-medium my-2 first-letter:capitalize' 
                name='label'
                placeholder="Titre"
            />
            
            {/* La c'est la typologie de l'évènement mais on verra ça plus tard */}
            {/* <label className=''>
                <div className="flex items-center justify-between">
                    <div className="">
                        <select className="select select-bordered w-44 text-center" id='selector'>
                            <option disabled selected value={"Security"}><Tag type={event.category}/></option>
                            <option value={"Security"}><Tag type="Security"/></option>
                            <option value={"Game"}><Tag type="Game" /></option>
                            <option value={"Analysis"}><Tag type="Analysis" /></option>
                            <option value={"Data"}><Tag type="Data" /></option>
                        </select>
                    </div>
                    <Tag type={event.category} />
                </div>
            </label> */}
             <label className='flex items-center'>
                <VscInfo size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='description'
                    type="text-area"
                    placeholder="Description"
                />
            </label>
            <label className='flex items-center'>
                <AiOutlineCalendar size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <div>
                    <input type="text" name="date_debut" placeholder="Date de début : JJ/MM/AAAA" className="input input-bordered"/>
                    <input type="text" name="date_fin" placeholder="Date de fin : JJ/MM/AAAA" className="input input-bordered"/>
                </div>
                
            </label>
            <label className='flex items-center'>
                <AiOutlineClockCircle size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <div>
                    <input type="text" name="heure_debut" placeholder="Heure de début : hh:mm" className="input input-bordered"/>
                    <input type="text" name="heure_fin" placeholder="heure de fin : hh:mm" className="input input-bordered"/>
                </div>
                
            </label>
            <label className='flex items-center'>
                <FaMapMarkerAlt size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <select name="lieux" id="lieux" className="input input-bordered w-full outline-none">
                    { lieux.data?.map((lieu: Lieu) => (
                        <option value={lieu.idLieu} key={lieu.idLieu}>{lieu.adresse}, {lieu.ville}</option>
                    ))}
                </select>
            </label>
            <label className='flex items-center'>
                <FaUser size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <select name="creator" id="creator" className="input input-bordered w-full outline-none">
                    { users.data?.map((user: User) => (
                        <option value={user.idUtilisateur} key={user.idUtilisateur}>{user.prenom} {user.nom}</option>
                    ))}
                </select>
            </label>
            <label className='flex items-center'>
                <GiTeacher size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='organizer'
                />
            </label>
            <label className='flex items-center'>
                <BsClipboardCheck size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <select name="statut" id="statut" className="input input-bordered w-full outline-none">
                    <option value="">-- Statut --</option>
                    <option value="Waiting">En attente</option>
                    <option value="Validated">Validé</option>
                    <option value="Failed">Refusé</option>
                </select>
            </label>
            <label className='flex items-center'>
                <MdOndemandVideo size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='replay'
                    placeholder="Lien du replay"
                />
            </label>
            <label className='flex items-center'>
                <HiDocumentSearch size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='ressources'
                    placeholder="Lien des ressources"
                />
            </label>
            <button className='btn btn-primary' type='submit'>Ajouter</button>
        </form>
  )
}