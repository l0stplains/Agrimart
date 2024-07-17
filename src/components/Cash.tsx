"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { rupiahToInt, intToRupiah } from "@/utils";

const Cash = () => {
  const [haveConfirmed, setHaveConfirmed] = React.useState(false);
  const [confirmMessage, setConfirmMessage] = React.useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const tempCart = localStorage.getItem("cart");
      const cart = JSON.parse(tempCart || "{}");
      let total = 0;
      let message = "Halooo ENB Mau konfirmasi tadi baru aja aku beli Barang: \n";
      Object.keys(cart).forEach((key) => {
        total += rupiahToInt(cart[key].product["Harga Jual"]) * cart[key].quantity;
        message += `${cart[key].product["Nama Barang"]} sebanyak ${cart[key].quantity} pcs \n`;
      });
      message += `Total harga: ${intToRupiah(total)} (Cash)`;
      setConfirmMessage(message);
    } else {
      alert(
        "Local Storage is not available\nYour cart will not be saved\nPlease use a modern browser to use this feature"
      );
    }    

    
  }, []);

  const handleDone = () => {
    localStorage.removeItem("cart");

  };


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
          {haveConfirmed && (
            <Link onClick={handleDone} href="/payment/thanks">
              <div className="w-full mb-3 bg-gradient-to-r from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-center items-center relative">
                <h1 className="text-[22px] font-bold text-white text-center">
                  DONE
                </h1>
              </div>
            </Link>
          )}
          <Link
            href={{
              pathname: "https://api.whatsapp.com/send",
              query: { phone: "6282127015027", text: confirmMessage },
            }}
            onClick={() => setHaveConfirmed(true)}
            target="_blank"
          >
            <div className="w-full bg-gradient-to-r from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-center items-center relative">
              <h1 className="text-[22px] font-bold text-white text-center leading-none">
                CONFIRM PAYMENT
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cash;
