import ldata from "@/data/ldata";
import React from "react";
import { CartCard } from ".";

const Cart = () => {
  const items = [1, 3, 5];
  return (
    <div>
      <div className="w-full my-5 md:my-10 lg:my-20">
        <p className="font-semibold text-3xl py-2">Saving to celebrate</p>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p>join us or sign up</p>
      </div>
      <div className="flex w-full justify-between flex-col md:flex-row ">
        {/* Cart items */}
        <div className="bg-white w-full md:w-[70%] p-5  rounded-3xl">
          <div className="mb-10">
            {" "}
            <h2 className="font-semibold text-2xl">Your bag</h2>
            <p>
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {ldata.map((item, index) =>
              items.includes(index) ? <CartCard data={item} key={index} /> : ""
            )}
          </div>
        </div>
        {/* Order summary */}
        <div className="flex flex-col md:w-[25%] w-full gap-5 mt-10 md:mt-0 rounded-3xl bg-white p-10 md:bg-transparent">
          <h3 className="font-semibold text-[20px] md:text-[32px]  py-5">
            Order Summary
          </h3>

          <div className="flex justify-between">
            <p>
              {items.length} Item{items.length > 1 ? "s" : ""}{" "}
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
          <button className="w-full bg-black text-white rounded-lg px-4 py-2">
            Checkout
          </button>
          <a href="#" className="underline">
            use a promo code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
