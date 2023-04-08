import React from "react";

export default function Footer() {
  const footerColData: FooterColCardType[] = [
    {
      title: "Departemnet",
      links: [
        "Fashion",
        "Education Product",
        "Frozen Food",
        "Beauty Products",
        "Electronics & Gadget",
        "Sneakers",
        "Toys",
        "Furniture",
      ],
    },

    {
      title: "About Us",
      links: ["About Shop", "Careers", "Help", "Affiliate & Partners"],
    },

    {
      title: "Services",
      links: ["Gift Card", "Shipping & Delivery", "Order Pickup"],
    },

    {
      title: "Help",
      links: [
        "Shop Help",
        "Returns",
        "Track Orders",
        "Contact Us",
        "Feedback",
        "Security & Fraud",
      ],
    },
  ];

  return (
    <div className="bg-white md:w-[1280px] sm:w-[90vw] xls:w-[90vw] md:max-w-[1280px] mx-auto my-0 py-10 flex flex-col items-center overflow-hidden justify-between gap-10 mt-10">
      <div className="w-full flex flex-col justify-between">
        {/* ---------------------------------------------------------------------------------------- */}
        {/* Logo */}

        {/* ---------------------------------------------------------------------------------------- */}
        {/* Services */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xls:grid-cols-2 gap-10">
          {/* Logo */}
          <div className="flex flex-col h-full justify-evenly  relative top-[-30px]">
            <div className="w-[150px] flex items-center justify-between">
              <img src="/logo.png" alt="" className="w-20" />
              <h1 className="text-4xl text-[#003d29] font-bold">Shop</h1>
            </div>
            <h1 className="text-xl font-bold my-2 relative left-2">
              Accepted Payments
            </h1>
            <img src="/payments.PNG" alt="" />
          </div>
          {/* Footer Columns */}
          {footerColData.map((col, idx) => (
            <FooterColCard {...col} />
          ))}
        </div>
        {/* Copy Rights */}
        <div className="w-full text-center mt-2 text-[18px]">
          Copyright © 2023 ASA Developers
        </div>
      </div>
    </div>
  );
}

interface FooterColCardType {
  title: string;
  links: string[];
}

const FooterColCard = (props: FooterColCardType) => {
  const { title, links } = props;
  return (
    <div className="flex flex-col">
      <h1 className="text-xl mb-3">{title}</h1>
      {links.map((link, idx) => (
        <p
          key={idx}
          className="relative cursor-pointer hover:left-2 hover:text-[#ff9b18]"
        >
          {link}
        </p>
      ))}
    </div>
  );
};
