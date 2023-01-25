'use client'
import { User } from '../../typing'

export const UserForm = ({user}: {user: User}) => {
  return (
            <form className='grid gap-2' onSubmit={() => {console.log("Modifications enregistrées")}}>
                <label className='capitalize'> {user.firstName}</label>
                <label className=' uppercase'> {user.lastName}</label>
                <label> {user.email}</label>
                <input type="text" className='input input-bordered' name='role' defaultValue={user.role}/>
                <button className='btn btn-primary text-base-100' type='submit'>Modififer</button>
            </form>
  )
}
