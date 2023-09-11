import { useState } from 'react';
import styled from "styled-components"

const InputRecipeSections = styled.input`
    width: 240px;
    background-color: beige;
    border-radius: 10px;
    
  
  `

  const AddRecipeH2 = styled.h2`
    color: white;
    
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

  `


  const AddRecipeLabel = styled.label`
    color: white;
    font-size: larger;
    
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

  `

  const TextAreaAddRecipe = styled.textarea`
    background-color: beige;
    width: 240px;
    height: 120px;
    border-radius: 10px;
  `

const RecipeForm = ({addRecipe}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");


  const handleTitleChange = (ev) => setTitle(ev.target.value);
  const handleDescriptionChange = (ev) => setDescription(ev.target.value);
  const handleIngredientsChange = (ev) => setIngredients(ev.target.value);
  const handleInstructionsChange = (ev) => setInstructions(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();
    addRecipe({
      title: title,
      description: description,
      ingredients: ingredients,
      instructions: instructions
    });
    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("")
  }



  return (
    <form onSubmit={handleSubmit}>
      <AddRecipeH2>Add a recipe</AddRecipeH2>
      <div className="group">
        <AddRecipeLabel htmlFor="title">Recipe title:</AddRecipeLabel>
        <InputRecipeSections 
          type="text" 
          id="title" 
          name="title"
          placeholder="What's this tasty thing called?"
          value={title} 
          required 
          onChange={handleTitleChange}
        />
      </div>
      <div className="group">
        <AddRecipeLabel htmlFor="description">Description:</AddRecipeLabel>
        <InputRecipeSections 
          type="text" 
          id="description" 
          name="description"
          placeholder="What's in it? Where's it from?" 
          value={description} 
          required 
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="group">
        <AddRecipeLabel htmlFor="ingredients">Ingredients:</AddRecipeLabel>
        <TextAreaAddRecipe 
          type="text" 
          id="ingredients" 
          name="ingredients" 
          placeholder='eg chicken (400g), sweetcorn (1 tin), etc (etc)'
          value={ingredients} 
          onChange={handleIngredientsChange}
        />
      </div>

      <div className="group">
        <AddRecipeLabel htmlFor="instructions">Instructions:</AddRecipeLabel>
        <TextAreaAddRecipe 
          type="text" 
          id="instructions" 
          name="instructions"
          placeholder="Tell me what to do!" 
          value={instructions} 
          onChange={handleInstructionsChange}
        />
      </div>
      <input type="submit" name="submit" value="Save" />
    </form>
  )
};

export default RecipeForm;