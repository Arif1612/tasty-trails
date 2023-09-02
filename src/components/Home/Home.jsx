import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import Marquee from "react-fast-marquee";
import Container from "../../Container";
import FoodItem from "./FoodItem";
import Carousel from "./Carousel";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://tasty-trails-server-arif1612.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Carousel></Carousel>
      <Container>
        <div className=" mb-14 ">
          <h2 className="text-5xl font-bold text-center ">Our Top Chefs</h2>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {chefs.map((chef) => (
            <CardDetails key={chef.id} chef={chef}></CardDetails>
          ))}
        </div>
        {/* card end */}

        <FoodItem></FoodItem>

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
      </Container>
    </div>
    //  last end div
  );
};

export default Home;
