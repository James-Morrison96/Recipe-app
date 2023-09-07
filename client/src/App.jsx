import { useState, useEffect } from "react";
import "./App.css";
import RecipesService from "./services/RecipesService";
import Recipe from "./components/Recipe";
import RecipeForm from "./components/RecipeForm";
import styled from "styled-components";

const InputSearchBar = styled.input`
  height: 60px;
  width: 330px;
  margin: 40px;
  font-size: larger;
`

const TitleHeader = styled.h1`
  font-family: cursive;
  font-weight: 500;
  font-style: italic;
  color: red;
`

const SmallTitleHeader = styled.h2`
  font-family: cursive;
  font-weight: 500;
  font-style: italic;
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
    // "beef (200 g), carrots (1kg), apples (1kg)"
    // .split(", ")
    const ingredientsStringArray = ingredientsString.split(",");
    // ["beef (200 g)", "carrots (1kg)"]
    // "beef (200 g)" -> "beef"  "200 g)"
    const ingredientsObjetcts = ingredientsStringArray.map(stringIngr => {
      stringIngr = stringIngr.trim();
      const ingredientName = stringIngr.split("(")[0].trim(); //"beef"
      const ingredientQuantity = stringIngr.split("(")[1].trim().slice(0, -1); // "200 g)" -> "200 g"
      const ingredientObject = {"name":ingredientName, "quantity": ingredientQuantity};
      return ingredientObject;
    });

    // [{"name":"beef", "quantity": "200 g"},{"name":"carrots", "quantity": "1kg"}]
    return ingredientsObjetcts;



  }
  const createRecipe = newRecipe => {
    // clean up the data:
    // make instructions a list of string
    newRecipe.instructions = newRecipe.instructions.split(", ")
    // make ingredients a list of objects
    newRecipe.ingredients=  objectifyIngredients(newRecipe.ingredients);


    RecipesService.addRecipe(newRecipe)
      .then(savedRecipe => setRecipes([ ...recipes, savedRecipe ]));
  };


  useEffect(() => {

    if(search && search.length > 2){
      setFilteredRecipes(recipes.filter((recipe) => recipe.title.toLowerCase().includes(search)))
    } else {
      setFilteredRecipes(recipes)
    }
  }, [search]);


  useEffect(() => {
    if (search && search.length > 2) {
        setFilteredRecipes(recipes.filter((recipe) => {
            return recipe.ingredients.some((ingredient) => 
                ingredient.name.toLowerCase().includes(search.toLowerCase())
            );
        }));
    } else {
        setFilteredRecipes(recipes);
    }
}, [search]);

  // const createBooking = newBooking => {
  //   Recipeservice.addBooking(newBooking)
  //     .then(savedBooking => setRecipes([ ...recipes, savedBooking ]));
  // };

  // const updateBooking = updatedBooking => {
  //   // req to server to update booking in DB
  //   Recipeservice.updateBooking(updatedBooking);

  //   // update locally
  //   const updatedBookingIndex = recipes.findIndex(booking => booking._id === updatedBooking._id);
  //   const updatedRecipes = [...recipes];
  //   updatedRecipes[updatedBookingIndex] = updatedBooking;
  //   setRecipes(updatedRecipes);
  // };

  // const deleteBooking = idToDelete => {
  //   // req to server to delete booking from DB
  //   Recipeservice.deleteBooking(idToDelete);

  //   // delete locally
  //   setRecipes(recipes.filter(booking => booking._id !== idToDelete));
  // }

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


      <div >
      {filteredRecipes.map((recipe) => (
        <div key={recipe._id}>
          <Recipe recipe={recipe} toggleFavouriteAction={toggle}/>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
