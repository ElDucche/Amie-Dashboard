'use client'


import { Employee } from '../../typing'


const deleteEmployee = (employeeId: number) => {
  try {
    fetch(`http://lyserofinance-env.eba-rpnjkdkg.us-east-1.elasticbeanstalk.com/removeemployee/${employeeId}`, {
        method: 'DELETE'
    });
  } catch (err) {
    throw new Error('Ça ne marche absolument pas !')
  }
}

export const UserForm = ({employee}: {employee: Employee}) => {
  return (
            <form className='grid gap-2' id='employeeForm'>
                <label className='capitalize'> {employee.firstName}</label>
                <label className=' uppercase'> {employee.lastName}</label>
                {/* <label> {employee.mail}</label> */}
                <button className='btn btn-error text-base-100' type='submit' onClick={() => deleteEmployee(employee.id)}>Supprimer</button>
            </form>
  )
}
