import { useState } from "react";
import React from "react";

const Recipe = ({ recipe }) => {
  
  const [show, setShow] = useState(false);

  return (
    <div>
      <button role="button" onClick={() => setShow(!show)}>
        {recipe.title}
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
