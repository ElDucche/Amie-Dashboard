'use client'

import { useRouter } from "next/navigation";
import React from "react";

export const AddUserForm = () => {
    const router = useRouter()

    const addNewUser = async (event: any) => {
        const formData = new FormData(event.currentTarget);
        const entries = Object.fromEntries(formData.entries());
        const body = {
            "mail": entries.mail,
            "motDePasse": entries.motDePasse,
            "nom": entries.nom,
            "prenom": entries.prenom
        }
        
        await fetch("http://amie.labinno-mtech.fr/api/utilisateur/addutilisateur", {
            headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            }
        );
        
        router.refresh()

    }
    
  return (
    <form className='grid gap-2 h-full' onSubmit={addNewUser}>
        <input className='capitalize input input-bordered p-4' name={'prenom'} placeholder='Prénom'/>
        <input className=' uppercase input input-bordered p-4' name={'nom'} placeholder='Nom' />
        <input type="email" name="mail" className="input input-bordered p-4" placeholder="Email"/>
        <input type="password" name="motDePasse" className="input input-bordered p-4" placeholder="Mot de passe"/>
        <button className='bottom-3 btn btn-primary text-base-100' type='submit'>Ajouter</button>
    </form>
  )
}
