import Image from "next/image";
import React from "react";

const CartCard = ({ data }) => {
  return (
    <div className="w-full flex justify-between ">
      {/* image */}
      <div className="w-1/2 md:w-1/3  ">
        <Image
          src={data.image[0]}
          alt="shoe image"
          width={300}
          height={300}
          className="w-full h-56 rounded-3xl"
        />
      </div>
      <div className="flex flex-col w-1/2 lg:w-full  pl-3 md:justify-between md:flex-row">
        <div className="flex flex-col lg:w-[80%]">
          <h3 className="font-semibold ">{data.name}</h3>
          <p className="text-sm md:text-base">
            Men’s Road Running Shoes Enamel Blue/ University White
          </p>
        </div>
        <p className="font-semibold text-blue-600 md:text-3xl text-[20px]">
          ${data.price}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
