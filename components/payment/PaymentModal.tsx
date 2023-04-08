"use client";

import { useState } from "react";
import CCInput from "./CartNumberInput";

interface Props {
  showModel: boolean;
  setShowModel: Function;
}

export default function PaymentModal({ showModel, setShowModel }: Props) {
  const [shouldShow, setShouldShow] = useState<boolean>(showModel);

  return (
    <>
      {shouldShow && (
        // Modal Background
        <div
          onClick={() => {
            setShouldShow(false);
            setShowModel(false);
          }}
          className="fixed z-[100] left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
          md:w-[450px] w-[90vw] h-fit rounded-xl  bg-white mt-[15vh] mx-auto p-10 opacity-100 flex flex-col items-center
          "
          >
            {/* Start */}
            <h1 className="text-2xl">Payment Details</h1>
            <form action="#" className="w-full">
              {/* Form */}
              <div className="mt-3 w-full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
                />
              </div>

              <div className="mt-3 w-full">
                <label>Card Number</label>
                <CCInput />
              </div>

              <div className="w-full flex items-center justify-between mt-3">
                <div className="flex flex-col w-[49%]">
                  <label htmlFor="expired_data">Expired Date</label>
                  <input
                    type="text"
                    id="expired_data"
                    placeholder="mm / yy"
                    className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
                  />
                </div>
                <div className="flex flex-col w-[49%]">
                  <label htmlFor="cvv_num">CVV</label>
                  <input
                    type="text"
                    id="cvv_num"
                    placeholder="xxx"
                    className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
                  />
                </div>
              </div>

              {/* Total */}
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl">Total</span>
                <span className="text-2xl">$418</span>
              </div>
              {/* Button */}
              <button
                className="w-full mt-6 text-xl text-white font-blod bg-[#003d29] py-3 rounded-xl hover:bg-[#231f1e]"
                onClick={() => {
                  setShouldShow(false);
                  setShowModel(false);
                }}
              >
                Pay
              </button>
            </form>
            {/* End */}
          </div>
        </div>
      )}
    </>
  );
}
