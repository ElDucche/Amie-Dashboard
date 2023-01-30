'use client'

import { useState } from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import { Evenment } from '../../typing'
import { EventForm } from '../Event/EventForm'
import { Dialog } from '@headlessui/react'

export const ModifyEventButton = ({event}: {event: Evenment}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
      console.log("Bouton cliqué")
      console.log("isOpen status : " + isOpen)
    }
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block'>
      <button onClick={handleClick} className='hover:bg-neutral hover:text-base-100 p-2 rounded-xl transition-all flex flex-col items-center'><BsPencilSquare className="w-8 h-8" /><p className='text-sm'>Modifier</p></button>
      <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <EventForm event={event}/>
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    </div>
  )
}
