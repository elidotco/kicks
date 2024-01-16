import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="  w-full">
        <div
          className="image w-full h-[360px] lg:h-[750px] rounded-xl lg:rounded-[64px]
           lg:p-10 flex p-4 "
        >
          <div className="mt-auto flex flex-row justify-between w-full items-center">
            <div className="w-4/6 mt-auto">
              <h2 className="text-2xl lg:text-[74px] lg:pb-4 font-semibold text-[#fff]">
                NIKE AIR MAX
              </h2>
              <p className="font-semibold text-[#E7E7E3] lg:py-4 text-[14px] md:text-base">
                Nike introducing the new air max for everyone&apos; comfort
              </p>

              <button className=" md:w-[143px] text-sm h-[42px] w-[100px]  text-white bg-[#4A69E2] rounded-lg">
                {" "}
                Shop Now
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="lg:w-40 lg:h-40 w-16 h-16 lg:rounded-[32px] border-[3px] border-[#e7e7e3] rounded-lg imgs"></div>
              <div
                className="lg:w-40 lg:h-40 w-16 h-16 lg:rounded-[32px] 
               rounded-lg border-[3px] imgss border-[#e7e7e3]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
