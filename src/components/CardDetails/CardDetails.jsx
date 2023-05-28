import React from "react";
import { Link } from "react-router-dom";

const CardDetails = ({ chef }) => {
  const {
    id,
    likes,
    name,
    numbers_of_recipes,
    picture,
    recipe_details,
    years_of_experience,
  } = chef;
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100">
        <figure>
          <img className="w-11/12 h-48 rounded-lg" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Years Of Experiences: {years_of_experience}</p>
          <p>Number of Recipes: {numbers_of_recipes}</p>
          <p>Likes: {likes}</p>

          <div className="w-full justify-center items-center">
            <Link to={`/chefRecipes/${id}`}>
              <button className="btn btn-primary w-full rounded-lg">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
