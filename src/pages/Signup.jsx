import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputEmail);
    console.log(inputNumber);
    console.log(inputPass);
    //code for registration user
  };
  return (
    <div className=" bg-gray-100 w-full h-screen flex align-middle justify-center">
      <div className="bg-white border w-80 m-auto p-4 rounded-lg">
        <h3>Sign Up</h3>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <form className="mt-2 space-y-6" onSubmit={handleLogin}>
              <div className=" rounded-md shadow-sm">
                <div className="my-3">
                  <label htmlFor="email" className="text-gray-400 text-xs">
                    Email
                  </label>
                  <input
                    onChange={(e) => setInputEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your email"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Phone" className="text-xs text-gray-400">
                    Phone
                  </label>
                  <input
                    onChange={(e) => setInputNumber(e.target.value)}
                    id="Phone"
                    name="number"
                    type="number"
                    autoComplete="tel"
                    maxLength={14}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-xs text-gray-400">
                    Create Password dd
                  </label>
                  <input
                    onChange={(e) => setInputPass(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-sm">
              Already have account?{" "}
              <Link
                to="/"
                className="font-bold text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
