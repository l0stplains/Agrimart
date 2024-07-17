import React from 'react'
import Cash from '@/components/Cash'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Cash />
    </div>
  )
}

export default page