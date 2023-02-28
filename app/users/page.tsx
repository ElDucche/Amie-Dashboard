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
        <div className="">
             <Title>Utilisateurs</Title>
             <AddUserButton />
             <div className="">
                <div className="mt-12 transition-all">
                    <table className="transition-all w-3/4 shadow-[5px_5px_0_0_rgba(106,165,23,0.12)] border border-secondary">
                        {/* <!-- head --> */}
                        <thead >
                        <tr className="h-12">
                            <th className='p-4 h-12 w-28 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Nom</th>
                            <th className='p-4 h-12 w-28 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Prénom</th>
                            <th className='p-4 h-12 w-44 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Email</th>
                            <th className='p-4 h-12 w-40 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Rôle</th>
                            <th className="p-4 h-12 w-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all">Modifier</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all duration-150">
                            {users.map(user =>( 
                                    <tr className="group transition-all hover:bg-secondary border-b border-secondary" key={user.idUtilisateur}>
                                        <th className="p-4 h-12 font-light uppercase transition-all">{user.nom}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {user.prenom}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.mail}</th>
                                        <th className="p-4 h-12 font-light transition-all">
                                            {
                                                user.roles.map(role => 
                                                    <p>{role.libelle}</p>
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
  