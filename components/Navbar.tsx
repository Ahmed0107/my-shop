"use client";
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./auth/Modal";

export default function Navbar() {
  const [opened, setOpened] = useState<boolean>(true);
  const [authState, setAuthState] = useState<string>("signup");
  const [showModel, setShowModel] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <>
      {showModel && (
        <Modal
          showModel={showModel}
          setShowModel={setShowModel}
          setAuthState={setAuthState}
          authState={authState}
        />
      )}
      <div
        className="w-full z-10 max-w-[98vw] fixed top-0 bg-white
     md:max-w-[820px] lg:max-w-[1280px] h-[70px]
     md:w-[90vw]  md:h-[80px] flex items-center justify-between"
      >
        {/* ------------------------------------------------------------------------------------------------- */}
        {/* Brand and Logo */}
        <Link href="/">
          <div className="h-full flex items-center justify-between">
            <Image
              src="/logo.png"
              width={60}
              height={50}
              alt="logo"
              className="sm:w-6 sm:h-6 xls:w-6 xls:h-6 md:w-[50px] md:h-[50px]"
            />
            <h1 className="md:text-3xl text-[#003d29] font-bold sm:text-xl xls:text-xl">
              Shop
            </h1>
          </div>
        </Link>

        {/* ------------------------------------------------------------------------------------------------- */}
        {/* Links */}
        <ul
          className={`
        flex items-start md:items-center flex-col md:flex-row justify-center gap-2 md:gap-8 absolute md:static ${
          opened ? "top-[-400px]" : "top-[75px]"
        } 
          transition-all ease-in-out z-[8] bg-white md:bg-transparent xls:w-[98vw]
        md:w-fit p-6 rounded-3xl `}
        >
          <div
            className="relative flex items-center"
            onClick={() => setDropDown(!dropDown)}
          >
            <Link href="/">Category</Link>
            {dropDown ? (
              <ChevronUpIcon className="h-4 w-4 ml-[4px]" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 ml-[4px]" />
            )}

            {/* TODO: fetch Popular categoreies here */}
            <div
              className={`md:w-[750px] sm:w-[89vw] xls:w-[89vw] h-[400px] bg-white absolute ${
                dropDown ? "top-[40px]" : "top-[-600px]"
              } rounded p-6`}
            >
              <h1 className="text-2xl">Popular Categories</h1>
            </div>
          </div>
          <li>
            <Link href="/">Deals</Link>
          </li>
          <li>
            <Link href="/">What's New</Link>
          </li>
          <li>
            <Link href="/">Delivery</Link>
          </li>
        </ul>

        {/* ------------------------------------------------------------------------------------------------- */}
        {/* Search */}
        <div className="w-[300px] h-[40px] relative sm:mr-4 xls:mr-4 xls:ml-6 sm:ml-2 my-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full px-4 h-[40px] border-[1.5px] 
          border-[#cccccc] outline-0 focus:border-[#003d29]"
          />
          <MagnifyingGlassIcon className="w-8 h-6 absolute right-2 top-2 text-[#777676]" />
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        {/* icons */}
        <div className=" md:w-[180px] flex justify-between sm:mr-10 md:mr-0 xls:mr-10">
          <div
            className="flex cursor-pointer"
            onClick={() => setShowModel(true)}
          >
            <UserIcon className="w-5 h-5 md:w-8 md:h-6" />
            <h3 className="ml-[4px] md:block sm:hidden xls:hidden">SignIn</h3>
          </div>
          <Link href="/cart" className="flex ml-2">
            <ShoppingCartIcon className="w-5 h-5 md:w-8 md:h-6" />
            <h3 className="ml-[4px] md:block sm:hidden xls:hidden">Cart</h3>
          </Link>
        </div>

        {/* Homeburger and colse Icons */}
        <div
          onClick={() => setOpened(!opened)}
          className="cursor-pointer absolute right-0 md:hidden"
        >
          {opened ? (
            <Bars3Icon className="w-8 h-6" />
          ) : (
            <XMarkIcon className="w-8 h-6" />
          )}
        </div>
      </div>
    </>
  );
}
