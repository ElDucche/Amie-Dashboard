import React from 'react'

export const Board = ({cols, title, children} : {cols: string; title: string; children: React.ReactNode;}) => {
  return (
    <div className={`grid grid-cols-${cols} grid-rows-2 p-6 border border-neutral/20 rounded-xl my-2`}>
        <h1 className={`col-span-${cols} text-3xl font-semibold h-16`}>{title}</h1>
        {children}
    </div>
  )
}
