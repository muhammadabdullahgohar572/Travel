import React, { useState } from "react";
import logo from "../../img/navbarimg/logo 1.png";
import Bars from "../../img/navbarimg/hamburger-menu-icon.webp";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setnav] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      console.log("File uploaded:", fileList[0]);
      // You can perform further actions here, like uploading the file
    }
  };
  return (
    <>
      <div className=" align-middle p-[10%] shadow-xl bg-slate-50 flex fixed justify-between md:justify-around w-full sm:p-[2%] z-50">
        <div>
          <Link to={"page"}>
            <img
              src={logo}
              className="w-[100%]  sm:w-[70%] cursor-pointer"
              alt="This is logo"
            />
          </Link>
        </div>

        <div className="md:flex md:mr-[12%] hidden">
          <div>
            <Link to={"home"}>
              <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
                Home
              </span>
            </Link>
            <Link to={"Rentals"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Rentals
            </span>
            </Link>
            {/* <Link to={"Categories"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Categories
            </span>
            </Link> */}
            <Link to={"About"}>
              <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
                About
              </span>
            </Link>
            <Link to={"contact"}>
              <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
                Contact
              </span>
            </Link>
            <Link to={"login"}>
              <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
                login
              </span>
            </Link>
          </div>

          <div className="flex justify-around  md:ml-[20%] lg:ml-[30%]  cursor-pointer">
            <div className="flex justify-between w-[100px] ">
              <div>
                <i className="fa-regular fa-user text-[#E93740]"></i>
                <Link to={"sngup"}>
                  <span className="text-[#E93740]">Sign in</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#E93740]   cursor-pointer flex justify-between p-[5%]  w-[120px]  rounded-2xl text-white ">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <span className="bg-[#E93740] cursor-pointer p-[5%] rounded-2xl text-white">
                  <button onClick={handleButtonClick}>
                    <i className="fa-duotone fa-plus"></i> Post Listing
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:hidden ml-[10%]">
          <img
            onClick={() => setnav(!nav)}
            src={Bars}
            className="w-[30%] sm:w-[10%] ml-[70%]   cursor-pointer"
            alt="This is logo"
          />
        </div>
      </div>

      <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {nav ? (
        <div className=" text-center md:hidden h-screen ">
          <Link to={"home"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Home
            </span>
          </Link>
          <br />
          <br />
          <Link to={"Rentals"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Rentals
            </span>
            </Link>
          {/* <br />
          <br /> */}
          {/* <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Categories
          </span> */}
          <br />
          <br />
       
          <Link to={"About"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              About
            </span>
          </Link>
          <br />
          <br />
          <Link to={"contact"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Contact
            </span>
          </Link>
          <br />
          <br />
          <Link to={"login"}>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              login
            </span>
          </Link>
          <br /> <br />
          <div>
            <Link to={"sngup"}>
              <i className="fa-regular fa-user text-[#E93740]"></i>{" "}
              <span className="text-[#E93740]">Sign in</span>
            </Link>
            <br /> <br /> <br />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <span className="bg-[#E93740] cursor-pointer p-[5%] rounded-2xl text-white">
              <button onClick={handleButtonClick}>
                <i className="fa-duotone fa-plus"></i> Post Listing
              </button>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};
