import { ModifyUserButton } from "../../components/layout/ModifyUserButton";
import Title from "../../components/layout/Title";
import { AddUserButton } from "../../components/layout/AddUserButton";
import { User } from "../../typing";



const fetchUsers = async () => {
    const res = await fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateurs')
    const users: User[] = await res.json()
    return users;
}

export default async function Users() {
    const users = await fetchUsers(); 
   return (
        <div>
             <Title>Utilisateurs</Title>
             <div className="">
                <div className="overflow-x-auto w-full mt-12 transition-all">
                    <table className="w-full rounded-none transition-all">
                        {/* <!-- head --> */}
                        <thead >
                        <tr className="h-12">
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Nom</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Prénom</th>
                            {/* <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Rôle</th> */}
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Email</th>
                            {/* <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Date création</th> */}
                            <th className="p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all">Modifier</th>
                            <th className="h-12 border-b border-b-primary bg-primary hover:bg-secondary hover:text-neutral text-base-100 transition-all"><AddUserButton /></th>
                        </tr>
                        </thead>
                        <tbody className="transition-all duration-150">
                            {users.map(user =>( 
                                    <tr className="group transition-all hover:bg-secondary" key={user.idUtilisateur}>
                                        <th className="p-4 h-12 font-light uppercase transition-all">{user.nom}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {user.prenom}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.mail}</th>
                                        {/* <th className="p-4 h-12 font-light transition-all">{user.createdAt}</th> */}
                                        <th className="p-4 h-12">
                                            <ModifyUserButton user={user} />
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
  