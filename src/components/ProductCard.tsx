"use client";

import React from "react";
import { ProductProps } from "@/types";

type ProductCardProps = {
  product: ProductProps;
  triggerAdd: any;
  triggerSubtract: any;
  quantity: number;
};

const ProductCard = ({
  product,
  triggerAdd,
  triggerSubtract,
  quantity,
}: ProductCardProps) => {
  return (
    <div className="bg-white col-span-1 h-[min(220px,_100%)] p-[14px] w-full rounded-xl flex flex-col justify-between">
      <div className="relative self-center">
        <img
          src={`/product/${product["Kode Barang"]}.webp`}
          alt="product"
          className="w-[129px] h-[129px] rounded-xl object-cover"
        />

        {quantity > 0 && (
          <button
            onClick={() => triggerSubtract(product)}
            className="w-[29px] h-[29px] transition-transform ease-out  bg-red-100 hover:scale-105 rounded-full flex justify-center items-center absolute bottom-0 right-10"
          >
            <img src="/-.svg" className="w-3 h-3" alt="Subtract item icon"/>
          </button>
        )}

        <button
          onClick={() => triggerAdd(product)}
          className="w-[29px] h-[29px] transition-transform ease-out bg-green-100 hover:scale-105 rounded-full flex justify-center items-center absolute bottom-0 right-2"
        >
          <img src="/+.svg" className="w-3 h-3" alt="Add item icon" />
        </button>
      </div>
      <h2 className="font-bold text-base text-ellipsis overflow-hidden whitespace-nowrap">
        {product["Nama Barang"]}
      </h2>
      <h2 className="font-semibold text-lg text-green-200">
        {product["Harga Jual"]}
      </h2>
    </div>
  );
};

export default ProductCard;
