import Image from "next/image";

export default function CategoryCard() {
  const cats = [
    {
      title: "Furniture",
      imgPath: "/cat1.png",
    },
    {
      title: "Hand Bag",
      imgPath: "/cat2.png",
    },
    {
      title: "Books",
      imgPath: "/cat3.png",
    },
    {
      title: "Tech",
      imgPath: "/cat4.png",
    },
    {
      title: "Sneakers",
      imgPath: "/cat5.png",
    },
    {
      title: "Travel",
      imgPath: "/cat6.png",
    },
  ];

  return (
    <div className="w-[90vw] md:w-[1280px] max-w-[90vw] my-0 mx-auto py-10 flex flex-col items-center justify-between gap-10 mt-10">
      <h1 className="md:text-3xl font-bold xls:text-xl md:self-start">
        Shop Our Top Categories
      </h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xls:grid-cols-1 gap-x-10 gap-y-10">
        {cats.map((cat, index) => (
          // card start here
          <div
            key={index}
            className="w-[194px] h-[250px] rounded-xl bg-red-400 relative flex items-center flex-col"
          >
            <Image
              src={cat.imgPath}
              width={194}
              height={250}
              alt="cat"
              className="rounded-xl "
            />
            <h3 className="text-2xl absolute top-2 text-white font-bold">
              {cat.title}
            </h3>
          </div>
          //   card end here
        ))}
      </div>
    </div>
  );
}
