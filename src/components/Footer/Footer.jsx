import React from "react";
import { BsFacebook,BsGithub,BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bottom-0 w-full h-20 ">
      <footer className="flex flex-col items-center justify-center md:justify-between  px-16 py-5 mt-auto bg-neutral text-white text-2xl font-bold">
      <div className="text-4xl flex  justify-center items-center mb-2 ">
                    <p className="mr-5 hover:text-blue-500"><Link to="https://www.linkedin.com/in/mdarifulislam45/"> <BsLinkedin></BsLinkedin> </Link></p>
                    <p className="mr-5 hover:text-blue-500"><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsFacebook></BsFacebook></Link></p>
                    <p className="hover:text-blue-500" ><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsGithub ></BsGithub> </Link></p>
        </div>
        <div className="flex justify-center  items-center">

          <p> &copy; Md. Arif Ul Islam  2023 </p>
        </div>
     
      
      
      </footer>
    </div>
  );
};

export default Footer;
