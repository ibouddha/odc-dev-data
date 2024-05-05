import { InsideLayout } from '@/features/InsideLayout'
import React from 'react'

const RandomChoice = () => {
  return (
    <InsideLayout>
        <RandomChoiceSection/>
    </InsideLayout>
  )
}

export default RandomChoice


const RandomChoiceSection = () => {
  return (
    <div className='p-4 bg-white dark:bg-slate-900 rounded-md'>
        <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Random Choice</h3>
        <div className='mt-2 py-[1px] w-32 bg-slate-900 dark:bg-white'></div>
    </div>
  )
}