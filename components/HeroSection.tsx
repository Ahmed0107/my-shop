import React from 'react'

export default function HeroSection() {
  return (
    <div  
      className="
      w-screen md:w-[1280px]
      lg:w-screen
      h-[650px]
      mt-[80px]
      md:max-w-screen 
      bg-[url('/hero.jpg')] bg-center bg-cover bg-no-repeat"
    >
      <div className="xl:max-w-[1280px] my-0 mx-auto h-full flex flex-col md:items-start xls:items-center xls:justify-center gap-8 md:text-start xls:text-center ">
        <h1 className="font-bold md:text-[64px] text-[#003d29] xls:text-[40px]">
          Shopping And <br /> Department Store.
        </h1>
        <p className="text-xl text-[#003d29]">
          Shopping is a bit of a relaxing hobby for me, which <br /> is
          sometimes troubling for the bank balance.
        </p>

        <button className="text-xl text-white font-blod bg-[#003d29] px-8 py-3 rounded-full hover:bg-[#231f1e]">
          Shop Now
        </button>
      </div>
    </div>
  );
}
