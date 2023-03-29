'use client'

import { useSession, signIn } from "next-auth/react";
import { ReactNode } from "react"
import Menu from "../Menu/Menu";

interface Props {
    children: ReactNode;
}
export const Layout = ({children}: Props) => {
    const { data: session} = useSession();
  return (
    <div>
        { session?.user ? 
            <div></div>
            :
            <div className="grid w-screen h-screen place-content-center place-items-center">
                    <div className="border-secondary border rounded-xl shadow-mgen p-6 grid gap-4">
                        <h1 className="font-thin text-2xl text-center">AMIE | Labinno</h1>
                        <p className="text-neutral/40 italic">Vous devez être connecté pour utiliser cette application</p>
                        <button className='btn btn-primary text-base-100' onClick={() => signIn()}>S'identifier</button>
                    </div>
            </div>
        }
    </div>
  )
}
