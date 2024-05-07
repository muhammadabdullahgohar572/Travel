import React from "react";
import logo from "../../img/navbarimg/logo 1.png";
import you from "../../img/foo/Group 561.png";
import link from "../../img/foo/Group 560.png";
import titter from "../../img/foo/Group 559.png";
import face from "../../img/foo/Group 563.png";
export const Footer = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] p-[8%] sm:flex justify-around">
        <div>
          <img src={logo} alt="" />
          <br />
          <span className="mt-[5%] font-semibold">
            Sri Lanka's first & largest platform designed to create
            <br /> an online marketplace exclusively for RENT
          </span>
          <br />
          <div className="flex mt-[5%]">
            <div className="ml-[5%]">
              <img src={you} alt="" />
            </div>
            <div className="ml-[5%]">
              <img src={face} alt="" />
            </div>
            <div className="ml-[5%]">
              <img src={link} alt="" />
            </div>
            <div className="ml-[5%]">
              <img src={titter} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[15%] sm:mt-0">
          <h1 className="text-red-500 font-semibold">Navigation</h1>
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            {" "}
            About Us
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Blog
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Terms of Use
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Privacy Policy
          </span>
          <br />
          <br />
        </div>

        <div className="mt-[15%] sm:mt-0">
          <h1 className="text-red-500 font-semibold">Featured Locations</h1>
          <br />

          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            {" "}
            Kandy
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Anuradhapura
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Badulla
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Colombo
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Kaluthara
          </span>
          <br />
          <br />
        </div>

        <div className="mt-[15%] sm:mt-0">
          <h1 className="text-red-500 font-semibold">Help</h1>
          <br />

          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            FAQ
          </span>
          <br />
          <br />
          <span className="font-semibold cursor-pointer hover:text-red-500 hover:underline ">
            Contact Us
          </span>
          <br />
        </div>

      </div>
    </>
  );
};
