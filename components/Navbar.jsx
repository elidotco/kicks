"use client";

import Image from "next/image";
import React from "react";
import logo from "../images/lg.png";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import Example from "./Dropdown";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 p-[32px] hidden  bg-[#fafafa] md:flex justify-between flex-row  mb-2 rounded-3xl  items-center ">
        {" "}
        <ul className="flex justify-between  gap-5">
          <li>🔥 New Drops</li>
          <Example name={"Men"} />
          <Example name={"Women"} />
        </ul>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={550}
          className="w-32 h-8"
        />
        <div className="flex gap-10 items-center ">
          <CiSearch size={20} />
          <FaUser size={20} />
          <div className="rounded-full w-8 flex justify-center items-center h-8 bg-[#FFA527]">
            0
          </div>
        </div>
      </div>
      <div className="w-full h-[52px] bg-[#fafafa] p-[20px] rounded-xl md:hidden flex items-center justify-between">
        <Bars3Icon className="h-6 w-6 text-gray-500" />
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={550}
          className="w-20 h-5"
        />
        <div className="flex gap-4 items-center ">
          <FaUser />
          <div className="rounded-full w-5 flex justify-center items-center h-5 bg-[#FFA527]">
            0
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
