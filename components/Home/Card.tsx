import React from 'react'

export const Card = ({title, children} : {title: string; children: React.ReactNode;}) => {
  return (
    <div className="place-self-center text-center border rounded-lg p-4 w-full h-full m-2 hover:bg-secondary transition-all group col-span-1">
        <h3 className='font-semibold underline underline-offset-2 decoration-primary decoration-2'>{title}</h3>
        <div className='py-4 text-3xl font-thin cursor-pointer flex items-center border'>
            {children}
        </div>
    </div>
  )
}
