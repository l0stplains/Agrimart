import React from "react";
import { ProductProps } from "@/types";
import { rupiahToInt, intToRupiah } from "@/utils";

type ProductCardProps = {
  product: ProductProps;
  triggerAdd: any;
  triggerSubtract: any;
  quantity: number;
};

const ProductCartCard = ({
  product,
  triggerAdd,
  triggerSubtract,
  quantity,
}: ProductCardProps) => {
  return (
    <div className="w-[min(100%,_450px)] h-16 bg-white rounded-2xl flex justify-between items-center px-6 py-2 mb-2">
      <div className="grow overflow-hidden">
        <h2 className="font-bold text-base text-ellipsis overflow-hidden whitespace-nowrap">
          {product["Nama Barang"]}
        </h2>
        <h2 className="font-semibold text-lg text-green-200 leading-none">
          {intToRupiah(rupiahToInt(product["Harga Jual"]) * quantity)}
        </h2>
      </div>
      <div className="flex justify-center items-center relative bg-green-200 min-w-24 rounded-full">
      <button
          onClick={() => {
            if (quantity > 0) {
              triggerSubtract(product)
            }
          }
          }

          className="w-[29px] h-[29px] transition-transform ease-out bg-green-100 hover:scale-105 rounded-full flex justify-center items-center absolute left-0"
        >
          <img src="/-.svg" className="w-3 h-3" alt="Subtract item icon" />
        </button>
        <h2 className="font-semibold text-lg text-white">
          {quantity}
        </h2>
        
        <button
          onClick={() => triggerAdd(product)}
          className="w-[29px] h-[29px] transition-transform ease-out bg-green-100 hover:scale-105 rounded-full flex justify-center items-center absolute right-0"
        >
          <img src="/+.svg" className="w-3 h-3" alt="Add item icon" />
        </button>

      </div>
    </div>
  );
};

export default ProductCartCard;
