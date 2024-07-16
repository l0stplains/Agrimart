import React from 'react'
import ProductOptionCard from './ProductOptionCard'
import Link from 'next/link'

const ProductOption = () => {
  return (
    <div className='h-full w-full p-5 flex flex-col items-center max-md:pt-24'>
      <h1 className=' text-white font-semibold text-3xl my-5 text-center'>Choose Product</h1>
      <div className='w-full grid grid-cols-2 max-md:grid-cols-1 gap-6 justify-items-stretch'>
          <ProductOptionCard text='Foods' image_file='food-product.png' link='/products/foods' />
          <ProductOptionCard text='Drinks' image_file='drink-product.png' link='/products/drinks' />
          <ProductOptionCard text='Ice Cream' image_file='ice-cream-product.png' link='/products/ice-cream'/>
          <ProductOptionCard text='Other' image_file='other-product.png' link='/products/other'/>

          
      </div>
      <Link href='/products/all'>
          <button className='w-44 h-11 font-semibold text-xl bg-white rounded-xl py-2 mt-6 max-md:mb-10'>All Products</button>
      </Link>
    </div>
  )
}

export default ProductOption