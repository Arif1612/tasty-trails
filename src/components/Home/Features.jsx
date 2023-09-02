import React from "react";
import Marquee from "react-fast-marquee";
import chikenBirayni from '../../assets/featured-food/chicken-biryani.jpg'
import butterChecken from '../../assets/featured-food/butterChicken.jpg'
import choleBature from '../../assets/featured-food/cholea-bature.jpg'
import dalMakani from '../../assets/featured-food/dal-makhani.jpg'
import palakPaneer from '../../assets/featured-food/palak-paneer.jpg'
import roganJosh from '../../assets/featured-food/rogan-josh.jpg'

const Features = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-center mt-14 mb-14">
        Featured Food
      </h3>
      <Marquee>
        <div className="card w-96 bg-base-100 shadow-xl mr-10 mr-10">
          <figure className="px-10 pt-10">
            <img
              src={chikenBirayni}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Chicken Birayni</h2>
            <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card w-96 bg-base-100 shadow-xl mr-10">
          <figure className="px-10 pt-10">
            <img
              src={butterChecken}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Butter Chicken</h2>
            <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */} 
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card w-96 bg-base-100 shadow-xl mr-10">
          <figure className="px-10 pt-10">
            <img
              src={dalMakani}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dal Makani</h2>
            <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card w-96 bg-base-100 shadow-xl mr-10">
          <figure className="px-10 pt-10">
            <img
              src={choleBature}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Chole Bature</h2>
            <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="card w-96 bg-base-100 shadow-xl mr-10">
          <figure className="px-10 pt-10">
            <img
              src={palakPaneer}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Palak Paneer</h2>
            <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="card w-96 bg-base-100 shadow-xl mr-10">
          <figure className="px-10 pt-10">
            <img
              src={roganJosh}
              alt="food"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Rogan Jost</h2>
            <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
       
       
        
      </Marquee>
    </div>
  );
};

export default Features;
