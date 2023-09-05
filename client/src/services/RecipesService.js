const baseURL = 'http://localhost:9000/api/recipes/';

const RecipesService =  {
  getRecipes() {
    return fetch(baseURL)
      .then(res => res.json());
  },
  toggleFavourite(recipe){
    recipe.favourite = !recipe.favourite;
    return fetch(baseURL + recipe._id, {
      method: 'PUT',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  // addRecipe(recipe) {
  //   return fetch(baseURL, {
  //     method: 'POST',
  //     body: JSON.stringify(recipe),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json());
  // },

  updateRecipe(newRecipe) {
    return fetch(baseURL + newRecipe._id, {
      method: 'PUT',
      body: JSON.stringify(newRecipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  // deleteRecipe(id) {
  //   return fetch(baseURL + id, {
  //     method: 'DELETE'
  //   });
  // }
};

export default RecipesService;