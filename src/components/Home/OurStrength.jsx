import React from 'react';

const OurStrength = () => {
    return (
        <div>
    {/* our  Strength */}
        <h3 className="text-5xl font-bold text-center mt-14 mb-14">
          Our Strength
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 ">
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
    );
};

export default OurStrength;