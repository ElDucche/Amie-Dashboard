'use client'

import {BsPencilSquare} from 'react-icons/bs'
import { User } from '../../typing'
import { UserForm } from '../User/UserForm'


export const ModifyButton = ({user} : {user : User}) => {
  return (
    <button onClick={() => <UserForm user={user} />} className='invisible group-hover:visible hover:bg-neutral hover:text-base-100 p-2 rounded-xl transition-all'><BsPencilSquare className="w-8 h-8" /></button>
  )
}
