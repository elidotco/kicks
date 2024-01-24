import React from "react";
import logo from "../images/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#4A69E2] rounded-[48px] relatvie bottom-0">
      <div className=" flex  items-center flex-col md:flex-row gap-28  p-10 ">
        <div className=" flex flex-col gap-5 w-[40%]">
          <h3 className="font-semibold leading-none text-[#fff] text-[43px]">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p>Sign up for free! Join the communits</p>
          <div className=" gap-5">
            <input className="bg-transparent h-12  w-[65%] rounded-lg border border-[#fafafa] " />
            <button className="bg-black text-white px-5 py-3 ml-3 rounded-lg ">
              Submit
            </button>
          </div>
        </div>
        <div className="">
          <Image src={logo} alt="lgo image" width={384} height={88} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
