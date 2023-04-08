import { Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/RTK/Slices/productSlice";


export default function ProdCard(props: Product) {
  const dispatch = useDispatch();
  const { id, title, image, descr, price, rating } = props;

  return (
    <div className="bg-white w-[300px] h-[430px] cursor-pointer rounded-xl">
      <div className="w-full h-[280px] bg-[#f5f6f6] flex items-center justify-center rounded-t-xl">
        <Image src={image} width={250} height={250} alt="prod" />
      </div>
      <div className="w-full h-[150px] p-2 flex flex-col justify-between">
        {/* Title and price */}
        <div className=" flex items-center justify-between ">
          <h1 className="text-xl font-bold text-[#003d29]">{title}</h1>
          <h1 className="text-xl font-bold text-[#003d29]">{price}$</h1>
        </div>
        {/* Mini Description */}
        <h3>{descr}</h3>

        {/* Rating here */}
        <div className="flex items-center gap-2">
          <Rating
            initialValue={rating}
            emptyStyle={{ display: "flex" }}
            iconsCount={5}
            fillColor="#ffff00"
            size={22}
          />
          <div>({rating})</div>
        </div>

        {/* Button */}

        <button 
        onClick={() => dispatch(addToCart({...props}))}
        className="w-[150px] py-2 px-3 border-[1.5px] border-[#003d29] rounded-full mt-2 hover:bg-[#003d29] hover:text-white transition-all ease-linear">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
