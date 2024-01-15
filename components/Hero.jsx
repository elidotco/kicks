import Image from "next/image";
import React from "react";
import image from "../images/image 14.png";

const Hero = () => {
  return (
    <div>
      <div className="  w-full">
        <div className="image w-full h-[360px] lg:h-[750px] rounded-[64px] p-10 flex ">
          <div className="mt-auto flex flex-row justify-between w-full items-center">
            <div className="">
              <h2 className="text-2xl lg:text-[70px] font-semibold text-[#fff]">
                NIKE AIR MAX
              </h2>
              <p className="font-semibold text-[#E7E7E3] pb-4 ">
                Nike introducing the new air max for everyone&apos; comfort
              </p>

              <button className=" w-[143px] h-[42px] text-white bg-[#4A69E2] rounded-lg">
                {" "}
                Shop Now
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="lg:w-40 lg:h-40 w-16 h-16 rounded-[32px] border-[3px] border-[#e7e7e3]"></div>
              <div className="lg:w-40 lg:h-40 w-16 h-16 rounded-[32px] border-[3px] border-[#e7e7e3]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
