import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 bg-blue-200 w-screen mx-auto px-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/4 flex justify-center">
          <NavLink
            exact
            to="/"
            className="text-2xl font-bold mr-3"
            activeClassName="text-red-700"
          >
            Tasty Trails
          </NavLink>
        </div>
        <div className="text-2xl w-2/4 flex justify-center">
          <NavLink
            to="/"
            className="mr-2 hover:text-red-700"
            activeClassName="text-red-700 font-bold "
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className="mr-2 hover:text-red-700"
            activeClassName="text-red-700 font-bold"
          >
            Blog
          </NavLink>
        </div>

        <div className="text-2xl w-1/4 flex justify-center items-center mr-5">
          {user && (
            <>
              <span className="mr-2 hover:{user.displayName}">
                <img style={{height:64}}
                  className="rounded-full "
                  src={user.photoURL}
                  alt=""
                />
                
              </span>
            </>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-active btn-secondary"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-active btn-secondary">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
