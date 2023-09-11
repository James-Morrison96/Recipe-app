import { useState, useEffect } from "react";
import "./App.css";
import RecipesService from "./services/RecipesService";
import Recipe from "./components/Recipe";
import RecipeForm from "./components/RecipeForm";
import styled from "styled-components";
import RecipeList from "./components/RecipeDelete";

const InputSearchBar = styled.input`
  height: 60px;
  width: 330px;
  margin: 40px;
  font-size: larger;
  background-color: beige;
  border-radius: 10px;
  border: 1px solid transparent;
  
`

const TitleHeader = styled.h1`
  font-family: cursive;
  font-weight: 500;
  font-style: italic;
  color: white;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

`

const SmallTitleHeader = styled.h2`
  font-family: cursive;
  font-weight: 500;
  font-style: italic;
  color: white;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

`

function App() {

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [search, setSearch] = useState();
  
 useEffect(() => {
    RecipesService.getRecipes().then((recipes) => {
      setRecipes(recipes);
      setFilteredRecipes(recipes);
    }
    );
  }, []);

  const objectifyIngredients = ingredientsString => {
    const ingredientsStringArray = ingredientsString.split(",");
    const ingredientsObjetcts = ingredientsStringArray.map(stringIngr => {
      stringIngr = stringIngr.trim();
      const ingredientName = stringIngr.split("(")[0].trim(); 
      const ingredientQuantity = stringIngr.split("(")[1].trim().slice(0, -1); 
      const ingredientObject = {"name":ingredientName, "quantity": ingredientQuantity};
      return ingredientObject;
    });

    return ingredientsObjetcts;
  }

  const createRecipe = newRecipe => {
    newRecipe.instructions = newRecipe.instructions.split(", ")
    newRecipe.ingredients=  objectifyIngredients(newRecipe.ingredients);
    RecipesService.addRecipe(newRecipe)
      .then(savedRecipe => {
        setRecipes([ ...recipes, savedRecipe ])
        setFilteredRecipes([ ...recipes, savedRecipe ])
      });
      
  };

//   useEffect(() => {
//     if(search && search.length > 2){
//     setFilteredRecipes(recipes.filter((recipe) => recipe.title.toLowerCase().includes(search)))
//     } else {
//    setFilteredRecipes(recipes)
//     }
//   }, [search]);

//   useEffect(() => {
//     if (search && search.length > 2) {
//         setFilteredRecipes(recipes.filter((recipe) => {
//             return recipe.ingredients.some((ingredient) => 
//                 ingredient.name.toLowerCase().includes(search.toLowerCase())
//             );
//         }));
//     } else {
//         setFilteredRecipes(recipes);
//     }
// }, [search]);

useEffect(() => {
  if (search && search.length > 2) {
      setFilteredRecipes(recipes.filter((recipe) => {
          return (
              recipe.title.toLowerCase().includes(search.toLowerCase()) ||
              recipe.ingredients.some((ingredient) =>
                  ingredient.name.toLowerCase().includes(search.toLowerCase())
              )
          );
      }));
  } else {
      setFilteredRecipes(recipes);
  }
}, [search]);

  const deleteRecipe = idToDelete => {
     RecipesService.deleteRecipe(idToDelete).then((newRecipes)=>     {
      setRecipes(newRecipes)
      setFilteredRecipes(newRecipes)
    });
  };

  const toggle = function(recipe){
      RecipesService.toggleFavourite(recipe).then((newRecipes)=>     setRecipes(newRecipes));
  };

  return (
    <>
    
    <TitleHeader>Everyone's Cook Book!</TitleHeader>
    <SmallTitleHeader>Find, add and adapt! Cook the meals you really want! </SmallTitleHeader>
    <div id="app">
      <RecipeForm addRecipe={createRecipe}/>
    </div>
      <InputSearchBar type="text" placeholder="Search for tasty recipes!" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe._id}>
          <Recipe recipe={recipe} toggleFavouriteAction={toggle} deleteRecipe={deleteRecipe}/>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
