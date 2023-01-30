import React from 'react'

export const Card = ({title, children} : {title: string; children: React.ReactNode;}) => {
  return (
    <div className=" place-self-center text-center">
        <h3>{title}</h3>
        {children}
    </div>
  )
}
