'use client'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='grid w-screen h-screen place-content-center place-items-center'>
        <form className='p-4 grid gap-4 border border-secondary rounded-xl shadow-mgen w-96'>
            <img src="/img/logo_lab.png" alt="Logo AMIE" className='w-32 h-32 object-cover mx-auto'/>
            <input type="email" name="email" id="email" className='input input-bordered w-full' placeholder='Email'/>
            <input type="password" name="password" id="password" className='input input-bordered w-full' placeholder='Mot de passe'/>
            <button type="submit" className='btn btn-primary text-base-100'>Se connecter</button>
        </form>
        <div className='flex items-center mt-3 text-neutral/40'><p className=' italic mr-3'> App by </p><img src='/img/logo_lab.png' alt='Lab Inno MGEN' className='ml-3w-8 h-8 object-cover'/></div>
    </div>
  )
}

export default LoginPage