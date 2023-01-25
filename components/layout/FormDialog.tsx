'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export const FormDialog = ({children}: {children: React.ReactNode;}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
