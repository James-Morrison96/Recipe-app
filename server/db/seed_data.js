use recipes;
db.dropDatabase();


db.recipes.insertMany([

{
    "title": "Bolognese Sauce",
    "description": "A classic Italian meat sauce for pasta.",
    "ingredients": [
        {
            "name": "Ground beef",
            "quantity": "1 pound"
        },
        {
            "name": "Onion",
            "quantity": "1, finely chopped"
        },
        {
            "name": "Carrot",
            "quantity": "1, finely chopped"
        },
        {
            "name": "Celery",
            "quantity": "1 stalk, finely chopped"
        },
        {
            "name": "Garlic",
            "quantity": "2 cloves, minced"
        },
        {
            "name": "Canned tomatoes",
            "quantity": "28 ounces, crushed"
        },
        {
            "name": "Red wine",
            "quantity": "1/2 cup"
        },
        {
            "name": "Milk",
            "quantity": "1/2 cup"
        },
        {
            "name": "Salt",
            "quantity": "To taste"
        },
        {
            "name": "Black pepper",
            "quantity": "To taste"
        },
        {
            "name": "Olive oil",
            "quantity": "2 tablespoons"
        },
        {
            "name": "Spaghetti",
            "quantity": "12 ounces, cooked"
        }
    ],
    "instructions": [
        "Heat olive oil in a large skillet over medium heat.",
        "Add onions, carrots, celery, and garlic. Sauté until softened.",
        "Add ground beef and cook until browned. Drain excess fat.",
        "Stir in crushed tomatoes and red wine. Simmer for 10 minutes.",
        "Add milk and simmer for an additional 10 minutes.",
        "Season with salt and black pepper to taste.",
        "Serve over cooked spaghetti."
    ]
 },
{
 "title": "Spaghetti Carbonara",
 "description": "A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
 "ingredients": [
     {
         "name": "Spaghetti",
         "quantity": "12 ounces"
     },
     {
         "name": "Pancetta",
         "quantity": "4 ounces, diced"
     },
     {
         "name": "Eggs",
         "quantity": "3 large"
     },
     {
         "name": "Pecorino Romano cheese",
         "quantity": "1 cup, grated"
     },
     {
         "name": "Black pepper",
         "quantity": "To taste"
     },
     {
         "name": "Salt",
         "quantity": "To taste"
     }
 ],
 "instructions": [
     "Cook the spaghetti in salted boiling water until al dente. Drain and set aside.",
     "In a skillet, cook the diced pancetta until crispy. Remove from heat and drain on paper towels.",
     "In a bowl, whisk together the eggs and grated Pecorino Romano cheese.",
     "Toss the cooked spaghetti with the egg and cheese mixture, adding some black pepper and a pinch of salt.",
     "Stir in the crispy pancetta.",
     "Serve immediately, garnished with additional grated Pecorino Romano cheese and black pepper."
 ]
},

{
"title": "Classic Hamburger",
"description": "A simple and delicious homemade hamburger.",
"ingredients": [
    {
        "name": "Ground beef",
        "quantity": "1 pound"
    },
    {
        "name": "Hamburger buns",
        "quantity": "4"
    },
    {
        "name": "Salt",
        "quantity": "1 teaspoon"
    },
    {
        "name": "Black pepper",
        "quantity": "1/2 teaspoon"
    },
    {
        "name": "Cheese slices",
        "quantity": "4 (optional)"
    },
    {
        "name": "Lettuce leaves",
        "quantity": "4"
    },
    {
        "name": "Tomato slices",
        "quantity": "4"
    },
    {
        "name": "Onion slices",
        "quantity": "4"
    },
    {
        "name": "Ketchup",
        "quantity": "4 tablespoons"
    },
    {
        "name": "Mustard",
        "quantity": "4 tablespoons"
    }
],
"instructions": [
    "Preheat your grill or stovetop pan over medium-high heat.",
    "Divide the ground beef into four equal portions and form them into patties. Season each patty with salt and black pepper.",
    "Place the patties on the grill or in the pan and cook to your desired level of doneness, typically 4-5 minutes per side for medium-rare.",
    "In the last minute of cooking, add a cheese slice to each patty if you like melted cheese on your burger.",
    "Toast the hamburger buns on the grill or in a toaster until they are lightly browned.",
    "Assemble your burgers by placing a lettuce leaf on the bottom bun, followed by a cooked patty with cheese (if desired), tomato slice, onion slice, ketchup, and mustard.",
    "Top with the other half of the bun and serve immediately."
]},

{   "title": "Haggis, Neeps, and Tatties",
    "description": "A traditional Scottish dish with haggis, mashed turnips, and mashed potatoes.",
    "ingredients": [
       {
           "name": "Haggis",
           "quantity": "1 pound"
       },
       {
           "name": "Turnips (neeps)",
           "quantity": "1 pound, peeled and diced"
       },
       {
           "name": "Potatoes (tatties)",
           "quantity": "1 pound, peeled and diced"
       },
       {
           "name": "Butter",
           "quantity": "4 tablespoons"
       },
       {
           "name": "Salt",
           "quantity": "To taste"
       },
       {
           "name": "Black pepper",
           "quantity": "To taste"
       }
   ],
   "instructions": [
       "Place the diced turnips and potatoes in separate pots of boiling salted water.",
       "Cook until both are tender, about 20 minutes. Drain.",
       "Mash the turnips with 2 tablespoons of butter, and season with salt and black pepper.",
       "Mash the potatoes with the remaining 2 tablespoons of butter, and season with salt and black pepper.",
       "Cook the haggis according to package instructions, typically by simmering or baking.",
       "Serve the haggis alongside the mashed turnips (neeps) and mashed potatoes (tatties)."
   ]
},

{
   "title": "Fish Tacos",
   "description": "Delicious and crispy fish tacos with a zesty slaw.",
   "ingredients": [
       {
           "name": "White fish fillets (e.g., cod or tilapia)",
           "quantity": "1 pound"
       },
       {
           "name": "All-purpose flour",
           "quantity": "1/2 cup"
       },
       {
           "name": "Cornmeal",
           "quantity": "1/2 cup"
       },
       {
           "name": "Paprika",
           "quantity": "1 teaspoon"
       },
       {
           "name": "Salt",
           "quantity": "1/2 teaspoon"
       },
       {
           "name": "Black pepper",
           "quantity": "1/4 teaspoon"
       },
       {
           "name": "Egg",
           "quantity": "1 large, beaten"
       },
       {
           "name": "Vegetable oil",
           "quantity": "1/4 cup"
       },
       {
           "name": "Corn tortillas",
           "quantity": "8"
       },
       {
           "name": "Cabbage, thinly sliced",
           "quantity": "2 cups"
       },
       {
           "name": "Carrots, shredded",
           "quantity": "1/2 cup"
       },
       {
           "name": "Cilantro, chopped",
           "quantity": "1/4 cup"
       },
       {
           "name": "Mayonnaise",
           "quantity": "1/2 cup"
       },
       {
           "name": "Lime juice",
           "quantity": "2 tablespoons"
       },
       {
           "name": "Hot sauce",
           "quantity": "To taste"
       }
   ],
   "instructions": [
       "In a shallow dish, combine the all-purpose flour, cornmeal, paprika, salt, and black pepper.",
       "Dip each fish fillet into the beaten egg, then coat it with the flour mixture.",
       "In a large skillet, heat vegetable oil over medium-high heat. Fry the fish fillets until crispy and golden brown, about 2-3 minutes per side. Drain on paper towels.",
       "In a separate bowl, combine the cabbage, shredded carrots, and chopped cilantro. In another bowl, mix mayonnaise, lime juice, and hot sauce to create a dressing.",
       "Warm the corn tortillas in a dry skillet or microwave for a few seconds.",
       "To assemble the tacos, place a fish fillet on each tortilla, top with slaw, and drizzle with the dressing.",
       "Serve immediately and enjoy your fish tacos!"
   ]
},

{
    "title": "Homemade Dumplings",
    "description": "Delicious dumplings filled with your choice of meat or vegetables.",
    "ingredients": [
        {
            "name": "Dumpling wrappers",
            "quantity": "1 package"
        },
        {
            "name": "Ground pork or chicken (or tofu for vegetarian)",
            "quantity": "1/2 pound"
        },
        {
            "name": "Napa cabbage, finely chopped",
            "quantity": "1 cup"
        },
        {
            "name": "Green onions, chopped",
            "quantity": "3"
        },
        {
            "name": "Ginger, minced",
            "quantity": "1 tablespoon"
        },
        {
            "name": "Soy sauce",
            "quantity": "2 tablespoons"
        },
        {
            "name": "Sesame oil",
            "quantity": "1 teaspoon"
        },
        {
            "name": "Salt",
            "quantity": "1/2 teaspoon"
        },
        {
            "name": "Black pepper",
            "quantity": "1/4 teaspoon"
        },
        {
            "name": "Water",
            "quantity": "For sealing dumplings"
        },
        {
            "name": "Vegetable oil",
            "quantity": "For frying (optional)"
        },
    ],
    "instructions": [
        "In a mixing bowl, combine the ground meat (or tofu), Napa cabbage, green onions, minced ginger, soy sauce, sesame oil, salt, and black pepper. Mix well to create the dumpling filling.",
        "Take a dumpling wrapper and place a spoonful of the filling in the center. Moisten the edges with water and fold the wrapper in half, sealing the edges to create a half-moon shape. You can also create pleats for a decorative touch.",
        "Repeat the process with the remaining wrappers and filling.",
        "To cook the dumplings, you can either steam them or pan-fry them. For pan-frying, heat vegetable oil in a skillet over medium heat. Place the dumplings in the skillet and cook until the bottoms are golden brown. Then, add water to the skillet and cover to steam the dumplings until fully cooked, about 5-7 minutes.",
        "Serve the dumplings with your choice of dipping sauce, such as soy sauce or a soy-vinegar dipping sauce."
    ]
 }
]);
