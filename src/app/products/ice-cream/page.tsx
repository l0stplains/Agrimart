
import React from 'react'
import { fetchSpreadsheetData } from '@/utils'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import { ProductProps } from '@/types'
import Fuse from 'fuse.js'

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  const productsData : ProductProps[] = await fetchSpreadsheetData()
  
  let iceCreamsData = productsData.filter(product => product['Jenis'] === 'Ice Cream')
  if(searchParams && searchParams['search']) {
    const options = {
      keys: ['Nama Barang'],
      threshold: 0.3,
    }
    const fuseInstance = new Fuse(iceCreamsData, options);
    const result = fuseInstance.search(searchParams['search'])
    
    iceCreamsData = result.map((item) => item.item);
  }


  return (
    <div className='h-full'>
      <Navbar includeSearchBar={true}/>
      <Products productsData={iceCreamsData} title={iceCreamsData.length ? 'Ice Cream' : 'No product available!'} path='ice-cream' />
    </div>
  )
}

export default page