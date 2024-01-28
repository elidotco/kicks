import React from "react";

const Filter = () => {
  return (
    <div className="w-[25%] hidden lg:block ">
      <h2 className="font-semibold text-3xl py-5">Filters</h2>
      <div className="py-5">
        <p className="font-semibold">Shoe Size</p>
        {/* Size checkbox */}
        <div className="flex flex-row flex-wrap gap-[10px] ">
          <input
            name="checkbox"
            type="radio"
            defaultChecked
            abled
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

          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['43'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['44'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['45'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['46'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['47'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['48'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
          <input
            name="checkbox"
            type="radio"
            className="appearance-none w-10 h-10 bg-white  before:block before:content-['49'] checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
          />
        </div>

        <div className="py-5">
          <p className="font-semibold py-5">Colors</p>
          <div className="flex flex-row flex-wrap gap-[10px] ">
            <input
              name="checkbox"
              type="radio"
              defaultChecked
              abled
              className="appearance-none w-10 h-10 bg-[beige]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />

            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-white  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />

            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[#234D41]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />

            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[#353336]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />

            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[#677282]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />

            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[lightgreen]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[red]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[lightpink]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[lightblue] before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[brown]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[indigo]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
            <input
              name="checkbox"
              type="radio"
              className="appearance-none w-10 h-10 bg-[gold]  before:block  checked:before:text-[#fff] before:text-[#232321] before:m-auto checked:bg-black rounded-lg before:w-full before:h-full before:bg-green before:mx-[30%] before:my-[20%] "
            />
          </div>
        </div>
      </div>

      {/* Shoe Size Checkbox */}
      <div className="">
        <p className="font-semibold py-5">Type</p>

        <div className="py-5 flex flex-col">
          <div className="">
            <input
              type="checkbox"
              name="casual"
              id=""
              className=" checked:bg-blue transition-all  w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="casual">Casual Shoes</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="runners"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="runners">Runners</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="hiking"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="hiking">Hiking</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="sneaker"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="sneaker">Sneaker</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="basketball"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="basketball">Basketball</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="golf"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="golf">Golf</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="outdoor"
              id=""
              className=" checked:bg-blue transition-all w-4 h-4 rounded-sm border border-black mr-4"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
