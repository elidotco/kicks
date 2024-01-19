import Image from "next/image";
import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[46%] md:w-[23%] ">
      <Image
        src={data.image[0]}
        alt="imageone"
        width={300}
        height={300}
        className="w-full h-40 lg:h-72 border-4 rounded-xl border-[#fafafa]"
      />
      <h3 className="font-semibold text-base uppercase">{data.name}</h3>
      <button className="bg-black h-10 p-[auto] text-white w-full  rounded-lg text-center">
        View Product <span className="text-yellow-600">$400</span>
      </button>
    </div>
  );
};

export default Cards;
