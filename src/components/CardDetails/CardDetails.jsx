import React from "react";

const CardDetails = ({ chef }) => {
  const {
    id,
    likes,
    name,
    number_of_recepies,
    picture,
    recipe_details,
    years_of_experience,
  } = chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-11/12 h-48 rounded" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
              <p>Years Of Experiences: {years_of_experience}</p>
           
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
