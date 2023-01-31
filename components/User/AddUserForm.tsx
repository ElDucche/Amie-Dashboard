'use client'

import { useRouter } from "next/navigation";
import React from "react";

export const AddUserForm = () => {
    const router = useRouter()

    const addNewEmployee = async (event: any) => {
        const formData = new FormData(event.currentTarget);
        const entries = Object.fromEntries(formData.entries())
        
        fetch("http://lyserofinance-env.eba-rpnjkdkg.us-east-1.elasticbeanstalk.com/addemployee", {
            headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(entries)
            }
        );
        
        router.refresh()

    }
    
  return (
    <form className='grid gap-2 h-full' onSubmit={addNewEmployee}>
        <input className='capitalize h-16 pl-4 border border-neutral/20 rounded-xl focus:ring-1 ' name={'firstName'} placeholder='Prénom'/>
        <input className=' uppercase h-16 pl-4 border border-neutral/20 rounded-xl focus:ring-1' name={'lastName'} placeholder='Nom' />
        {/* <label> {employee.mail}</label> */}
        <button className='bottom-3 btn btn-primary text-base-100' type='submit'>Ajouter</button>
    </form>
  )
}
