'use client'


import { useRouter } from 'next/navigation'
import { User } from '../../typing'



export const UserForm = ({user}: {user: User}) => {
  const router = useRouter()
  const modifyUser = async (e: any) => {
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const body = {
      "mail": entries.mail,
      "motDePasse": entries.motDePasse,
      "nom": entries.nom,
      "prenom": entries.prenom,
    }
    await fetch(`http://amie.labinno-mtech.fr/api/utilisateur/updateutilisateur/${user.idUtilisateur}`,{
      headers: {
        'Content-Type': 'application/json'
        },
      method:'PUT',
      body: JSON.stringify(body),
    });

    router.refresh();
  }

  return (
    <form className='grid gap-2' onSubmit={modifyUser}>
        <input type="text" defaultValue={user.idUtilisateur} className='hidden'/>
        <input className='capitalize p-4 input input-bordered' defaultValue={user.prenom} name='prenom'/>
        <input className=' uppercase p-4 input input-bordered' defaultValue={user.nom} name='nom' />
        <input className='text-sm p-4 input input-bordered'defaultValue={user.mail} name='mail' type={'email'}/>
        <input type="password" name='motDePasse' defaultValue={user.motDePasse} className='p-4 input input-bordered'/>
        <div className="grid grid-cols-2 gap-2">
          <button className='btn btn-primary text-base-100' type='submit'>Modifier</button>
          <button className='btn btn-error' onClick={(e) => {fetch(`http://amie.labinno-mtech.fr/api/utilisateur/deleteutilisateur/${user.idUtilisateur}`,{method:'DELETE',});router.refresh()}}>Supprimer</button>
        </div>
    </form>
  )
}
