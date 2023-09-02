import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import Container from "../../Container";
import FoodItem from "./FoodItem";
import Carousel from "./Carousel";
import OurStrength from "./OurStrength";

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
         <OurStrength></OurStrength>

       
      </Container>
    </div>
    //  last end div
  );
};

export default Home;
