import Image from "next/image";
import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[47%] md:w-1/4 ">
      <Image
        src={data.image[0]}
        alt="imageone"
        width={300}
        height={300}
        className="w-full h-40 border-4 rounded-xl border-[#fafafa]"
      />
      <h3 className="font-semibold text-base uppercase">{data.name}</h3>
      <button className="bg-black h-10 text-white w-full text-center">
        View Product <span className="text-yellow-600">$400</span>
      </button>
    </div>
  );
};

export default Cards;
