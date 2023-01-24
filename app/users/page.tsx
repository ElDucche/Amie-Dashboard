import Title from "../../components/layout/Title";
import { User } from "../../typing";

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
    return users;
}

export default async function Users() {
    const users = await fetchUsers(); 
   return (
        <div>
             <Title>Utilisateurs</Title>
             <div className="grid place-content-center place-items-center">
                <div className="overflow-x-auto w-full mt-12">
                    <table className="table w-full rounded-none">
                        {/* <!-- head --> */}
                        <thead >
                        <tr>
                            <th className='bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100'>Nom</th>
                            <th className='bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100'>Pseudo</th>
                            <th className='bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100'>Rôle</th>
                            <th className='bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100'>Email</th>
                        </tr>
                        </thead>
                        <tbody className="transition-all delay-150">
                            {users.map(user =>( 
                                <tr className="hover" key={user.id}>
                                    <th className="font-light"> {user.name}</th>
                                    <th className="font-light">{user.username}</th>
                                    <th className="font-light">Membre</th>
                                    <th className="font-light">{user.email}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    )
}
  