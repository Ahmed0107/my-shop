import Image from "next/image";
import React from "react";

export default function TopSavings() {
  const topSavingOffers: TopSavingType[] = [
    {
      amount: 100,
      desc: "Explore Our Furniture & Home Furnishing Range",
      image: "/topsavings/tsave1.png",
    },

    {
      amount: 80,
      desc: "Explore Our Furniture & Home Furnishing Range",
      image: "/topsavings/tsave2.png",
    },

    {
      amount: 50,
      desc: "Explore Our Furniture & Home Furnishing Range",
      image: "/topsavings/tsave3.png",
    },

    {
      amount: 70,
      desc: "Explore Our Furniture & Home Furnishing Range",
      image: "/topsavings/tsave4.png",
    },
  ];
  return (
    <div className="md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl xl:self-start">
        Get Up To 70% Off
      </h1>
      {/* Top Savings Grid here */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xls:grid-cols-1 gap-5">
        {topSavingOffers.map((offer, index) => (
          <TopSavingCard {...offer} key={index} />
        ))}
      </div>
    </div>
  );
}

interface TopSavingType {
  amount: number;
  desc: string;
  image: string;
}

const TopSavingCard = (props: TopSavingType) => {
  const { amount, desc, image } = props;
  return (
    <div className="w-[302px] h-[430px] bg-[#f2e4d9] rounded-xl overflow-hidden">
      {/* Data */}
      <div className="w-[302px] h-[218px] p-7">
        <h3 className="text-[28px] font-bold">Save</h3>
        <h1 className="text-[52px] font-bold text-[#cb9917] relative left-3">
          <span className="absolute top-[5px] left-[-15px] text-[28px]">$</span>
          {amount}
        </h1>
        <h4 className="w-full break-all">{desc}</h4>
      </div>
      {/* Image */}
      <Image
        src={image}
        width={302}
        height={210}
        alt="saving"
        className="hover:scale-[1.15] transition-all ease-linear"
      />
    </div>
  );
};
