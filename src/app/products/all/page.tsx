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
  let productsData : ProductProps[] = await fetchSpreadsheetData()
  
  if(searchParams && searchParams['search']) {
    const options = {
      keys: ['Nama Barang'],
      threshold: 0.3,
    }
    const fuseInstance = new Fuse(productsData, options);
    const result = fuseInstance.search(searchParams['search'])
    
    productsData = result.map((item) => item.item);
  }


  return (
    <div className='h-full'>
      <Navbar includeSearchBar={true}/>
      <Products productsData={productsData} title={productsData.length ? 'All Products' : 'No product available!'} path='all'/>
    </div>
  )
}

export default page