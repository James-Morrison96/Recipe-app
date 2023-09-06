import { useState, useEffect } from "react";
import "./App.css";
import RecipesService from "./services/RecipesService";
import Recipe from "./components/Recipe";
import styled from "styled-components"

const InputSearchBar = styled.input`
  height: 60px;
  width: 330px;
  margin: 40px;
  font-size: larger;
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


  useEffect(() => {

    if(search && search.length > 2){
      setFilteredRecipes(recipes.filter((recipe) => recipe.title.toLowerCase().includes(search)))
    } else {
      setFilteredRecipes(recipes)
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



      <InputSearchBar type="text" placeholder="Search for tasty recipes!" onChange={(e) => setSearch(e.target.value.toLowerCase())} />

      {filteredRecipes.map((recipe) => (
        <div key={recipe._id}>
          <Recipe recipe={recipe} toggleFavouriteAction={toggle}/>
        </div>
      ))}
    </>
  );
}

export default App;
