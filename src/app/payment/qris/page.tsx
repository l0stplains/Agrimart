import Navbar from '@/components/Navbar'
import Qris from '@/components/Qris'
import React from 'react'

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  let source = 'all'
  if(searchParams && searchParams['source']) {
    if(['foods', 'drinks', 'ice-cream', 'other', 'all'].includes(searchParams['source'])) {
      source = searchParams['source'];
    }
  }
  return (
    <div className='h-full'>
      <Navbar />
      <Qris source={source} />
    </div>
  )
}

export default page