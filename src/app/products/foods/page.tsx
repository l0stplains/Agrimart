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
  
  let foodsData = productsData.filter(product => product['Jenis'] === 'Makanan')
  if(searchParams && searchParams['search']) {
    const options = {
      keys: ['Nama Barang'],
      threshold: 0.3,
    }
    const fuseInstance = new Fuse(foodsData, options);
    const result = fuseInstance.search(searchParams['search'])
    
    foodsData = result.map((item) => item.item);
  }


  return (
    <div className='h-full'>
      <Navbar includeSearchBar={true}/>
      <Products productsData={foodsData} title={foodsData.length ? 'Foods' : 'No product available!'} path='foods'/>
    </div>
  )
}

export default page