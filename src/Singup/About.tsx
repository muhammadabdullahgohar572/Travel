import React from "react";
import { Footer } from "../components/Lesson no1/Footer";

export const About: React.FC = () => {
  return (
    <>
    <div className="bg-gray-100 p-8 mt-[50%] sm:mt-0">
      <h2 className="text-2xl font-bold">About Us!</h2>
      <h3 className="text-lg text-center">Welcome To <span id="W_Name1" className="text-blue-500">Travel Blog</span></h3>
      <p>
        <span id="W_Name2" className="text-blue-500">Travel Blog</span> is a Professional 
        <span id="W_Type1" className="text-gray-700">
          An e-commerce website is an online platform that enables businesses to sell products or services over the internet. It allows customers to browse, select, and purchase items from a virtual storefront, typically using a web browser or a mobile app. E-commerce websites can range from small independent stores to large-scale marketplaces with thousands of sellers and millions of product
        </span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of 
        <span id="W_Type2" className="text-gray-700">
          An e-commerce website is an online platform that enables businesses to sell products or services over the internet. It allows customers to browse, select, and purchase items from a virtual storefront, typically using a web browser or a mobile app. E-commerce websites can range from small independent stores to large-scale marketplaces with thousands of sellers and millions of product
        </span>, with a focus on dependability and 
        <span id="W_Spec" className="text-gray-700">...</span>
      </p>
      <p>
        We're working to turn our passion for 
        <span id="W_Type3" className="text-gray-700">
          An e-commerce website is an online platform that enables businesses to sell products or services over the internet. It allows customers to browse, select, and purchase items from a virtual storefront, typically using a web browser or a mobile app. E-commerce websites can range from small independent stores to large-scale marketplaces with thousands of sellers and millions of product
        </span> into a booming 
        <span className="text-blue-500 hover:underline">online website</span>. We hope you enjoy our 
        <span id="W_Type4" className="text-gray-700">...</span> as much as we enjoy offering them to you.
      </p>
      <p className="font-bold text-center">
        Thanks For Visiting Our Site<br/><br/>
        <span className="text-blue-600 text-lg">Have a nice day!</span>
      </p>
    </div>
     <div className="mt-[25%] sm:mt-[5%]">
        <Footer />
      </div>


      {/* https://416958.mobirisesite.com/ */}
      {/* https://a.mobirise.com/ */}
    </>
  );
};


