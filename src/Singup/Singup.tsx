import React, { useState } from "react";
import { Footer } from "../components/Lesson no1/Footer";

interface Form {
  username: string;
  email: string;
  password: string;
}
export const Sngup: React.FC = () => {
  const [formValues, setFormValues] = useState<Form>({
    username: "",
    email: "",
    password: "",
  });
  const color =
    formValues.email !== "" &&
    formValues.password !== "" &&
    formValues.username !== "";

  const Username = () => {
    if (formValues.email && formValues.password && formValues.username) {
      console.log(formValues);
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-screen mt-[50%] sm:mt-0 flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <button
              onClick={Username}
              type="submit"
              className={`w-full py-2 px-4 rounded-md transition duration-200 ${
                color ? "bg-red-500 text-white" : "bg-gray-500 text-black"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[25%] sm:mt-[5%]">
        <Footer />
      </div>
    </>
  );
};
