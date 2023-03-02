import { ModifyUserButton } from "../../components/layout/ModifyUserButton";
import Title from "../../components/layout/Title";
import { AddUserButton } from "../../components/layout/AddUserButton";
import { User } from "../../typing";



const fetchUsers = async () => {
    const res = await fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateursavecroles')
    const users: User[] = await res.json()
    return users;
}

export default async function Users() {
    const users = await fetchUsers(); 
   return (
        <div className="ml-4">
             <Title>Utilisateurs</Title>
             <AddUserButton />
             <div className="">
                <div className="mt-12 transition-all">
                    <table className="transition-all w-full">
                        {/* <!-- head --> */}
                        <thead >
                        <tr className="h-12 text-neutral bg-neutral/5">
                            <th className='p-4 w-28'>Nom</th>
                            <th className='p-4 w-28'>Prénom</th>
                            <th className='p-4 w-44'>Email</th>
                            <th className='p-4 w-40'>Rôle</th>
                            <th className="p-4 w-12">Modifier</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all duration-150">
                            {users.map(user =>( 
                                    <tr className="group transition-all hover:bg-neutral/5 border-b border-secondary" key={user.idUtilisateur}>
                                        <th className="p-4 h-12 font-light uppercase transition-all">{user.nom}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {user.prenom}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.mail}</th>
                                        <th className="p-4 h-12 font-light transition-all">
                                            {
                                                user.roles.map(role => 
                                                    <p key={role.idRole}>{role.libelle}</p>
                                                )
                                            }
                                        </th>
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
  