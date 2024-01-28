"use client";

import { Carousel, Footer, Navbar } from "@/components";
import { HeartIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = ({ params }) => {
  const router = useRouter();
  const arr = [0, 1, 2, 3, 4, 5];
  useEffect(() => {
    if (arr.includes(params.idex) === false) {
      router.push("/not-found");
    }

    return () => {};
  });

  return (
    <>
      <Navbar />
      <div className="pt-10">
        {/* Product Page */}
        <div className="flex flex-col md:flex-row justify-between pb-10 ">
          <div className=" hidden md:w-4/6  md:flex md:flex-row md:flex-wrap gap-4 ">
            <Image
              src="https://shorturl.at/agV28"
              alt=""
              width={300}
              height={300}
              className="w-[48%] h-[500px] rounded-tl-[48px]"
            />
            <Image
              src="https://shorturl.at/BHY68"
              alt=""
              width={300}
              height={300}
              className="w-[48%] h-[500px] rounded-tr-[48px]"
            />
            <Image
              src="https://shorturl.at/choK9"
              alt=""
              width={300}
              height={300}
              className="w-[48%] h-[500px] rounded-bl-[48px]"
            />
            <Image
              src="https://shorturl.at/knRT5"
              alt=""
              width={300}
              height={300}
              className="w-[48%] h-[500px] rounded-br-[48px]"
            />
          </div>
          <div className="w-full md:hidden mb-5 ">
            <Swiper slidesPerView={1}>
              <SwiperSlide>
                <Image
                  src="https://shorturl.at/agV28"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-[273px] "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://shorturl.at/BHY68"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-[273px] "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://shorturl.at/choK9"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-[273px] "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://shorturl.at/knRT5"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-[273px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" w-full md:w-1/3  gap-4 flex flex-col px-5 ">
            <p className="bg-blue-500 px-3 py-2 text-[#fff] rounded-xl w-32">
              New Release
            </p>
            <h3 className="font-semibold text-3xl uppercase">
              ADIDAS 4DFWD X PARLEY RUNNING SHOES
            </h3>
            <p className="text-blue-500 font-semibold">$125.00</p>
            {/* Colors checkbox */}

            <div>
              <p className="font-semibold">Colors</p>
              <div className="flex flex-row gap-4">
                <input
                  name="radio"
                  type="radio"
                  defaultChecked
                  className=" appearance-none  w-8 h-8 rounded-full checked:border-2  checked:border-[#232321] before:bg-[#232321] before:content-[''] 
              p-auto before:block before:m-[15%] before:w-[70%] before:h-[70%]  before:rounded-full transition-shadow  "
                />
                <input
                  name="radio"
                  type="radio"
                  className=" appearance-none  w-8 h-8 rounded-full checked:border-2  checked:border-[#707E6E] before:bg-[#707E6E] before:content-[''] 
              p-auto before:block before:m-[15%] before:w-[70%] before:h-[70%]  before:rounded-full transition-shadow  "
                />
              </div>
            </div>

            {/* Shoe Size Checkbox */}
            <div>
              <p className="font-semibold">Shoe Size</p>
              {/* Size checkbox */}
              <div className="flex flex-row gap-2">
                <input
                  name="checkbox"
                  type="radio"
                  defaultChecked
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['38'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />

                <input
                  name="checkbox"
                  type="radio"
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['39'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />

                <input
                  name="checkbox"
                  type="radio"
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['38'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />

                <input
                  name="checkbox"
                  type="radio"
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['40'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />

                <input
                  name="checkbox"
                  type="radio"
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['41'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />

                <input
                  name="checkbox"
                  type="radio"
                  className="appearance-none w-10 h-10 bg-white  before:block before:content-['42'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
                />
              </div>
            </div>

            {/* Add to cart buttons */}
            <div className="flex justify-between mt-5">
              <button className="w-4/5 bg-black text-white rounded-lg px-4 py-2">
                Add to cart
              </button>
              <button className="bg-black text-sm w-[18%] rounded-lg  flex justify-center  items-center  text-white">
                <HeartIcon fontSize={10} className="w-5" />
              </button>
            </div>
            <button className="w-full bg-[#4A69E2] rounded-lg text-white px-4 py-2">
              buy Now
            </button>
            {/* about product section */}
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold">About Product</h3>
              <p>
                Shadow Navy / Army Green This product is excluded from all
                promotional discounts and offers. Pay over time in interest-free
                installments with Affirm, Klarna or Afterpay. Join adiClub to
                get unlimited free standard shipping, returns, & exchanges.
              </p>
            </div>
          </div>
        </div>
        <Carousel />
        <Footer />
      </div>
    </>
  );
};

export default Product;
