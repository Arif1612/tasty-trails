import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
     
      {/* carousel */}

      <div style={{ height: "600px" }} className="carousel w-screen">
        <div id="item1" className="carousel-item  w-screen ">
          <img
            src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/334985/pexels-photo-334985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full ,"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-10 gap-5">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      {/* carousel end */}
      <div className=" mb-14 ">
        <h2 className="text-5xl font-bold text-center ">Our Top Chefs</h2>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 ">
        {chefs.map((chef) => (
          <CardDetails key={chef.id} chef={chef}></CardDetails>
        ))}
      </div>
      {/* card end */}

      {/* food menu */}

      <h3 className="text-5xl font-bold text-center mt-14 mb-14">
        Our Food Item
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-24 md:ml-40 lg:ml-80  ml-24 mb-16">
        {/* 1 */}
        <div className="text-start">
          <h4 className="text-2xl font-bold">Appetizers:</h4>
          <ul className="list-decimal list-inside">
            <li>Samosas - $3.99</li>
            <li>Pakoras - $4.99</li>
            <li>Papdi Chaat - $6.99</li>
            <li>andoori Chicken Tikka - $9.99</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="text-start">
          <h4 className="text-2xl font-bold">Main Courses:</h4>
          <ul className="list-decimal list-inside">
            <li>Butter Chicken - $12.99</li>
            <li>Biryani (Chicken, Lamb, or Vegetable) - $14.99</li>
            <li>Rogan Josh - $13.99</li>
            <li>Palak Paneer - $10.99</li>
            <li>Chole Bhature - $9.99</li>
            <li>Dal Makhani - $11.99</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="text-start">
          <h4 className="text-2xl font-bold">Breads:</h4>
          <ul className="list-decimal list-inside">
            <li>Naan - $2.99</li>
            <li>Roti/Chapati - $1.99</li>
            <li>Paratha - $3.99</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="text-start">
          <h4 className="text-2xl font-bold">Desserts:</h4>
          <ul className="list-decimal list-inside">
            <li>Gulab Jamun - $4.99</li>
            <li>Rasgulla - $4.99</li>
            <li>Kheer - $5.99</li>
            <li>Jalebi - $3.99</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="text-start">
          <h4 className="text-2xl font-bold">Beverages::</h4>
          <ul className="list-decimal list-inside">
            <li>Masala Chai - $2.99</li>
            <li>Mango Lassi - $3.99</li>
            <li>Thandai - $4.99</li>
          </ul>
        </div>
      </div>

      {/* our strength */}
      <h3 className="text-5xl font-bold text-center mt-14 mb-14">
        Our Strength
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-24 md:ml-40 lg:ml-80  ml-24 mb-16">
        {/* 1 */}
        <div className="text-start font-bold">
          <ul className="list-decimal list-inside">
            <li>Quality of Food</li>
            <li>Food Safety</li>
            <li>Quality Ingredients</li>
            <li>Menu Transparency</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="text-start font-bold">
          <ul className="list-decimal list-inside">
            <li>Customer Service </li>
            <li>Timely Service </li>
            <li>Reservation and Waiting List Management</li>
            <li>Pricing and Billing Transparenc</li>
          </ul>
        </div>
      </div>
    </div>
    //  last end div
  );
};

export default Home;
