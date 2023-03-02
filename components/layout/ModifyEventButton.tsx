'use client'

import { useState } from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import { Evenment } from '../../typing'
import { EventForm } from '../Event/EventForm'
import { Dialog } from '@headlessui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

export const ModifyEventButton = ({event}: {event: Evenment}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
    <div className='absolute top-1/3 left-1/2 hidden group-hover:block animate-smoothappear delay-150'>
      <button onClick={handleClick} className=' -translate-x-1/2 bg-secondary text-primary hover:bg-primary hover:text-base-100 p-2 rounded-lg transition-all flex flex-col items-center'><BsPencilSquare className="w-6 h-6" /></button>
      <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <QueryClientProvider client={queryClient}>
              <EventForm event={event}/>
            </QueryClientProvider>
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    </div>
  )
}
