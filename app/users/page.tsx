import { ModifyUserButton } from "../../components/layout/ModifyUserButton";
import Title from "../../components/layout/Title";
import { User } from "../../typing";



const fetchUsers = async () => {
    const res = await fetch('https://mockend.com/ElDucche/Amie-Dashboard/users')
    const users: User[] = await res.json()
    return users;
}

export default async function Users() {
    const users = await fetchUsers(); 
   return (
        <div>
             <Title>Utilisateurs</Title>
             <div className="grid place-content-center place-items-center transition-all delay-150">
                <div className="overflow-x-auto w-full mt-12 transition-all">
                    <table className="w-full rounded-none transition-all">
                        {/* <!-- head --> */}
                        <thead >
                        <tr className="h-12">
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Nom</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Prénom</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Rôle</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Email</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Date création</th>
                            <th className="p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all">Modifier</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all delay-150">
                            {users.map(user =>( 
                                    <tr className="group transition-all hover:bg-secondary" key={user.id}>
                                        <th className="p-4 h-12 font-light uppercase transition-all">{user.lastName}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {user.firstName}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.role}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.email}</th>
                                        <th className="p-4 h-12 font-light transition-all">{user.createdAt}</th>
                                        <th className="p-4 h-12"><ModifyUserButton user={user} /></th>
                                    </tr>
                                    
                            ))}
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    )
}
  