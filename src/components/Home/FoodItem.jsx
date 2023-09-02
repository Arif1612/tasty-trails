import React from "react";
import foodItem from "../../assets/featured-food/food-menu.jpg";

const FoodItem = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-center mt-14 mb-14">
        Food Item
      </h3>
       {/* main */}
      <div className="grid grid-cols-1  md:grid-cols-2"> 
        {/* left */}
        <div className="mr-10  items-center my-auto  ">
          <img className=" rounded-xl " src={foodItem} alt="" />
        </div>

        {/* right */}

        <div>
          {/* food  item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
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
            <div className="text-start ">
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
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
