import { ModifyUserButton } from "../../components/layout/ModifyUserButton";
import Title from "../../components/layout/Title";
import { AddUserButton } from "../../components/layout/AddUserButton";
import { Employee, User } from "../../typing";



const fetchEmployees = async () => {
    const res = await fetch('http://lyserofinance-env.eba-rpnjkdkg.us-east-1.elasticbeanstalk.com/getallemployees/')
    const employees: Employee[] = await res.json()
    return employees;
}

export default async function Users() {
    const employees = await fetchEmployees(); 
   return (
        <div>
             <Title>Utilisateurs</Title>
             <div className="grid place-content-center place-items-center transition-all">
                <div className="overflow-x-auto w-full mt-12 transition-all">
                    <table className="w-full rounded-none transition-all">
                        {/* <!-- head --> */}
                        <thead >
                        <tr className="h-12">
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Nom</th>
                            <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Prénom</th>
                            {/* <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Rôle</th> */}
                            {/* <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Email</th> */}
                            {/* <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all'>Date création</th> */}
                            <th className="p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all">Modifier</th>
                            <th className="p-4 h-12 border-b border-b-primary bg-primary hover:bg-secondary hover:text-neutral text-base-100 transition-all"><AddUserButton /></th>
                        </tr>
                        </thead>
                        <tbody className="transition-all delay-150">
                            {employees.map(employee =>( 
                                    <tr className="group transition-all hover:bg-secondary" key={employee.id}>
                                        <th className="p-4 h-12 font-light uppercase transition-all">{employee.lastName}</th>
                                        <th className="p-4 h-12 font-light capitalize transition-all"> {employee.firstName}</th>
                                        {/* <th className="p-4 h-12 font-light transition-all">{employee.mail}</th> */}
                                        {/* <th className="p-4 h-12 font-light transition-all">{user.createdAt}</th> */}
                                        <th className="p-4 h-12">
                                            <ModifyUserButton employee={employee} />
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
  