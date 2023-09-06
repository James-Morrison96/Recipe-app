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
  background-color: beige;
  font-family: cursive;
  font-size: large;
  font-weight: 500;
`

const FavouriteButton = styled.button`
  height: 60px;
  width: 60px;
  border-bottom: 10px;
  padding: 2px;
  background-color: azure;
`
const StrongDescription = styled.strong`
  color: white;
`

const StrongInstruction = styled.strong`
  color: white;
`
const StrongIngredient = styled.strong`
  color: white;
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
            <StrongDescription>Description</StrongDescription>: {recipe.description}
          </div>
          <div>
            <StrongInstruction>Instructions</StrongInstruction>: {recipe.instructions}
          </div>
          <div>
            <StrongIngredient>Ingredients</StrongIngredient>:
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient.name} amount:{ingredient.quantity}</li>
              ))}
            </ul>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Recipe;
