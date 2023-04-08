"use client";
import { CartProdCard } from "@/components/CartProdCard";
import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import PaymentModal from "@/components/payment/PaymentModal";
import { useState } from "react";

export default function Cart() {
  const [showModel, setShowModel] = useState<boolean>(false);
  const cartPods = useSelector((state: RootState) => state.cart);
  return (
    <>
      {showModel && (
        <PaymentModal showModel={showModel} setShowModel={setShowModel} />
      )}
      <div className="md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 flex flex-col items-center justify-between gap-10 mt-2">
        <h1 className="md:text-4xl font-bold xls:text-xl self-center">
          Your Cart
        </h1>
        <div className="w-full h-fit flex flex-col md:flex-row items-start justify-between">
          {/* Cart Prods */}
          <div className="md:w-[65%] xls:w-full min-h-[200px] h-[full] flex flex-col justify-center items-center">
            {cartPods.length != 0 ? (
              cartPods.map((prod, idx) => <CartProdCard {...prod} />)
            ) : (
              <div className="text-3xl flex gap-2 text-gray-500">
                <ShoppingCartIcon className="w-10 h-10" />
                <span
                  onClick={() =>
                    console.log(process.env.PUBLICHABLE_TEXT_MODE_KEY)
                  }
                >
                  Your Cart is Empty
                </span>
              </div>
            )}
          </div>
          {/* Total and checkout btns */}
          <div className="md:w-[30%] sm:w-full xls:w-full h-[320px] border-2 rounded-xl shadow-md p-5 flex flex-col">
            <h1 className="text-3xl pb-2 flex-1">Order Summary</h1>
            <hr />
            <div className="w-full pt-2 flex justify-between text-xl flex-1">
              <span>Subtotal</span>
              <span>$418</span>
            </div>
            <div className="w-full flex justify-between text-xl flex-1">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="w-full pt-2 flex justify-between text-3xl flex-1">
              <span>Total</span>
              <span>$418</span>
            </div>
            <button
            onClick={() => setShowModel(true)}
             className="w-full text-2xl text-white font-blod bg-[#003d29] px-8 py-3 rounded-xl hover:bg-[#231f1e]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
