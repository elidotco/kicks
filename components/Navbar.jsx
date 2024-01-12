import Image from "next/image";
import React from "react";
import logo from "../images/lg.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 p-[32px]  bg-[#fafafa] flex justify-between flex-row  mb-20 rounded-3xl  ">
      {" "}
      <ul className="flex justify-between  gap-5">
        <li>🔥 New Drops</li>
        <li> Women</li>
        <li> Men</li>
      </ul>
      <Image src={logo} alt="logo" width={100} height={350} />
      <div className="not"></div>
    </div>
  );
};

export default Navbar;
