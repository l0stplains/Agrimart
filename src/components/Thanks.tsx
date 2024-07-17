"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Thanks = () => {

  return (
    <div className="h-full w-full flex justify-center  items-start">
      <div className="w-full grid grid-cols-6 max-md:grid-cols-1 place-items-center p-5 pb-10 mt-20">
        <div className="flex flex-col w-[min(100%,_400px)] md:col-span-3">
          <h1 className=" text-white font-semibold text-2xl my-5 text-center">
            Terima kasih telah berbelanja di Agrimart!
          </h1>
        </div>
        <Image
          src="/maskot-agrimart-tomi-2.png"
          alt="Maskot Tomi Thank you"
          width={300}
          height={300}
          className="max-md:my-6 md:col-span-3 md:row-span-2"
        />
        <div className="w-[min(80%,_400px)] md:order-2 self-start md:col-span-3">
          <Link
            href={"https://www.instagram.com/agrimart.himproagri?utm_source=ig_web_button_share_sheet"}
            target="_blank"
          >
            <div className="w-full bg-white px-8 rounded-full h-14 flex justify-center items-center relative">
              <h1 className="text-[22px] font-bold text-black text-center leading-none">
                Agrimart Keren Banget!
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
