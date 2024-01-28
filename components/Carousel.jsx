"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Cards } from ".";
import data from "@/data/data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Carousel = () => {
  const swiperRef = useRef();

  return (
    <>
      <div className="w-full  mb-20 mt-20 hidden md:block">
        <div className="flex justify-between items-center mb-10">
          <h3 className="lg:text-5xl text-2xl  font-semibold w-2/4 ">
            You may Also like
          </h3>
          <div className="flex gap-3 text-white text-sm ">
            <button
              className="w-10 h-10 rounded-lg bg-black"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon />
            </button>
            <br />
            <button
              className="w-10 h-10 rounded-lg bg-black "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={50}
          slidesPerView={4}
          className="mySwiper flex-wrap"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards data={item} key={item.name} isclass={true} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="bg-green-500 w-full h-40"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-500 w-full h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-500 w-full h-40"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 w-full h-40"></div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="w-full md:hidden  mb-20 mt-20">
        <div className="flex justify-between items-center mb-10">
          <h3 className="lg:text-5xl text-2xl  font-semibold w-2/4 ">
            You may Also like
          </h3>
          <div className="flex gap-3 text-white text-sm ">
            <button
              className="w-10 h-10 rounded-lg bg-black"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon />
            </button>
            <br />
            <button
              className="w-10 h-10 rounded-lg bg-black "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={2}
          className="mySwiper flex-wrap"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards data={item} key={item.name} isclass={true} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="bg-green-500 w-full h-40"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-500 w-full h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-500 w-full h-40"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 w-full h-40"></div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
