import React from "react";
import logo from "../images/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#4A69E2] rounded-3xl md:rounded-[48px] relatvie bottom-0 ">
      <div className=" flex  md:items-center flex-col md:flex-row gap-10  lg:gap-28 p-4 md:p-10 pb-20">
        <div className=" flex flex-col gap-5 w-full md:w-[40%]">
          <h3 className="font-semibold leading-none text-[#fff] text-[32px]      md:text-[43px]">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p className="text-[#fff]">Sign up for free! Join the communits</p>
          <div className=" gap-5">
            <input className="bg-transparent h-12  w-[65%] rounded-lg border border-[#fafafa] " />
            <button className="bg-black uppercase text-white px-5 py-3 ml-3 rounded-lg ">
              Submit
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={logo}
            alt="lgo image"
            width={190}
            height={47}
            className="md:w-[384px] md:h-[88px]  "
          />
        </div>
      </div>
      <div className="w-full  bg-[#232321] rounded-3xl p-5 pb-0">
        <div className=" text-[#fff] flex flex-col md:flex-row md:gap-20">
          <div className="flex flex-col  gap-5 pb-4">
            <h2 className="font-semibold text-3xl text-[#FFA52F]">About us</h2>
            <p>
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="flex flex-col  gap-5 pb-4">
            <h2 className="font-semibold text-3xl text-[#FFA52F]">
              Categories
            </h2>
            <p>Runners</p>
            <p>Sneakers</p>
            <p>Basketball</p>
            <p>Golf</p>
            <p>Hiking</p>
          </div>
          <div className="flex flex-col  gap-5 pb-4 ">
            <h2 className="font-semibold text-3xl text-[#FFA52F]">Company</h2>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="">
            <h2 className="font-semibold text-3xl text-[#FFA52F]">Follow us</h2>
            <div className="flex flex-row gap-5">
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <Image
          src={logo}
          alt="also logo"
          width={300}
          height={300}
          className="w-full h-auto pt-5 md:pt-10"
        />
      </div>
    </div>
  );
};

export default Footer;
