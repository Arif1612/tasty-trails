import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../Container";

const ChefRecipes = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isButtonDisabledTwo, setButtonDisabledTwo] = useState(false);
  const [isButtonDisabledThree, setButtonDisabledThree] = useState(false);

  const handleButtonClick = () => {
    setButtonDisabled(true);
    toast("Good Choice");
  };

  const handleButtonClickTwo = () => {
    setButtonDisabledTwo(true);
    toast("Good Choice");
  };

  const handleButtonClickThree = () => {
    setButtonDisabledThree(true);
    toast("Good Choice");
  };
  const chef = useLoaderData();
  const {
    id,
    likes,
    name,
    numbers_of_recipes,
    picture,
    recipe_details,
    years_of_experience,
  } = chef;
  console.log(name, picture, years_of_experience);
  return (
    <div>
      <div className="card grid grid-cols-1 md:grid-cols-2 w-full   ">
        <div className="w-full ">
        <figure>
          <img className="w-full mr-16 " style={{ height: 500 }} src={picture} alt="Album" />
        </figure>
        </div>
        
        <div className=" w-full">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-xl my-3 ">{recipe_details}</p>
          <p className="text-xl my-3">Likes: {likes}</p>
          <p className="text-xl my-3">
            Numbers of Recipes: {numbers_of_recipes}
          </p>
          <p className="text-xl my-3">
            Years of Experience: {years_of_experience}
          </p>
        </div>
      </div>

      {/* another section */}
      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10 mb-10">
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-lg ">
            <img
              className="w-full h-48 object-cover rounded-t-lg "
              src="data:image/jpeg;base64,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"
              alt="Card Image"
            />

            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Butter Chiken</h3>
              <p className="text-xl font-bold">Ingredians</p>
              <ul className="list-disc list-inside">
                <li className="mb-2">Chicken</li>
                <li className="mb-2">Butter</li>
                <li className="mb-2">Tomatoes</li>
                <li className="mb-2">Onion</li>
                <li className="mb-2">Ginger-garlic paste</li>
              </ul>
              <p className="text-xl font-bold">Cooking Method:</p>
              <p>
                To prepare butter chicken, marinate chicken in a yogurt-spice
                mixture. Sauté onions in butter, add tomato puree and spices,
                then cook until the sauce thickens. Brown the marinated chicken,
                add water, and simmer until cooked. Finish with cream, butter,
                and kasuri methi. Serve with naan or rice. Enjoy the rich and
                flavorful dish!
              </p>
              <p className="text-xl font-bold mt-3">Rating: 4.7</p>
              <button
                className="btn btn-secondary mt-3"
                disabled={isButtonDisabledTwo}
                onClick={handleButtonClickTwo}
              >
                Favourite
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full ">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
              alt="Card Image"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">
                Biryani (Chicken, Lamb, or Vegetable){" "}
              </h3>
              <p className="text-xl font-bold">Ingredians</p>

              <ul className="list-disc list-inside">
                <li className="mb-2">Basmati rice</li>
                <li className="mb-2">Chicken</li>
                <li className="mb-2">Onions</li>
                <li className="mb-2">Yogurt</li>
                <li className="mb-2">
                  Spices (such as cumin, coriander, turmeric, etc.)
                </li>
              </ul>
              <p className="text-xl font-bold">Cooking Method:</p>
              <p>
                To prepare biryani, cook basmati rice separately. In a pan,
                sauté onions, spices, and marinated meat. Layer rice and meat in
                a pot, garnish with fried onions and herbs. Seal the pot and
                cook on low heat until flavors meld. Serve hot with raita or
                curry. Enjoy the aromatic and flavorful biryani!
              </p>
              <p className="text-xl font-bold mt-3">Rating: 4.9</p>
              <button
                className="btn btn-secondary mt-3"
                disabled={isButtonDisabled}
                onClick={handleButtonClick}
              >
                Favourite
              </button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-full ">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src="data:image/jpeg;base64,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"
              alt="Card Image"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Chola Bature</h3>
              <p className="text-xl font-bold">Ingredians</p>
              <ul className="list-disc list-inside">
                <li className="mb-2">Chickpeas (chole)</li>
                <li className="mb-2">All-purpose flour (maida)</li>
                <li className="mb-2">Yogurt</li>
                <li className="mb-2">
                  Spices (such as cumin, coriander, turmeric, etc.)
                </li>
                <li className="mb-2">Baking powder</li>
              </ul>

              <p className="text-xl font-bold">Cooking Method:</p>
              <p>
                To prepare Chole Bhature, soak chickpeas overnight, then cook
                with spices. For Bhature, mix flour, yogurt, and spices, knead
                into a soft dough, and let it rest. Roll dough into discs and
                deep-fry until golden. Serve hot with spicy chickpeas, pickle,
                and yogurt. Enjoy the flavorful Chole Bhature!
              </p>
              <p className="text-xl font-bold mt-3">Rating: 4.7</p>
              <button
                className="btn btn-secondary mt-3"
                disabled={isButtonDisabledThree}
                onClick={handleButtonClickThree}
              >
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default ChefRecipes;
