import React from "react";
import Link from "next/link";

type ProductOptionCardProps = {
  text: string;
  image_file?: string;
  link?: string;
};

const ProductOptionCard = ({text, image_file, link="/"} : ProductOptionCardProps) => {
  return (
    <Link href={`${link}`}>
    <div className="relative col-span-1 md:h-52 h-36 bg-white flex flex-col p-4 rounded-[21px] shadow-[0px_2px_11px_6px_rgba(0,0,0,0.25)]">
      <img src="/r-arrow.svg" width={33} height={66} alt="Arrow icon" className="absolute top-3 right-4" loading="eager"/>
      <div className="md:w-40 md:h-40 w-28 h-28 self-center flex">
      <img src={image_file} alt={text} className="md:w-40 md:h-40 w-28 h-28 object-contain"/>
      </div>
      <h2 className="self-start font-semibold text-lg -translate-y-6">{text}</h2>
    </div>
    </Link>
  );
};

export default ProductOptionCard;
