import Recipe from "./Recipe";

const RecipeDelete = ({recipes, deleteRecipe}) => {
  const recipeNodes = recipes.map(recipe => {
    return <Recipe 
      key={recipe._id} 
      recipe={recipe}
      deleteRecipe={deleteRecipe}
    />
  });

  return (
    <section id="recipes">
      <h2>Recipes List</h2>
      <div id="recipes-wrapper">
        {recipeNodes}
      </div>
    </section>
  )
};

export default RecipeDelete;