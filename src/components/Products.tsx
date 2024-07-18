"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

type ProductsProps = {
  productsData: ProductProps[];
  title: string;
  path: string;
};

type CartProps = {
  [key : string]: {
    quantity: number,
    product: ProductProps,
  };
};


const Products = ({ productsData, title, path }: ProductsProps) => {
  const [cart, setCart] = React.useState<CartProps>({});

  useEffect(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const tempCart = localStorage.getItem('cart');
    setCart(JSON.parse(tempCart || '{}'));
  } else {
    alert('Local Storage is not available\nYour cart will not be saved\nPlease use a modern browser to use this feature');
  }
}, []);

  const handleCartAddProduct = (product: ProductProps) => {
    let tempCart: CartProps = {};
    if (cart[product["Kode Barang"]]) {
      tempCart = {
        ...cart,
        [product["Kode Barang"]]: {
          quantity: cart[product["Kode Barang"]].quantity + 1,
          product: product,
        },
      }
      setCart(tempCart);
    } else {
      tempCart = {
        ...cart,
        [product["Kode Barang"]]: {
          quantity: 1,
          product: product,
        },
      }
      setCart(
        tempCart
      );
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(tempCart));
    }
  };

  const handleCartSubtractProduct = (product: ProductProps) => {
    let tempCart: CartProps = {};
    if (cart[product["Kode Barang"]]) {
      if (cart[product["Kode Barang"]].quantity > 1) {
        tempCart = {
          ...cart,
          [product["Kode Barang"]]: {
            quantity: cart[product["Kode Barang"]].quantity - 1,
            product: product,
          },
        }
        setCart(tempCart);
      } else {
        tempCart = { ...cart };
        delete tempCart[product["Kode Barang"]];
        setCart(tempCart);
      }
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cart', JSON.stringify(tempCart));
      }
    }
  }

  return (
    <div className="h-full w-full p-5 flex flex-col items-center max-md:pt-24 pt-20">
      <h1 className=" text-white font-semibold text-3xl my-5 text-center">
        {title}
      </h1>
      <div className="w-full grid grid-cols-3 max-md:grid-cols-2 gap-x-6 gap-y-3 justify-items-stretch pb-16">
        {!productsData && (
          <h1 className="text-white font-semibold text-2xl my-5 text-center col-span-3">
            Loading...
          </h1>
        )}
        {productsData &&
          productsData.map((product) => (
            <ProductCard
              key={product["Kode Barang"]}
              product={product}
              triggerAdd={handleCartAddProduct}
              triggerSubtract={handleCartSubtractProduct}
              quantity={cart[product["Kode Barang"]] ? cart[product["Kode Barang"]].quantity : 0}
            />
          ))}
      </div>
      <Link href={`/payment?source=${path}`}>
      <button className=" transition-transform ease-in-out hover:scale-105 fixed flex justify-center items-center left-1/2 -translate-x-1/2 bottom-8 w-16 h-12 font-semibold text-xl bg-red-200 rounded-2xl py-2 mt-6 shadow-[0px_2px_11px_6px_rgba(0,0,0,0.25)]">
        {Object.keys(cart).length != 0 && (
          <div>
          <div className=" bg-yellow rounded-full w-9 h-9 absolute -top-2 -left-5 z-20 flex justify-center items-center ">
            <Image src="/alert.svg" alt="Alert Icon" width={8} height={17} priority />
          </div>
          <div className="animate-ping bg-yellow rounded-full w-7 h-7 absolute -top-1 -left-4 z-10 flex justify-center items-center ">
          </div>
          </div>
        )}
        <Image src="/cart.svg" alt="Cart Icon" width={26} height={26} priority/>
      </button>
      </Link>
    </div>
  );
};

export default Products;
