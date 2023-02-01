import React from 'react'

export const Board = ({cols, title, children} : {cols: string; title: string; children: React.ReactNode;}) => {
  return (
    <div className={`grid md:grid-cols-${cols} gap-4 p-4 border border-neutral/20 rounded-xl my-2 shadow-sm`}>
        <h1 className={`col-span-full text-3xl font-semibold h-16`}>{title}</h1>
        {children}
    </div>
  )
}
