'use client'


import { useRouter } from 'next/navigation'
import { User } from '../../typing'



export const UserForm = ({user}: {user: User}) => {
  const router = useRouter()
  console.log(user)
  const modifyUser = async (e: any) => {
    e.preventdefault();
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const body = {
      "mail": entries.mail,
      "motDePasse": user.motDePasse,
      "nom": entries.nom,
      "prenom": entries.prenom,
    }
    await fetch(`http://amie.labinno-mtech.fr/api/utilisateur/updateutilisateur/${user.idUtilisateur}`,{
      method:'PUT',
      body: JSON.stringify(body),
    });

    router.refresh();
  }

  return (
            <form className='grid gap-2' onSubmit={modifyUser}>
                <input type="text" defaultValue={user.idUtilisateur} className='hidden'/>
                <input className='capitalize my-2 border-b outline-none' defaultValue={user.prenom} name='prenom'/>
                <input className=' uppercase my-2 border-b outline-none' defaultValue={user.nom} name='nom' />
                <input className='text-sm my-2 border-b outline-none'defaultValue={user.mail} name='mail' />
                <div className="grid grid-cols-2 gap-2">
                  <button className='btn btn-primary text-base-100' type='submit'>Modifier</button>
                  <button className='btn btn-error' onClick={(e) => {e.preventDefault();fetch(`http://amie.labinno-mtech.fr/api/utilisateur/deleteutilisateur/${user.idUtilisateur}`,{method:'DELETE',})}}>Supprimer</button>
                </div>
            </form>
  )
}
