"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

interface Props {
  showModel: boolean;
  setShowModel: Function;
}

export default function SignInModal({ showModel, setShowModel }: Props) {
  const [shouldShow, setShouldShow] = useState<boolean>(showModel);
  const [passType, setPassType] = useState<string>("password");

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
          {/* Modal Body  start*/}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
          md:w-[450px] w-[90vw] h-fit rounded-xl  bg-white mt-[20vh] mx-auto p-10 opacity-100 flex flex-col items-center
          "
          >
            {/* Body Element here */}
            <h1 className="text-2xl">Sign Up</h1>
            <form className="w-full">
              <div className="mt-3 w-full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={passType}
                    placeholder="password"
                    className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
                  />
                  {passType == "password" ? (
                    <EyeSlashIcon
                      className="w-6 h-6 absolute right-2 top-3 cursor-pointer"
                      onClick={() => setPassType("text")}
                    />
                  ) : (
                    <EyeIcon
                      className="w-6 h-6 absolute right-2 top-3 cursor-pointer"
                      onClick={() => setPassType("password")}
                    />
                  )}
                </div>
              </div>
            </form>
            <button
              className="w-full mt-6 text-xl text-white font-blod bg-[#003d29] py-3 rounded-xl hover:bg-[#231f1e]"
              onClick={() => {
                setShouldShow(false);
                setShowModel(false);
              }}
            >
              Sign In
            </button>

            <div className="mt-4 text-[18px]">
              <span>
                Don't have an Account?
                <span className="text-[#01ccff] ml-2 cursor-pointer">
                  SignUp
                </span>
              </span>
            </div>
          </div>
          {/* End of Body */}
        </div>
      )}
    </>
  );
}
