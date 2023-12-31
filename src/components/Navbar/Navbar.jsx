import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-neutral  text-white">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/4 flex justify-start ms-12">
          <NavLink to="/" className="text-2xl font-bold mr-3 hover:text-red-700">
            Tasty Trails
          </NavLink>
        </div>
        <div className="text-2xl w-1/4 flex justify-end">
          <NavLink to="/" className="mr-3 hover:text-red-700">
            Home
          </NavLink>
          <NavLink to="/blogs" className="mr-2 hover:text-red-700">
            Blog
          </NavLink>
        </div>

        <div className="text-2xl flex-1 flex justify-end mr-12  items-center ">
          {user && (
            <>
              <span className="mr-4 ">
                <img
                  style={{ height: 64 }}
                  className="rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </span>
              <span className="mr-5">{user.displayName}</span>
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
