"use client";
import { Product } from "@/types";
import { gadgetsProds, fashionProds } from "@/utils/dummyData";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProdCard from "./ProdCard";

export default function BestDeals() {
  const [wdth, setwdth] = useState<number>(1600);
  const [shProds, setShProds] = useState<Product[]>(gadgetsProds);
  const [activeLink, setActiveLink] = useState<string>("Gadgets");

  const handelResize = () => {
    setwdth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);
  }, []);

  const getViewPortWidth = (): number => {
    if (wdth > 1400) {
      return 11;
    } else if (wdth < 1400 && wdth > 1280) {
      return 9;
    } else if (wdth < 1280 && wdth > 950) {
      return 7;
    } else if (wdth < 950 && wdth > 700) {
      return 5;
    } else if (wdth < 700 && wdth > 500) {
      return 3.5;
    } else {
      return 2.5;
    }
  };

  const btns: DealBtnType[] = [
    {
      title: "Gadgets",
      products: gadgetsProds,
      active: activeLink,
    },

    {
      title: "Fashion",
      products: fashionProds,
      active: activeLink,
    },

    {
      title: "Toys",
      products: fashionProds,
      active: activeLink,
    },

    {
      title: "Education",
      products: gadgetsProds,
      active: activeLink,
    },

    {
      title: "Beauty",
      products: fashionProds,
      active: activeLink,
    },

    {
      title: "Fitness",
      products: gadgetsProds,
      active: activeLink,
    },

    {
      title: "Furniture",
      products: fashionProds,
      active: activeLink,
    },

    {
      title: "Sneakers",
      products: gadgetsProds,
      active: activeLink,
    },
  ];

  return (
    <div className="md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl xl:self-start">
        Todays Best Deals For You!
      </h1>
      <Swiper
        spaceBetween={16}
        slidesPerView={getViewPortWidth()}
        direction="horizontal"
        width={wdth * 0.9}
        className="flex justify-start"
      >
        {btns.map((btn, idx) => (
          <SwiperSlide key={idx} onClick={() => {setShProds(btn.products); setActiveLink(btn.title)}}>
            <DealBtn {...btn}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 transition-all sm:grid-cols-2 xls:grid-cols-1 ease-linear">
        {shProds.map((prod, idx) => (
          <ProdCard {...prod} />
        ))}
      </div>
    </div>
  );
}

interface DealBtnType {
  title: string;
  products: Product[];
  active: string
}

const DealBtn = (props: DealBtnType) => {
  const { title, active } = props;
  return (
    <div
      className={`border-2  ${
        title == active
          ? "bg-[#003d29] text-white border-[#003d29]"
          : "bg-white"
      } border-black rounded-full flex items-center justify-center cursor-pointer font-bold hover:border-[#003d29] hover:bg-[#003d29] hover:text-white py-2 px-4`}
    >
      {title}
    </div>
  );
};
