"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ProdCard from "./ProdCard";
import { Product } from "@/types";
import { useEffect, useState } from "react";



export default function Deals() {
  const [wdth, setwdth] = useState(1600);


  const handelResize = () => {
    setwdth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);
  }, []);

  const getViewPortWidth = (): number => {
    if (wdth > 1400) {
      return 4.5;
    } else if (wdth < 1400 && wdth > 1280) {
      return 3.8;
    } else if (wdth < 1280 && wdth > 950) {
      return 3;
    } else if (wdth < 950 && wdth > 700) {
      return 2;
    } else if (wdth < 700 && wdth > 500) {
      return 1.7;
    } else{
      return 0.9;
    }
  };

  const products: Product[] = [
    {
      id: 1,
      title: "title talato bel talato",
      image: "/prods/prod1.png",
      price: 190,
      descr: "Organic Cotton, fairtrade certified",
      rating: 4.5,
    },
    {
      id: 2,
      title: "title arbato bel talato",
      image: "/prods/prod2.png",
      price: 50,
      descr: "Organic Cotton, fairtrade certified",
      rating: 3.5,
    },

    {
      id: 3,
      title: "title arbato bel talato",
      image: "/prods/prod3.png",
      price: 50,
      descr: "Organic Cotton, fairtrade certified",
      rating: 3.5,
    },

    {
      id: 4,
      title: "title arbato bel talato",
      image: "/prods/prod4.png",
      price: 250,
      descr: "Organic Cotton, fairtrade certified",
      rating: 3.5,
    },

    {
      id: 6,
      title: "title arbato bel talato",
      image: "/prods/prod5.png",
      price: 250,
      descr: "Organic Cotton, fairtrade certified",
      rating: 2.5,
    },

    {
      id: 7,
      title: "title arbato bel talato",
      image: "/prods/prod6.png",
      price: 250,
      descr: "Organic Cotton, fairtrade certified",
      rating: 5.0,
    },
  ];

  return (
    <div className="md:w-[80vw] sm:w-[90vw] xls:w-[90vw] md:max-w-[90vw] lg:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl md:self-start">
        Todays Best Deals For You!
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={getViewPortWidth()}
        direction="horizontal"
        width={wdth * 0.9}
      >
        {products.map((prod, index) => (
          <Link href={"/"} key={prod.id}>
            <SwiperSlide className=" hover:scale-95 transition-all ease-linear">
              <ProdCard {...prod} />
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  );
}
