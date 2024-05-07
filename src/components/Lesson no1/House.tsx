import React, { useState } from "react";
import img1 from "../../img/House/Group 33508 (2).png";
import img2 from "../../img/House/Group 33508.png";
import img3 from "../../img/House/Group 33514 (1).png";
import img4 from "../../img/House/Group 33514.png";
import img5 from "../../img/House/Group 33515 (1).png";
import img6 from "../../img/House/Group 33515.png";

export const House = () => {
  const [Color, setcolor] = useState("");
  const Mapp = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  const Mapp4 = [{ img: img2 }, { img: img3 }, { img: img5 }];
  const Mapp1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const Mapp2 = [{ img: img3 }, { img: img5 }, { img: img4 }];
  const Mapp3 = [{ img: img4 }, { img: img5 }, { img: img6 }];
  return (
    <>
      {/* <div className="sm:flex  justify-around mt-[5%]">
        <div className="ml-[10px] cursor-pointer">
          <button
            onClick={() => setcolor("ALLitem")}
            className={`${
              Color === "ALLitem"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[50%] sm:w-[100%]  p-[8%] rounded-2xl`}
          >
            All Items (5125)
          </button>
        </div>


        <div className="sm:hidden">
          <br />
        </div>


        <div className="ml-[10px] cursor-pointer">
          <button
            onClick={() => setcolor("Residential Spaces")}
            className={` ${
              Color === "Residential Spaces"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium  w-[50%] sm:w-[100%] p-[8%] rounded-2xl`}
          >
            Residential Spaces (64)
          </button>
        </div>


        <div className="sm:hidden">
          <br />
        </div>


        <div className="ml-[10px] cursor-pointer">
          <button
            onClick={() => setcolor("Sports Venues")}
            className={` ${
              Color === "Sports Venues"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[50%] sm:w-[100%]  p-[8%] rounded-2xl`}
          >
            Sports Venues
          </button>
        </div>


        <div className="sm:hidden">
          <br />
        </div>


        <div className="ml-[10px] cursor-pointer">
          <button
            onClick={() => setcolor(" Meeting Spaces")}
            className={` ${
              Color === " Meeting Spaces"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[50%] sm:w-[100%]  p-[8%] rounded-2xl`}
          >
            Meeting Spaces
          </button>
        </div>


        <div className="sm:hidden">
          <br />
        </div>


        <div className="ml-[10px] cursor-pointer">
          <button
            onClick={() => setcolor("Vans & Buses")}
            className={`${
              Color === "Vans & Buses"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[50%] sm:w-[100%]  p-[8%] rounded-2xl`}
          >
            Vans & Buses
          </button>
        </div>
      </div> */}

      <div className="sm:flex flex w-[95%] sm:w-[100%] overflow-x-auto sm:overflow-x-hidden justify-around mt-[5%]">
        <div
          className="ml-[10px] cursor-pointer"
          >
          <button
              onClick={() => setcolor("ALLitem")}
            className={`${
              Color === "ALLitem"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[300%] mxx:w-[250%] sm:w-[100%]  p-[15%] mxx:p-[10%] sm:p-[8%] rounded-2xl`}
          >
            All Items (9)
          </button>
        </div>

        <div className="ml-[0px] cursor-pointer">
          <button
            onClick={() => setcolor("Residential Spaces")}
            className={` ${
              Color === "Residential Spaces"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[200%]  sm:w-[100%] ml-[180%] mxx:ml-[120%] sm:ml-0 p-[5%] sm:p-[8%] rounded-2xl`}
          >
            Residential Spaces (64)
          </button>
        </div>

        <div className="ml-[0px] cursor-pointer">
          <button
            onClick={() => setcolor("Sports Venues")}
            className={` ${
              Color === "Sports Venues"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[200%]  sm:w-[100%] mxx:ml-[400%] ml-[500%] sm:ml-0 p-[5%] sm:p-[8%] rounded-2xl`}
          >
            Sports Venues
          </button>
        </div>

        <div className="ml-[0px] cursor-pointer">
          <button
            onClick={() => setcolor(" Meeting Spaces")}
            className={` ${
              Color === " Meeting Spaces"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[200%]  sm:w-[100%] mxx:ml-[500%] ml-[550%] sm:ml-0 p-[10%] sm:p-[8%] rounded-2xl`}
          >
            Meeting Spaces
          </button>
        </div>

        <div className="ml-[0px] cursor-pointer">
          <button
            onClick={() => setcolor("Vans & Buses")}
            className={`${
              Color === "Vans & Buses"
                ? "bg-[#E93740] text-white"
                : "bg-[#E8E8E8] text-black"
            } font-medium w-[200%]  sm:w-[100%] mxx:ml-[800%] ml-[950%] sm:ml-0 p-[5%] sm:p-[8%] rounded-2xl`}
          >
            Vans & Buses
          </button>
        </div>
      </div>

      

      {Color === "ALLitem" ? (
        <>
          <div className="sm:grid sm:grid-cols-3">
            {Mapp.map((item, index) => (
              <div key={index} className="flex flex-col items-center  mt-[0%]">
                <img
                  src={item.img}
                  alt={`${index}`}
                  className="w-[50%] sm:w-[80%] mt-[10%] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </>
      ) : Color === "Residential Spaces" ? (
        <>
          <div className="sm:grid sm:grid-cols-3">
            {Mapp1.map((item, index) => (
              <div key={index} className="flex flex-col items-center  mt-[0%]">
                <img
                  src={item.img}
                  alt={`${index}`}
                  className="w-[50%] sm:w-[80%] mt-[10%] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </>
      ) : Color === "Sports Venues" ? (
        <>
          <div className="sm:grid sm:grid-cols-3">
            {Mapp2.map((item, index) => (
              <div key={index} className="flex flex-col items-center  mt-[0%]">
                <img
                  src={item.img}
                  alt={`${index}`}
                  className="w-[50%] sm:w-[80%] mt-[10%] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </>
      ) : Color === " Meeting Spaces" ? (
        <>
          <div className="sm:grid sm:grid-cols-3">
            {Mapp3.map((item, index) => (
              <div key={index} className="flex flex-col items-center  mt-[0%]">
                <img
                  src={item.img}
                  alt={`${index}`}
                  className="w-[50%] sm:w-[80%] mt-[10%] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </>
      ) : Color === "Vans & Buses" ? (
        <>
          <div className="sm:grid sm:grid-cols-3">
            {Mapp4.map((item, index) => (
              <div key={index} className="flex flex-col items-center  mt-[0%]">
                <img
                  src={item.img}
                  alt={`${index}`}
                  className="w-[50%] sm:w-[80%] mt-[10%] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};
