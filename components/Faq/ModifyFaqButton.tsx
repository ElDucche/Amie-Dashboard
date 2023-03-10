'use client'

import { useState } from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import { Faq } from '../../typing'
import { Dialog } from '@headlessui/react'
import { FaqForm } from './FaqForm'

export const ModifyFaqButton = ({faq}: {faq: Faq}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
    <div>
        <button onClick={handleClick} className='invisible group-hover:visible hover:bg-neutral hover:text-base-100 p-2 rounded-xl transition-all'><BsPencilSquare className="w-8 h-8" /></button>
        <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-80 h-92 max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <FaqForm faq={faq}/>
            </Dialog.Panel>
        </Dialog.Overlay>
        </Dialog>
  </div>
  )
}
