'use client'
import { removeFromCart } from "@/app/RTK/Slices/productSlice";
import { Product } from "@/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from 'react-redux';

export const CartProdCard = (props: Product) => {
  const dispatch =  useDispatch()
  const {title, image, price, } = props
    const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="w-full h-[120px] bg-white border-2  mb-4 flex justify-between rounded-xl shadow-md">
      <div className="flex">
        <img src={image} alt="" className="w-[120px] h-full" />
        <div className="flex flex-col justify-start ml-4">
          <h1 className="text-2xl mt-2">{title}</h1>
          <h1>
            <span className="text-[#ff9b18]">21 items</span> in stock
          </h1>
          <h1>
            from <span className="text-[#ff9b18] cursor-pointer">category</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[80px] h-[50px] flex justify-between items-center">
          <div className="w-full h-[50px] border-[1.5px] border-black rounded-md flex items-center justify-center pr-[1px]">
            <span className="w-11 h-full flex items-center justify-center text-xl">
              {quantity}
            </span>
            <div className="w-5 h-full flex items-center flex-col">
              <ChevronUpIcon
                className="w-full h-[50%] cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              />
              <ChevronDownIcon
                className="w-full h-[50%] cursor-pointer"
                onClick={() => setQuantity(quantity - 1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between pb-4 pt-3 mr-4">
        <h1 className="text-3xl self-end">${price * quantity}</h1>
        <div className="w-[220px] flex justify-between">
          <button className="w-[100px] h-9 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white flex justify-center items-center text-xl rounded-full">
            View
          </button>
          <button
          onClick={() => dispatch(removeFromCart({...props}))}
           className="w-[100px] h-9 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex justify-center items-center text-xl rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
