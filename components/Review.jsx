import React from "react";
import { Rcards } from ".";
import rdata from "@/data/rdata";

const Review = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-end mb-14">
        <h2 className="lg:text-7xl text-2xl lg:uppercase font-semibold w-2/4 ">
          Reviews
        </h2>
        <button className="md:h-12 h-10 w-36 md:w-20 bg-[#4A69E2] rounded-lg text-white">
          See All
        </button>
      </div>
      {/* review cards section */}
      <div className="w-full flex justify-between gap-10 flex-wrap items-center ">
        {rdata.map((item, index) => (
          <Rcards key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Review;
