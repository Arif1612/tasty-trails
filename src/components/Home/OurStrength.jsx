import React from "react";
import strength from "../../assets/featured-food/strength.jpg";

const OurStrength = () => {
  return (
    <div className="mb-20">
      {/* our  Strength */}
      <h3 className="text-5xl font-bold text-center mt-14 mb-14">
        Our Strength
      </h3>
      {/* main */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="items-center  my-auto">
          <div className="grid grid-cols-1 gap-8 mb-10   ">
            {/* 1 */}
            <div className="text-start font-bold text-xl">
              <ul className="list-disc list-inside">
                <li>Quality of Food</li>
                <li>Food Safety</li>
                <li>Quality Ingredients</li>
                <li>Menu Transparency</li>
                <li>Customer Service </li>
                <li>Timely Service </li>
                <li>Reservation and Waiting List Management</li>
                <li>Pricing and Billing Transparenc</li>
              </ul>
            </div>
           
          </div>
        </div>
        {/* right */}
        <div>
          <img className=" rounded-xl " src={strength} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
