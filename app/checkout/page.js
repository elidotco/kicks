import { CartCard, Checkout, Footer } from "@/components";
import ldata from "@/data/ldata";
import React from "react";

const page = () => {
  const items = [1, 3, 5];
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-[70%] pr-5">
          <Checkout />
        </div>
        <div className="flex w-full md:w-[30%] flex-col">
          <div className="flex flex-col  w-full gap-5 mt-10 md:mt-0 rounded-3xl bg-white p-10 md:bg-transparent">
            <h3 className="font-semibold text-[20px] md:text-[32px]  py-5">
              Order Summary
            </h3>

            <div className="flex justify-between">
              <p>
                {/* {items.length} Item{items.length > 1 ? "s" : ""}{" "} */}3
                Items
              </p>
              <p>$130.00</p>
            </div>
            <div className="flex justify-between">
              <p> Delivery</p>
              <p>$6.00</p>
            </div>
            <div className="flex justify-between">
              <p> Tax</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold "> Total </p>
              <p className="font-semibold ">$136.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-white rounded-lg p-5 mt-10">
            {ldata.map((item, index) =>
              items.includes(index) ? (
                <CartCard data={item} ischeckout={true} key={index} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
