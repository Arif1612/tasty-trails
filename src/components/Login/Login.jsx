import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center ">
      <form className="w-6/12 bg-gray-400 shadow-md rounded px-8 py-6 mt-28 ">
        <div className="mb-4">
          <h2 className="text-green-700 text-4xl font-bold text-center">Login</h2>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <p className=" block text-red-700 text-sm font-bold mb-2">
          Don't have an account?{" "}
          <Link className="text-green-700" to="/register">
            {" "}
            Register{" "}
          </Link>
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
