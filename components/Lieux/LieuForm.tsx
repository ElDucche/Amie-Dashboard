'use client'

import { useRouter } from 'next/navigation'
import { Lieu } from '../../typing'

export const LieuForm = ({lieu}: {lieu: Lieu}) => {
  const router = useRouter()
  const modifyLieu = async (e: any) => {
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const body = {
        "adresse": entries.adresse,
        "codePostal": entries.codePostal,
        "coordoneesGps": lieu.coordoneesGps,
        "localisation": entries.localosation,
        "places": entries.places,
        "ville": entries.ville,
    }
    console.log(JSON.stringify(body));
    await fetch(`http://amie.labinno-mtech.fr/api/lieu/updatelieu/${lieu.idLieu}`,{
      headers: {
        'Content-Type': 'application/json'
        },
      method:'PUT',
      body: JSON.stringify(body),
    });

    router.refresh();
  }
  const deleteLieu = async (e:any) => {
    e.preventDefault();
    await fetch(`http://amie.labinno-mtech.fr/api/lieu/deletelieu/${lieu.idLieu}`,{
      headers: {
        'Content-Type': 'application/json'
        },
      method:'DELETE',
    });
    router.refresh()
  }

  return (
    <form className='grid gap-2' onSubmit={modifyLieu}>
        <input type="text" name='id' defaultValue={lieu.idLieu} className='hidden'/>
        <input className='capitalize p-4 input input-bordered' defaultValue={lieu.adresse} name='adresse' placeholder='Adresse'/>
        <input className=' capitalize p-4 input input-bordered' defaultValue={lieu.codePostal} name='codePostal' placeholder='Code Postal'/>
        <input className='text-sm p-4 input input-bordered'defaultValue={lieu.ville} name='ville' placeholder='Ville'/>
        <input name='localisation' type={'text'} defaultValue={lieu.localisation} className='p-4 input input-bordered' placeholder='Localisation'/>
        <input type="number" name='places' defaultValue={lieu.places} placeholder='Nombre de places' className='input p-4 input-bordered'/>
        <div className="grid grid-cols-2 gap-2">
          <button className='btn btn-primary text-base-100' type='submit'>Modifier</button>
          <button className='btn btn-error' onClick={deleteLieu}>Supprimer</button>
        </div>
    </form>
  )
}
