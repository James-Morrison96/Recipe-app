import { useState } from 'react';

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
      <h2>Add a recipe</h2>
      <div className="group">
        <label htmlFor="title">Recipe title:</label>
        <input 
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
        <label htmlFor="description">Description:</label>
        <input 
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
        <label htmlFor="ingredients">Ingredients:</label>
        <input 
          type="text" 
          id="ingredients" 
          name="ingredients" 
          placeholder='eg chicken (400g)'
          value={ingredients} 
          onChange={handleIngredientsChange}
        />
      </div>

      <div className="group">
        <label htmlFor="instructions">Instructions:</label>
        <input 
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