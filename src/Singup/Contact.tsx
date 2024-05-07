import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Footer } from "../components/Lesson no1/Footer";

interface User {
  name: string;
  username: string;
  email: string;
  address: {
    suite: string;
    zipcode: string;
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export const Contact: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SkeletonTheme 
      // baseColor="#202451" highlightColor="#448"
      >
        {data.length === 0 && <Skeleton count={200} />}
      </SkeletonTheme>

      {data.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Contact Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and contact information.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {data.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.name}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Username
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.username}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.email}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.address.street}, {contact.address.suite},{" "}
                      {contact.address.city}, {contact.address.zipcode}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.phone}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.website}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Company
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {contact.company.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}

      <div className="mt-[25%] sm:mt-[5%]">
        <Footer />
      </div>
    </>
  );
};
