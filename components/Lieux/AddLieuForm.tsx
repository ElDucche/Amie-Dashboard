'use client'


import { useRouter } from 'next/navigation'
import { Lieu } from '../../typing'



export const AddLieuForm = () => {
  const router = useRouter()
  const addNewLieu = async (e: any) => {
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const body = {
        "adresse": entries.adresse,
        "codePostal": entries.codePostal,
        "coordoneesGps": entries.gps,
        "localisation": entries.localisation,
        "places": entries.places,
        "ville": entries.ville,
    }
    console.log(JSON.stringify(body));
    await fetch(`http://amie.labinno-mtech.fr/api/lieu/addlieu`,{
      headers: {
        'Content-Type': 'application/json'
        },
      method:'POST',
      body: JSON.stringify(body),
    });

    router.refresh();
  }

  return (
    <form className='grid gap-2' onSubmit={addNewLieu}>
        <input className='capitalize p-4 input input-bordered' name='adresse' placeholder='Adresse'/>
        <input className=' capitalize p-4 input input-bordered' name='codePostal' placeholder='Code Postal'/>
        <input className='text-sm p-4 input input-bordered' name='ville' placeholder='Ville'/>
        <input name='localisation' className='p-4 input input-bordered' placeholder='Localisation'/>
        <input name='gps' className='p-4 input input-bordered' placeholder='Coordonées GPS'/>
        <input type="number" name='places' placeholder='Nombre de places' className='input p-4 input-bordered'/>
        <button className='btn btn-primary text-base-100' type='submit'>Ajouter</button>
    </form>
  )
}