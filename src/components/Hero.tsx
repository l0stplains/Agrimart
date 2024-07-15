import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col max-md:flex-col-reverse items-center md:px-6 md:justify-between justify-start w-full h-full">
      <div className=" md:w-2/5 w-full flex flex-col max-md:items-center bg-white p-4 md:rounded-xl rounded-t-xl pb-8 max-md:mt-14 relative">
        <Image
          src="/maskot-agrimart-tomi-1.png"
          alt="Agrimart Mascot - Tomi"
          width={150}
          height={110}
          className="self-center mt-[-10%] mb-[-3%] translate-x-[-5px]"
        />
        <h1 className="text-4xl font-semibold max-md:text-[29px]">
          Hello! Welcome to
        </h1>
        <h1 className="text-5xl font-bold max-md:text-[29px]">Agrimart</h1>
        <button className=" bg-gradient-to-r from-green-200 to-green-300 text-white px-4 py-2 mt-4 max-sm::w-[353px] w-64 rounded-[15px]">
          Start Shopping
        </button>
        <div className="w-32 h-32 rounded-full absolute right-1/2 translate-x-[50%] translate-y-[-35%] bg-white -z-50"></div>
      </div>
      <div className=" flex flex-col max-md:items-center">
        <Image
          src="/a-girl-on-a-shopping-trip-with-packages.png"
          alt="Hero Image"
          width={456}
          height={456}
        />
      </div>
    </div>
  );
};

export default Hero;
