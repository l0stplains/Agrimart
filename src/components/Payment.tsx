'use client';

import { intToRupiah, rupiahToInt } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductProps } from "@/types";
import ProductCartCard from "@/components/ProductCartCard";

type CartProps = {
  [key : string]: {
    quantity: number,
    product: ProductProps,
  };
};

const Payment = ({source} : {source:string}) => {
  const [bill, setBill] = React.useState(0);
  const [cart, setCart] = React.useState<CartProps>({});

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const tempCart = localStorage.getItem('cart');
      const cart = JSON.parse(tempCart || '{}');
      setCart(cart);
      let total = 0;
      Object.keys(cart).forEach((key) => {
        total += rupiahToInt(cart[key].product["Harga Jual"]) * cart[key].quantity;
      });
      setBill(total);
      console.log(bill)
    } else {
      alert(
        "Local Storage is not available\nYour cart will not be saved\nPlease use a modern browser to use this feature"
      );
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
    } else {
      tempCart = {
        ...cart,
        [product["Kode Barang"]]: {
          quantity: 1,
          product: product,
        },
      }
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      setCart(tempCart);
      setBill(bill + rupiahToInt(product["Harga Jual"]));
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
      } else {
        tempCart = { ...cart };
        delete tempCart[product["Kode Barang"]];
      }
      if (typeof window !== 'undefined' && window.localStorage) {
        setCart(tempCart);
        setBill(bill - rupiahToInt(product["Harga Jual"]));
        localStorage.setItem('cart', JSON.stringify(tempCart));
      }
    }
  }

  return (
    <div className="h-full w-full flex justify-center  items-start">
      <div className="w-full grid grid-cols-6 max-md:grid-cols-1 place-items-center p-5 md:pb-10 pb-24  md:mt-28 mt-20">
        <div className="flex flex-col w-[min(80%,_400px)] md:col-span-3">
          <h1 className=" text-white font-semibold text-3xl my-5 text-center">
            Total Bill
          </h1>
          <div className="w-full bg-white rounded-full h-14 flex justify-center items-center">
            <h1 className="text-2xl font-medium text-black text-center">
              {intToRupiah(bill)}
            </h1>
          </div>
        </div>
        <div className="w-[min(80%,_400px)] h-[280px] overflow-y-auto flex flex-col max-md:my-6 md:col-span-3 md:row-span-2">
            {Object.keys(cart).map((key) => (
              <ProductCartCard
                key={key}
                product={cart[key].product}
                quantity={cart[key].quantity}
                triggerAdd={() => handleCartAddProduct(cart[key].product)}
                triggerSubtract={() => handleCartSubtractProduct(cart[key].product)}
              />
            ))}

        </div>
        { bill != 0 &&
        <div className="w-[min(80%,_400px)] md:order-2 self-center md:col-span-3">
          <Link href={`/payment/cash?source=${source}`}>
          <div className="w-full bg-gradient-to-r from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-start items-center relative">
            <h1 className="text-3xl font-bold text-white text-start">
              Cash
            </h1>
            <div className="absolute right-0 w-[100px] bg-yellow rounded-full h-full flex justify-center items-center">
              <h2 className="text-black font-medium text-base">To Cashier</h2>
            </div>
          </div>
          </Link>
          <Link href={`/payment/qris?source=${source}`}>
          <div className="w-full bg-gradient-to-r mt-3 from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-start items-center relative">
            <h1 className="text-3xl font-bold text-white text-start">
              Qris
            </h1>
            <div className="absolute right-0 w-[100px] bg-yellow rounded-full h-full flex justify-center items-center">
              <h2 className="text-black font-medium text-base">+Rp 500</h2>
            </div>
          </div>
          </Link>
        </div>
    }
      </div>
      <Link href={`/products/${source}`}>
      <button className="bg-white transition-transform ease-in-out hover:scale-105 fixed flex justify-center items-center left-1/2 -translate-x-1/2 bottom-8 w-16 h-16 font-semibold text-xl bg-red-white rounded-full py-2 mt-6 shadow-[0px_2px_11px_6px_rgba(0,0,0,0.25)]">
        <Image src="/l-arrow.svg" alt="Back Icon" width={26} height={26} priority/>
      </button>
      </Link>
    </div>
  );
};

export default Payment;
