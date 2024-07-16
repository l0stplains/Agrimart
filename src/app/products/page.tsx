import React from 'react'
import ProductOption from '@/components/ProductOption';
import Navbar from '@/components/Navbar';

async function page() {
  return (
    <div className='h-full'>
      <Navbar />
      <ProductOption />
    </div>
  )
}

export default page