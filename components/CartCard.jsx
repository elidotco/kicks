import Image from "next/image";
import React from "react";

const CartCard = ({ data, ischeckout }) => {
  return (
    <div className="w-full flex justify-between ">
      {/* image */}
      <div className="w-1/2 md:w-[40%] ">
        <Image
          src={data.image[0]}
          alt="shoe image"
          width={300}
          height={300}
          className={
            ischeckout
              ? "w-full h-40 rounded-3xl"
              : "w-full h-56 md:h-40 rounded-3xl"
          }
        />
      </div>
      <div
        className={
          ischeckout
            ? "flex flex-col w-1/2 lg:w-[60%]  pl-3 md:justify-between "
            : "flex flex-col w-1/2 lg:w-full  pl-3 md:justify-between md:flex-row"
        }
      >
        <div
          className={
            ischeckout ? "flex flex-col lg:w-full" : "flex flex-col lg:w-[80%]"
          }
        >
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
