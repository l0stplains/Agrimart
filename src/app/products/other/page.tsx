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
  
  let othersData = productsData.filter(product => product['Jenis'] === 'Other Product')
  if(searchParams && searchParams['search']) {
    const options = {
      keys: ['Nama Barang'],
      threshold: 0.3,
    }
    const fuseInstance = new Fuse(othersData, options);
    const result = fuseInstance.search(searchParams['search'])
    
    othersData = result.map((item) => item.item);
  }


  return (
    <div className='h-full'>
      <Navbar includeSearchBar={true}/>
      <Products productsData={othersData} title={othersData.length ? 'Other Product' : 'No product available!'} />
    </div>
  )
}

export default page