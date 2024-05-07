import React, { useState } from "react";
import { Footer } from "../components/Lesson no1/Footer";
import { useNavigate } from "react-router-dom";

interface login {
  name: string;
  password: string;
}
export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<login>({
    name: "",
    password: "",
  });

  const isFormValid = username.name !== "" && username.password !== "";

  const Nav = () => {
    if (isFormValid) {
      navigate("/contact");
    } else {
      console.log("Form is not valid");
    }
  };
  return (
    <>
    
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) =>
                    setUsername({ ...username, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setUsername({ ...username, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={Nav}
                type="submit"
                className={`group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isFormValid
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-gray-400 text-gray-700"
                }`}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-[25%] sm:mt-[5%]">
        <Footer />
      </div>
    </>
  );
};
