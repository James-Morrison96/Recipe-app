import { useState } from "react";
import React from "react";
import RecipesService from "../services/RecipesService";

const Recipe = ({ recipe, toggleFavouriteAction }) => {
  
  const [show, setShow] = useState(false);

  return (
    <div>
      <button role="button" onClick={() => setShow(!show)}>
        {recipe.title}
      </button>
      <button role="button" onClick={() => {
        toggleFavouriteAction(recipe);
        }}>
        {recipe.favourite ? "x" : "O"}
      </button>
      {show && (
        <div>
          <div>
            <strong>Description</strong>: {recipe.description}
          </div>
          <div>
            <strong>Instructions</strong>: {recipe.instructions}
          </div>
          <div>
            <strong>Ingredients</strong>:
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Recipe;
