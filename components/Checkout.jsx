import React from "react";

const Checkout = () => {
  return (
    <div className="py-10">
      <h2 className="font-bold text-3xl capitalize ">Contact details</h2>
      <p className="py-4">
        We will use these details to keep you inform about your delivery.
      </p>
      {/* input section */}
      <div className="flex gap-10 flex-col">
        <input
          className="bg-transparent  py-3 px-3 w-full md:w-[48%] border border-black rounded-lg outline-none"
          type="email"
          placeholder="email address*"
        />
        {/* Name */}
        <h2 className="font-semibold text-3xl capitalize">Shipping Address</h2>
        <div className="flex justify-between flex-wrap gap-10 md:gap-0">
          <input
            placeholder="fist Name*"
            className="bg-transparent  w-full py-3 px-3 md:w-[48%] border border-black rounded-lg outline-none"
            type="text"
          />
          <input
            placeholder="Last Name*"
            className="bg-transparent  py-3 px-3 border border-black rounded-lg outline-none w-full md:w-[48%]"
            type="text"
          />
        </div>
        <input
          placeholder="Delivery Address*"
          className="bg-transparent  py-3 px-3 w-full border border-black rounded-lg outline-none"
          type="text"
        />
        <input
          placeholder="Phone Number*"
          className="bg-transparent border  py-3 px-3 border-black rounded-lg outline-none w-full md:w-1/2"
          type="text"
        />
      </div>
      <h3 className="font-semibold text-3xl py-20">Delivery Options</h3>
      <div className="flex flex-col gap-10 pb-10">
        <div className="w-full p-4 bg-white cursor-pointer rounded-2xl">
          <div className="flex justify-between">
            <p className="font-semibold-text-2xl">Standard Delivery</p>
            <p className="text-blue font-semibold">$6.00</p>
          </div>
          <p>Enter your address to see when you’ll get your order</p>
        </div>
        <div className="cursor-pointer w-full p-4 border border-black rounded-2xl">
          <div className="flex justify-between">
            <p className="font-semibold-text-2xl"> Collect from Store</p>
            <p className=" font-semibold">Free</p>
          </div>
        </div>
      </div>
      <div className="py-5 flex flex-col gap-2">
        <div className="">
          <input
            type="checkbox"
            name="basketball"
            id=""
            className=" checked:bg-black transition-all w-4 h-4 rounded-sm border border-black mr-4"
          />
          <label htmlFor="basketball">
            My billing and delivery information are the same{" "}
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="golf"
            id=""
            className=" checked:bg-black transition-all w-4 h-4 rounded-sm border border-black mr-4"
          />
          <label htmlFor="golf">’m 13+ year old</label>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="outdoor"
            id=""
            className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
          />
          <label htmlFor="outdoor">
            {" "}
            Yes i would like to recieve newsletters
          </label>
        </div>
      </div>
      <button className="w-full md:w-[48%] bg-black text-white rounded-lg px-4 py-2">
        Pay
      </button>
    </div>
  );
};

export default Checkout;
