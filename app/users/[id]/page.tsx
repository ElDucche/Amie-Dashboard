import React, { use } from 'react'
import { UserForm } from '../../../components/User/UserForm';

async function User({params}: {params :{ id : number}}) {
    const user = await fetch(`https://mockend.com/ElDucche/Amie-Dashboard/users/${params.id}`)
    .then(res => res.json()); 
    
    if (!user) {
        return <p> User n°{params.id} doesn't exist !</p>
    }
  return (
    <UserForm user={user} />
  )
}

export default User