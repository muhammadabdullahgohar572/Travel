import React from "react";
import Img from "../../img/navbarimg/Group 33507.png";
import no1 from "../../img/Hero/Frame 33632.png";
import no2 from "../../img/Hero/Group 33502.png";
import no3 from "../../img/Hero/Group 33503.png";
import no4 from "../../img/Hero/Group 33504.png";
import { House } from "./House";

export const Hero1 = () => {
  const Data = [
    { img: no1 },
    { img: no2 },
    { img: no3 },
    { img: no4 },
    { img: no4 },
  ];
  return (
    <>
      <br />
      <br />

      <div className="text-center ">
        <h1 className="text-3xl font-medium">Browse From Top Categories</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Img} alt="Hero Image" />
        </div>

        <div className="sm:flex sm:ml-0 ml-[10%] sm:justify-between justify-center mt-[5%]">
          {Data.map((item) => {
            return (
              <>
                <div className="sm:w-[40%] w-[80%] sm:mt-0 mt-[5%]">
                  <img src={item.img} alt="" className="cursor-pointer " />
                </div>
              </>
            );
          })}
        </div>

       <div className="">
        <br/>
       <h1 className="text-3xl font-medium">Featured Listings</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Img} alt="Hero Image" />
        </div>
       </div>
       <House/>
      </div>
    </>
  );
};
