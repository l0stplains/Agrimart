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
  
  let drinksData = productsData.filter(product => product['Jenis'] === 'Minuman')
  if(searchParams && searchParams['search']) {
    const options = {
      keys: ['Nama Barang'],
      threshold: 0.3,
    }
    const fuseInstance = new Fuse(drinksData, options);
    const result = fuseInstance.search(searchParams['search'])
    
    drinksData = result.map((item) => item.item);
  }


  return (
    <div className='h-full'>
      <Navbar includeSearchBar={true}/>
      <Products productsData={drinksData} title={drinksData.length ? 'Drinks' : 'No product available!'} path='drinks'/>
    </div>
  )
}

export default page