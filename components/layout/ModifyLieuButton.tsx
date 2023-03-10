'use client'

import { useState } from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import { Lieu } from '../../typing'
import { UserForm } from '../User/UserForm'
import { Dialog } from '@headlessui/react'
import { LieuForm } from '../Lieux/LieuForm'

export const ModifyLieuButton = ({lieu}: {lieu: Lieu}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-secondary text-primary hover:bg-primary hover:text-base-100 p-2 rounded-lg transition-all'><BsPencilSquare className="w-6 h-6" /></button>
      <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-80 max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <LieuForm lieu={lieu}/>
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    </div>
  )
}