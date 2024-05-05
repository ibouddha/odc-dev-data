import React from 'react'
import { TopBar } from './TopBar'
import { SideBar } from './SideBar'
import { PromoContextProvider } from '@/context/PromoContext'

export const InsideLayout = ({ children }) => {
  return (
    <PromoContextProvider>
      <TopBar />
      <SideBar />
      <div className="p-4 sm:ml-52 mt-24">
        {children}
      </div>
    </PromoContextProvider>
  )
}
