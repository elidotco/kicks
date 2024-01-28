"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Cards = ({ data, isclass, index, islist }) => {
  const router = useRouter();
  return (
    <div
      className={
        isclass
          ? "w-full h-full "
          : `w-[46%]  ${islist ? "md:w-[30%]" : "md:w-[23%]"} `
      }
    >
      <Image
        src={data.image[0]}
        alt="imageone"
        width={300}
        height={300}
        className="w-full h-40 lg:h-72 border-4 rounded-xl border-[#fafafa]"
      />
      <h3 className="font-semibold text-base uppercase py-5">{data.name}</h3>
      <button
        onClick={() => router.push(`/product/${index}`)}
        className="bg-black h-10 p-[auto] text-white w-full  rounded-lg text-center"
      >
        View Product <span className="text-yellow-600">$400</span>
      </button>
    </div>
  );
};

export default Cards;
