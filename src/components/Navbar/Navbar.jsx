import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-blue-200 w-screen  mx-auto px-4 ">
      <div className="flex-1 ">
        <Link className="text-2xl font-bold mr-3">Tasty Trails</Link>
        <div className="text-2xl">
          <Link className="mr-2">Home</Link>
          <Link>Blog</Link>
        </div>
      </div>
      <div className="text-2xl">
        <Link>Login </Link>
      </div>
    </div>
  );
};

export default Navbar;
