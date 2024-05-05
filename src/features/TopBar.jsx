import ToggleTheme from '@/theme/ToggleTheme'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export const TopBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full ">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
          <button className='bg-white dark:bg-slate-900 px-1 py-1 ml-20 rounded-full border-8 border-[#F0F0F0] dark:border-slate-800 sm:flex items-center gap-4 hidden'>
              <div className='rounded-full p-2 bg-green-500'>
                  <h3 className='text-3xl text-white'>P6</h3>
              </div>
              <h3 className='text-3xl font-bold text-slate-800 dark:text-white'>P6 DEV DATA</h3>
              <ChevronDown focusable size={50} className='text-slate-800 dark:text-white' />
          </button>
        <div className="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
           </button>
        </div>
        <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <ToggleTheme />
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>
  )
}
