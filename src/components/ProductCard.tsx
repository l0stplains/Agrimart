'use client';

import React from 'react'
import { ProductProps } from '@/types'

type ProductCardProps = {
  product: ProductProps
}

const ProductCard = ( {product} : ProductCardProps) => {
  return (
    <div className='bg-white col-span-1 h-[min(220px,_100%)] p-[14px] w-full rounded-xl flex flex-col justify-between'>
      <div className='relative self-center'>
        <img src='/product-aoka.png' alt='product' className='w-[129px] h-[129px] rounded-xl object-cover' />
        <button className='w-[39px] h-[39px] bg-green-100 rounded-full flex justify-center items-center absolute bottom-2 right-2'>
          <img src="/+.svg" width={20} height={20} alt="Add item icon" />
        </button>
      </div>
      <h2 className='font-bold text-base'>{product['Nama Barang']}<br />{product['Harga Jual']}</h2>
    </div>
  )
}

export default ProductCard