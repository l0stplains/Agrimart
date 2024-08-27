"use client";

import React from "react";
import Image from "next/image";
import ConfirmPayment from "./ConfirmPayment";
import Link from "next/link";

const Cash = ({ source }: { source: string }) => {


    return (
        <div className="h-full w-full flex justify-center  items-start">
            <div className="w-full grid grid-cols-6 max-md:grid-cols-1 place-items-center p-5 pb-10 mt-20">
                <div className="flex flex-col w-[min(100%,_400px)] md:col-span-3">
                    <h1 className=" text-white font-semibold text-2xl my-5 text-center">
                        Silahkan bayar ke kasih Agrimart ya!
                    </h1>
                </div>
                <Image
                    src="/maskot-agrimart-pakcoy-1.png"
                    alt="Pakcoy image"
                    width={300}
                    height={300}
                    className="max-md:my-6 md:col-span-3 md:row-span-2"
                />
                <div className="w-[min(80%,_400px)] md:order-2 self-start md:col-span-3">
                    <ConfirmPayment method="CASH" />
                </div>
            </div>
            <Link href={`/payment?source=${source}`}>
                <button className="bg-white transition-transform ease-in-out hover:scale-105 fixed flex justify-center items-center left-1/2 -translate-x-1/2 bottom-8 w-12 h-12 font-semibold text-xl bg-red-white rounded-full py-2 mt-6 shadow-[0px_2px_11px_6px_rgba(0,0,0,0.25)]">
                    <Image src="/l-arrow.svg" alt="Back Icon" width={24} height={24} priority />
                </button>
            </Link>
        </div>
    );
};

export default Cash;
