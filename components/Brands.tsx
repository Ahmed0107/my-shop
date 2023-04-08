import Image from "next/image";
import React from "react";

export default function Brands() {
  const brandsData: BrandInt[] = [
    {
      title: "Staples",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand1.png",
    },

    {
      title: "Sprouts",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand2.png",
    },

    {
      title: "Grocery outlet",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand3.png",
    },

    {
      title: "Mollie stones",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand4.png",
    },

    {
      title: "Sports Basement",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand5.png",
    },

    {
      title: "Container Store",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand6.png",
    },

    {
      title: "Target",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand7.png",
    },

    {
      title: "Bevmo!",
      desc: "Delivery with in 24 hours",
      image: "/brands/brand8.png",
    },
  ];

  return (
    <div className="md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl xl:self-start">
        Choose By Brand
      </h1>
      {/* Brand Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-col-2">
        {brandsData.map((brand, index) => (
          <BrandCard {...brand} key={index} />
        ))}
      </div>
    </div>
  );
}

const BrandCard = (props: BrandInt) => {
  const { title, image, desc } = props;
  return (
    <div className="w-[302px] h-[112px] bg-[#f5f6f6] flex items-center justify-between p-5 border-[1.5px] border-[#f5f6f6] rounded-xl hover:border-black transition-all ease-linear">
      <Image
        src={image}
        width={70}
        height={70}
        alt="brand"
        className="hover:scale-[1.15] transition-all ease-linear"
      />
      <div>
        <h1 className="text-xl">{title}</h1>
        <h1>{desc}</h1>
      </div>
    </div>
  );
};

interface BrandInt {
  title: string;
  image: string;
  desc: string;
}
