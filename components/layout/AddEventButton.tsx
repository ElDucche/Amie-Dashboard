'use client'

import { useState } from 'react'
import {BsCalendarPlus} from 'react-icons/bs'
import { Evenment } from '../../typing'
import { EventForm } from '../Event/EventForm'
import { Dialog } from '@headlessui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AddEventForm } from '../Event/AddEventForm'

const queryClient = new QueryClient();

export const AddEventButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
    <div className='mt-4'>
      <button onClick={handleClick} className=' border border-primary hover:bg-primary hover:text-base-100 p-2 rounded-xl transition-all flex items-center'><BsCalendarPlus className="w-8 h-8" /><p className='text-sm capitalize ml-2'>Ajouter un évènement</p></button>
      <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <QueryClientProvider client={queryClient}>
              <AddEventForm />
            </QueryClientProvider>
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    </div>
  )
}
