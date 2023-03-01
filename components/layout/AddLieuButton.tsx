'use client'
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { RiMapPinAddLine } from "react-icons/ri";
import { AddLieuForm } from "../Lieux/AddLieuForm";

export const AddLieuButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(true)
    }
  return (
      <div>
        <button onClick={handleClick} className='p-2 text-2xl w-36 flex justify-center mt-4 text-primary border border-primary items-center hover:text-base-100 hover:bg-primary transition-all rounded-lg flex-col hover:shadow-[5px_5px_0_0_rgba(106,165,23,0.12)]'><RiMapPinAddLine /><p className="text-sm py-1">Ajouter</p></button>
        <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 bg-white/60 backdrop-blur-sm overflow-auto">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-80 max-w-sm rounded-xl ring-1 ring-neutral/10 bg-white p-6 shadow-xl">
            <AddLieuForm />
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
      </div>
      )
}
