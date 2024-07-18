import React from 'react'
import Cash from '@/components/Cash'
import Navbar from '@/components/Navbar'

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
      <Cash source={source}/>
    </div>
  )
}

export default page