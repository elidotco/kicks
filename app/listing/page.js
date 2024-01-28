import { Cards, Filter, Footer, Navbar } from "@/components";
import ldata from "@/data/ldata";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="listing-banner w-full rounded-[16px] lg:rounded-[48px]  h-48 md:h-[300px] my-10 p-5 text-white">
        <div className="md:w-[45%]">
          <p className="md:text-2xl">Limited time only</p>
          <h3 className="font-semibold md:text-7xl text-2xl  ">Get 30% off</h3>
          <p className=" text-base md:text-xl">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div>
      {/* listing */}
      <div className="flex justify-between items-end mb-14">
        <h2 className="lg:text-4xl text-2xl lg:uppercase font-semibold w-2/4 ">
          listings
        </h2>
        <div className="">Shop New Drops</div>
      </div>
      <div className="flex py-10">
        <Filter />
        <div className="w-full flex flex-row justify-between lg:gap-10 gap-5  md:pl-10 flex-wrap">
          {ldata.map((item, index) => (
            <Cards data={item} index={index} key={item.name} islist={true} />
          ))}
        </div>
      </div>
      <Footer />
      page
    </>
  );
};

export default page;
