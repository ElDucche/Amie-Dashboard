'use client'
import Link from 'next/link'
import React from 'react'
import { MdLogout } from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'


const Session = () => {
    const {data: session} = useSession()
    console.log(session);
  return (
    <li className='rounded-lg my-2 px-2 hover:bg-white/80 hover:backdrop-blur'>
          <Link href={'/'} onClick={() => signOut()} className="m-auto md:m-0 group grid grid-cols-[3.5rem_1fr] items-center">
            <MdLogout size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>Se déconnecter</p>
          </Link>
    </li>
  )
}

export default Session