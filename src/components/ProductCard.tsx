'use client';

import React from 'react'
import { ProductProps } from '@/types'

type ProductCardProps = {
  product: ProductProps
  trigger: any 
}

const ProductCard = ( {product, trigger} : ProductCardProps) => {
  return (
    <div className='bg-white col-span-1 h-[min(220px,_100%)] p-[14px] w-full rounded-xl flex flex-col justify-between'>
      <div className='relative self-center'>
        <img src='/product-aoka.png' alt='product' className='w-[129px] h-[129px] rounded-xl object-cover' />
        <button onClick={() => trigger(product)} className='w-[39px] h-[39px] bg-green-100 rounded-full flex justify-center items-center absolute bottom-2 right-2'>
          <img src="/+.svg" width={20} height={20} alt="Add item icon" />
        </button>
      </div>
      <h2 className='font-bold text-base text-ellipsis overflow-hidden whitespace-nowrap'>{product['Nama Barang']}</h2>
      <h2 className='font-semibold text-lg text-green-200'>{product['Harga Jual']}</h2>
    </div>
  )
}

export default ProductCard