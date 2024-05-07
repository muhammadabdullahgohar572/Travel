import React from "react";
import Line from "../../img/navbarimg/Group 33507.png";
import no1 from "../../img/Sun/Rectangle 2187.png";
import no2 from "../../img/Sun/Rectangle 2188.png";
import no3 from "../../img/Sun/Rectangle 2190.png";
import no4 from "../../img/Sun/Rectangle 2192.png";
import no5 from "../../img/Sun/Rectangle 2193.png";
import no6 from "../../img/Sun/Rectangle 2191.png";
import footer from "../../img/Footer/i-parallax-11-1024x683.jpeg.png";
import footer1 from "../../img/Footer/Link → i-parallax-12-1024x683.jpeg.png";
import footer2 from "../../img/Footer/Link → i-parallax-13-1024x683.jpeg.png";
import footer3 from "../../img/Footer/Link → i-parallax-14-1024x683.jpeg.png";
import footer4 from "../../img/Footer/Link → i-parallax-15-1024x683.jpeg.png";
import { Footer } from "./Footer";

const Rating = () => {
  return (
    <>
      <div className="w-full mt-[10%] p-[5%] bg-[#E8E8E8] mt-10% sm:flex items-center text-center justify-center sm:justify-around p-4%">
        <div className="text-2xl font-semibold cursor-pointer">
          <span>
            Insights and <br />
            Performance <br /> Metrics
          </span>
        </div>

        <div className="bg-black cursor-pointer mt-[5%] sm:mt-0 sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white mb-4 sm:mb-0">
          <span>5000+</span>
          <br />
          <span>Total Listings in the System</span>
        </div>

        <div className="bg-black cursor-pointer  sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white mb-4 sm:mb-0">
          <span>1000+</span>
          <br />
          <span>Active Listings</span>
        </div>

        <div className="bg-black cursor-pointer  sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white">
          <span>30+</span>
          <br />
          <span>Articles in the Blog</span>
        </div>
      </div>

      <div className="text-center">
        <br />
        <h1 className="text-3xl font-medium">Featured Locations</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Line} alt="Hero Image" />
        </div>
      </div>

      <div className="sm:flex mt-[10%] p-[5%] justify-around">
        <div>
          <img src={no1} alt="" className="sm:p-[5%]" />
        </div>
        <div className=" sm:flex sm:p-[2%]">
          <div>
            <img
              src={no2}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
            <br />
            <img
              src={no5}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
          </div>
          <div className=" sm:p-[2%]">
            <img
              src={no3}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
            <br />
            <img
              src={no6}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
          </div>
        </div>
        <div>
          <img src={no4} alt="" className="sm:p-[5%]" />
        </div>
      </div>

      <div className="text-center">
        <br />
        <h1 className="text-3xl font-medium">Important Articles</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Line} alt="Hero Image" />
        </div>
      </div>

      <div className="sm:flex sm:justify-around mt-[10%] p-[5%] justify-center">
        <div>
          <img src={footer} alt="" className="w-[80%]" />
          <br />
          <span className="text-red-500">February 4, 2024</span>
          <br />
          <span className="font-semibold">
            Top Tips for Finding the Perfect Rental
          </span>
          <br />
          <span className="font-semibold text-[#8B8B8B]">
            Discover expert advice on how to find the ideal rental<br/> property that
            meets your needs and budget.
          </span>
        </div>

        <div>
          <div className="sm:flex justify-between mt-[10%] sm:mt-0">
            <div>
              <img src={footer1} alt="" className="h-[80%] w-[90%]"/>
            </div>
            <div className="ml-[5%] mt-[10%] sm:mt-0">
              <span className="text-[#E93740]">May 7, 2024</span>
              <br />
              <span className="font-semibold">
                Car Rental Hacks for a Smooth Journey
              </span>
              <br />
              <span>
                Learn insider tips for getting the best deals and making
                <br /> the most of your rental car experience.
              </span>
            </div>
          </div>
          <br/>

          <div className="sm:flex justify-between mt-[10%] sm:mt-0">
            <div>
              <img src={footer2} alt="" className="h-[80%] w-[90%]"/>
            </div>
            <div className="ml-[5%] mt-[10%] sm:mt-0">
              <span className="text-[#E93740]">April 25, 2024</span>
              <br />
              <span className="font-semibold">
                Managing Your Rental Items: A <br />
                Comprehensive Guide
              </span>
              <br />
              <span>
                Get valuable insights on how to effectively manage and
                <br /> maintain your rented items.
              </span>
            </div>
          </div>
          <br/>

          <div className="sm:flex justify-between mt-[10%] sm:mt-0">
            <div>
              <img src={footer3} alt="" className="h-[80%] w-[90%]"/>
            </div>
            <div className="ml-[5%] mt-[10%] sm:mt-0">
              <span className="text-[#E93740]">January 2, 2024</span>
              <br />
              <span className="font-semibold">
                Navigating the Rental Market: Insights
                <br /> for New Renters
              </span>
              <br />
              <span>
                Explore key considerations and useful tips for individuals
                <br /> new to the rental market.
              </span>
            </div>
          </div>
          <br />

          <div className="sm:flex justify-between mt-[10%] sm:mt-0">
            <div>
              <img src={footer4}  alt="" className="h-[80%] w-[90%]"/>
            </div>
            <div className="ml-[5%] mt-[10%] sm:mt-0">
              <span className="text-[#E93740]">April 7, 2024</span>
              <br />
              <span className="font-semibold">
                Maximizing Returns: Strategies for Rental
                <br /> Property Owners
              </span>
              <br />
              <span>
                Learn strategies to optimize the return on investment for <br />
                your rental property.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Rating;
