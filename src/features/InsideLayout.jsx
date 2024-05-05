import React from 'react'
import { TopBar } from './TopBar'
import { SideBar } from './SideBar'

export const InsideLayout = ({ children }) => {
  return (
    <React.Fragment>
      <TopBar />
      <SideBar />
      <div className="p-4 sm:ml-52 mt-24">
        {children}
      </div>
    </React.Fragment>
  )
}
