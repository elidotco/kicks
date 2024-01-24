import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Rcards = ({ data }) => {
  return (
    <div className="w-full md:w-[31%]  ">
      <div className="h-3/6 bg-[#fafafa] flex flex-col p-8 rounded-t-[32px] ">
        <div className="flex flex-row justify-between   items-center">
          <div className="">
            <h3 className="font-semibold text-xl">Good Quality</h3>
            <p className="text-base">I highly recommend shopping from kicks</p>
          </div>
          {/* user imAGE */}

          <Image
            src={data.image1}
            alt=""
            width={100}
            height={100}
            className="w-16 h-16 rounded-[50%]"
          />
        </div>
        <div className=" text-sm flex gap-2">
          <StarIcon className="w-4 h-4" color="#FFA52F" />
          <StarIcon className="w-4 h-4" color="#FFA52F" />
          <StarIcon className="w-4 h-4" color="#FFA52F" />
          <StarIcon className="w-4 h-4" color="#FFA52F" />
          <StarIcon className="w-4 h-4" color="#FFA52F" />
          5.0
        </div>
      </div>
      <Image
        src={data.image}
        alt=""
        width={300}
        height={300}
        className="w-full h-72 aspect-auto rounded-b-[32px]"
      />
    </div>
  );
};

export default Rcards;
