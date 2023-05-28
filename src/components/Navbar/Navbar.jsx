import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

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
          <Link className="text-2xl font-bold mr-3">Tasty Trails</Link>
        </div>
        <div className="text-2xl w-2/4 flex justify-center">
          <Link className="mr-2">Home</Link>
          <Link>Blog</Link>
        </div>

        <div className="text-2xl w-1/4 flex justify-center items-center">
          {user && (
            <>
              <FaUserCircle
                style={{ fontSize: "2rem", marginRight: "0.5rem" }}
              />
              <span className=" mr-2" >{user.email}</span>
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
            <Link to="/login">
              <button className="btn btn-active btn-secondary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
