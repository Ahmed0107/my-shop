import Image from 'next/image';
import React from 'react'

export default function OurServices() {
      const ourServicesData: OurServiceType[] = [
        {
          title: "Frequently Asked Questions",
          desc: "Updates on safe Shopping in our Stores",
          image: "/ourservices/ourservices1.png",
        },

        {
          title: "Online Payment Process",
          desc: "Updates on safe Shopping in our Stores",
          image: "/ourservices/ourservices2.png",
        },

        {
          title: "Home Delivery Options",
          desc: "Updates on safe Shopping in our Stores",
          image: "/ourservices/ourservices3.png",
        },
      ];
  return (
    <div className="md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl xl:self-start">
        Services To Help You Shop
      </h1>
      {/* Services Gird here */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xls:grid-cols-1 gap-5">
        {ourServicesData.map((service, index) => (
          <OurServiceCard {...service} key={index} />
        ))}
      </div>
    </div>
  );
}

interface OurServiceType {
  title: string;
  desc: string;
  image: string;
}

const OurServiceCard = (props: OurServiceType) => {
  const { title, desc, image } = props;
  return (
    <div className="md:w-[416px] md:h-[380px] xls:w-[350px] xls:h-[350px] bg-[#f2e4d9] rounded-xl overflow-hidden">
      {/* Data */}
      <div className="md:w-[416px] md:h-[168px] p-7 xls:h-[138px]">
        <h1 className="md:text-[24px] xls:text-[20px] text-[#231f1e] font-bold">
          {title}
        </h1>
        <h4 className="w-full md:text-[18px] mt-4 xls:text-[16px] break-all text-[#231f1e] opacity-80">
          {desc}
        </h4>
      </div>
      {/* Image */}
      <Image
        src={image}
        width={416}
        height={210}
        alt="saving"
        className="hover:scale-[1.15] transition-all ease-linear"
      />
    </div>
  );
};
