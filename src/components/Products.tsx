'use client';

import React from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types";
import Image from "next/image";

type ProductsProps = {
  productsData: ProductProps[];
  title: string;
};

const Products = ({productsData, title} : ProductsProps) => {
  return (
    <div className="h-full w-full p-5 flex flex-col items-center max-md:pt-24 pt-20">
      <h1 className=" text-white font-semibold text-3xl my-5 text-center">
        {title}
      </h1>
      <div className="w-full grid grid-cols-3 max-md:grid-cols-2 gap-x-6 gap-y-3 justify-items-stretch pb-16">
        {!productsData && (<h1 className="text-white font-semibold text-2xl my-5 text-center col-span-3">Loading...</h1>)}
        {productsData && productsData.map((product) => (
          <ProductCard key={product["Kode Barang"]} product={product} />
        ))}
      </div>
        <button className="fixed flex justify-center items-center left-1/2 -translate-x-1/2 bottom-8 w-16 h-12 font-semibold text-xl bg-red rounded-2xl py-2 mt-6 shadow-[0px_2px_11px_6px_rgba(0,0,0,0.25)]">
          <div className="bg-yellow rounded-full w-9 h-9 absolute -top-2 -left-5 z-10 flex justify-center items-center ">
            <Image src="/alert.svg" alt="Alert Icon" width={8} height={17} />

          </div>
          <Image src="/cart.svg" alt="Cart Icon" width={26} height={26} />
        </button>
      
    </div>
  );
};

export default Products;
