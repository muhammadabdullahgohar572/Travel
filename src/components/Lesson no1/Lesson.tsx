import React from "react";
import Hero from "../../img/navbarimg/Mask group.png";
import { Hero1 } from "./Hero";
import Rating from "./Rating";

const Lesson = () => {
  return (
    <>
      <div className="absolute overflow-hidden mt-[20%] sm:mt-0 -z-50 ">
        <img
          src={Hero}
          alt="Hero Image"
          className="w-full h-[400px] md:h-full overflow-hidden"
        />

        <div className="hidden sm:grid  absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div>
            <span className="text-2xl sm:text-4xl font-bold">
              Discover Your{" "}
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-[#E93740]">
              Perfect Rental
            </span>
            <p className="font-semibold md:font-bold text-lg">
              Rent Cars, Houses, and Items in Just a Few Clicks
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-[2%]">
            <div className="ml-[10px] cursor-pointer">
              <button className="bg-[#E93740] w-[70px] sm:w-[50%] text-white p-[8%] rounded-2xl">
                Places
              </button>
            </div>
            <div className="ml-[10px] cursor-pointer">
              <button className="bg-[#FFFFFF] w-[70px] sm:w-[50%] text-black p-[8%] rounded-2xl">
                Rides
              </button>
            </div>
            <div className="md:flex hidden ml-[10px] cursor-pointer">
              <button className="bg-[#FFFFFF] w-[70px] sm:w-[50%] text-black p-[8%] rounded-2xl">
                Things
              </button>
            </div>
          </div>

          <div className="sm:w-[100%] w-[250px] -z-50 mt-[5%] p-[5%] sm:p-[3%] flex bg-[#FFFFFF] rounded-xl">
            <div className="flex">
              <i className="fa-solid fa-magnifying-glass text-[#979797]"></i>
              <input
                type="search"
                placeholder="Search for cars, houses, and more.."
                className="ml-[5%] border-white outline-none"
              />
            </div>
          </div>
        </div>

        <div className=" sm:hidden   absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div>
            <span className="text-2xl sm:text-4xl font-bold">
              Discover Your{" "}
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-[#E93740]">
              Perfect Rental
            </span>
            <p className="font-semibold md:font-bold text-lg">
              Rent Cars, Houses, and Items in Just a Few Clicks
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-[2%]">
            <div className="ml-[10px] cursor-pointer">
              <button className="bg-[#E93740] w-[70px] sm:w-[50%] text-white p-[8%] rounded-2xl">
                Places
              </button>
            </div>
            <div className="ml-[10px] cursor-pointer">
              <button className="bg-[#FFFFFF] w-[70px] sm:w-[50%] text-black p-[8%] rounded-2xl">
                Rides
              </button>
            </div>
            <div className="md:flex hidden ml-[10px] cursor-pointer">
              <button className="bg-[#FFFFFF] w-[70px] sm:w-[50%] text-black p-[8%] rounded-2xl">
                Things
              </button>
            </div>
          </div>

          <div className="sm:w-[100%] w-[250px] -z-50 mt-[5%] p-[5%] sm:p-[3%] flex bg-[#FFFFFF] rounded-xl">
            <div className="flex">
              <i className="fa-solid fa-magnifying-glass text-[#979797]"></i>
              <input
                type="search"
                placeholder="Search for cars, houses, and more.."
                className="ml-[5%] border-white outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <Hero1 />
          <Rating/>
        </div>
      </div>
    </>
  );
};

export default Lesson;
