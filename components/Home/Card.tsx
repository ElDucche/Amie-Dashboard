import React from 'react'

export const Card = ({title, children} : {title: string; children: React.ReactNode;}) => {
  return (
    <div className="place-self-center border rounded-lg p-4 w-full h-full m-2 hover:bg-neutral/5 transition-all group grid col-span-1">
        <h3 className='font-medium group-hover:text-primary'>{title}</h3>
        <div className='py-4 text-lg font-thin cursor-pointer flex items-center justify-center'>
            {children}
        </div>
    </div>
  )
}
