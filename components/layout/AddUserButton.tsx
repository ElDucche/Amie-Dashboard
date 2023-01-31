'use client'
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AddUserForm } from "../User/AddUserForm";

export const AddUserButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
      <div>
        <button onClick={handleClick} className='text-2xl'><AiOutlineUserAdd /></button>
        <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-80 h-72 max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <AddUserForm />
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
      </div>
      )
}
