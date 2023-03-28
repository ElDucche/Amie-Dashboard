'use client'
import NextAuth from "next-auth/next"
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}
export const Provider = ({children} : Props) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
