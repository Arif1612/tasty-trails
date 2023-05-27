import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-blue-200 w-screen mx-auto px-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/4 flex justify-center">
          <Link className="text-2xl font-bold mr-3">Tasty Trails</Link>
        </div>
        <div className="text-2xl w-2/4 flex justify-center">
          <Link className="mr-2">Home</Link>
          <Link>Blog</Link>
        </div>
        <div className="text-2xl w-1/4 flex justify-center">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
