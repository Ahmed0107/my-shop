import Image from "next/image";

export default function CashBack() {
  return (
    <div
      className="md:w-screen h-[650px] sm:w-[90vw] xls:w-[90vw] md:max-w-screen mx-auto my-0 py-10
    flex
    items-center
    md:justify-end
    sm:justify-center
    xls:justify-center
    gap-10 mt-10 bg-[url('/offer-image.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className=" w-full lg:max-w-[1280px] my-0 mx-auto flex md:justify-end sm:justify-center xls:justify-center">
        <div
          className="w-[513px] h-[482px] xls:h-fit p-16 bg-[#003d29] flex flex-col items-start justify-between 
      
      
      "
        >
          <h1 className="text-[52px] text-white">
            Get 5% Cash <br /> Back On $200
          </h1>
          <h1 className="text-[20px] text-white">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </h1>
          <button className="xls:mt-3 text-xl text-white border-[1.5px] border-white font-blod bg-[#003d29] px-8 py-3 rounded-full hover:bg-[#231f1e] hover:border-[#231f1e]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
