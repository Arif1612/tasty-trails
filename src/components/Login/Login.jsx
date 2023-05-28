import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, google } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErrorMessage("The password must be at least 6 characters long.");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // Navigate to "/" after successful login
        navigate("/");
        toast("Congratulation Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message); // Display Firebase authentication error message
      });
  };

  // google sign in

  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
        toast("Congratulation Login Successfully");
      })

      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex flex-col  justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-6/12 bg-purple-300 shadow-md rounded px-8 py-6 mt-28"
      >
        <div className="mb-4">
          <h2 className="text-green-700 text-4xl font-bold text-center">
            Login
          </h2>
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

        {errorMessage && (
          <p className="text-red-700 text-xl font-bold mb-2">{errorMessage}</p>
        )}

        <p className="block text-red-700 text-sm font-bold mb-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 text-xl">
            Register
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
      <div className="w-6/12">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-primary w-full mt-3 "
        >
          Google SignIn
        </button>
        <button className="btn btn-secondary w-full mt-3">Github SignIn</button>
      </div>
    </div>
  );
};

export default Login;
