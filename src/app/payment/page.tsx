import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'
import React from 'react'

const page = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Payment />
    </div>
  )
}

export default page