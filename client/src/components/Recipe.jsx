import { useState } from "react";
import React from "react";
import RecipesService from "../services/RecipesService";
import styled from "styled-components"
import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"

const Button = styled.button`
  height: 60px;
  width: 270px;
  margin: 2px;
`

const FavouriteButton = styled.button`
  height: 60px;
  width: 60px;
  border-bottom: 10px;
  padding: 2px;
`
const Recipe = ({ recipe, toggleFavouriteAction }) => {
  
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button className="recipeButton" role="button" onClick={() => setShow(!show)}>
        {recipe.title}
      </Button>
      <FavouriteButton role="button" onClick={() => {
        toggleFavouriteAction(recipe);
        }}>
        {recipe.favourite ? <FcLike /> : <FcLikePlaceholder  />}
      </FavouriteButton>
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
