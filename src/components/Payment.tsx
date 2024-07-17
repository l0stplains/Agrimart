import Image from "next/image";
import Link from "next/link";
import React from "react";

const Payment = () => {
  return (
    <div className="h-full w-full flex justify-center  items-start">
      <div className="w-full grid grid-cols-6 max-md:grid-cols-1 place-items-center p-5 pb-10 mt-20">
        <div className="flex flex-col w-[min(80%,_400px)] md:col-span-3">
          <h1 className=" text-white font-semibold text-3xl my-5 text-center">
            Total Bill
          </h1>
          <div className="w-full bg-white rounded-full h-14 flex justify-center items-center">
            <h1 className="text-2xl font-medium text-black text-center">
              Rp 100.000
            </h1>
          </div>
        </div>
        <Image
          src="/maskot-agrimart-pakcoy-1.png"
          alt="Pakcoy image"
          width={300}
          height={300}
          className="max-md:my-6 md:col-span-3 md:row-span-2"
        />
        <div className="w-[min(80%,_400px)] md:order-2 self-center md:col-span-3">
          <Link href="/payment/cash">
          <div className="w-full bg-gradient-to-r from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-start items-center relative">
            <h1 className="text-3xl font-bold text-white text-start">
              Cash
            </h1>
            <div className="absolute right-0 w-[100px] bg-yellow rounded-full h-full flex justify-center items-center">
              <h2 className="text-black font-medium text-base">To Cashier</h2>
            </div>
          </div>
          </Link>
          <Link href="/payment/qris">
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
      </div>
    </div>
  );
};

export default Payment;
