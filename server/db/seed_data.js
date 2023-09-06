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

{
    "title"; "Steak Frites",
    "description"; "A classic French dish featuring tender steak and crispy French fries.",
    "ingredients"; [
    {
    "name": "Sirloin steak",
    "quantity": "2 steaks, about 8 ounces each"
    },
    {
    "name": "Potatoes",
    "quantity": "4 large russet potatoes"
    },
    {
    "name": "Vegetable oil",
    "quantity": "For frying"
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
    "name": "Garlic powder",
    "quantity": "1 teaspoon"
    },
    {
    "name": "Paprika",
    "quantity": "1 teaspoon"
    },
    {
    "name": "Butter",
    "quantity": "2 tablespoons"
    },
    {
    "name": "Fresh parsley",
    "quantity": "2 tablespoons, chopped (for garnish)"
    }
    ],
    "instructions"; [
    "Preheat your oven to 200°F (93°C) to keep the steak warm while making the fries.",
    "Peel the potatoes and cut them into thin strips to make French fries. Rinse them in cold water to remove excess starch.",
    "In a large pot or deep fryer, heat vegetable oil to 350°F (175°C). Carefully add the potato strips in batches and fry until golden brown and crispy. Remove them with a slotted spoon and drain on paper towels. Sprinkle with salt while they are still hot.",
    "Season the sirloin steaks with salt, black pepper, garlic powder, and paprika on both sides.",
    "Heat a skillet or frying pan over high heat. Add butter and let it melt. Place the steaks in the hot pan and cook to your desired level of doneness (about 3-4 minutes per side for medium-rare).",
    "Once the steaks are cooked, transfer them to an oven-safe dish and keep them warm in the preheated oven.",
    "Serve the hot, crispy French fries alongside the tender sirloin steaks. Garnish with chopped fresh parsley.",
    "Enjoy your delicious homemade steak frites!"
    ]
    }

    {
        "title"; "Pan-Seared Sea Bass",
        "description"; "A delightful seafood dish featuring pan-seared sea bass with a flavorful herb butter sauce.",
        "ingredients"; [
        {
        "name": "Sea bass fillets",
        "quantity": "4 fillets, about 6 ounces each"
        },
        {
        "name": "Olive oil",
        "quantity": "2 tablespoons"
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
        "name": "Fresh thyme leaves",
        "quantity": "1 tablespoon"
        },
        {
        "name": "Fresh rosemary leaves",
        "quantity": "1 tablespoon"
        },
        {
        "name": "Garlic",
        "quantity": "2 cloves, minced"
        },
        {
        "name": "Lemon juice",
        "quantity": "2 tablespoons"
        },
        {
        "name": "Butter",
        "quantity": "2 tablespoons"
        },
        {
        "name": "Fresh parsley",
        "quantity": "2 tablespoons, chopped (for garnish)"
        }
        ],
        "instructions"; [
        "Season the sea bass fillets with salt and black pepper on both sides.",
        "In a large skillet, heat olive oil over medium-high heat.",
        "Add the sea bass fillets to the skillet, skin side down. Cook for 4-5 minutes until the skin is crispy and golden brown.",
        "Flip the sea bass fillets and add fresh thyme, rosemary, and minced garlic to the skillet. Cook for another 3-4 minutes or until the fish is cooked through and flakes easily with a fork.",
        "Drizzle lemon juice over the sea bass and remove them from the skillet.",
        "In the same skillet, melt butter and let it cook until it turns a light brown color, creating a flavorful brown butter sauce.",
        "Pour the brown butter sauce over the sea bass fillets.",
        "Garnish with chopped fresh parsley and serve your pan-seared sea bass hot.",
        "Enjoy this delicious seafood dish!"
        ]
        }

        {
            "title"; "Loaded Nachos",
            "description"; "A mouthwatering nachos recipe with melted cheese, jalapeños, and your favorite toppings.",
            "ingredients"; [
            {
            "name": "Tortilla chips",
            "quantity": "1 bag (10-12 ounces)"
            },
            {
            "name": "Cheddar cheese",
            "quantity": "2 cups, shredded"
            },
            {
            "name": "Ground beef",
            "quantity": "1/2 pound"
            },
            {
            "name": "Onion",
            "quantity": "1, finely chopped"
            },
            {
            "name": "Jalapeño peppers",
            "quantity": "2, sliced (seeds removed for milder heat)"
            },
            {
            "name": "Black beans",
            "quantity": "1 can (15 ounces), drained and rinsed"
            },
            {
            "name": "Tomatoes",
            "quantity": "2, diced"
            },
            {
            "name": "Sour cream",
            "quantity": "1/2 cup"
            },
            {
            "name": "Guacamole",
            "quantity": "1/2 cup"
            },
            {
            "name": "Salsa",
            "quantity": "1/2 cup"
            },
            {
            "name": "Fresh cilantro",
            "quantity": "2 tablespoons, chopped (for garnish)"
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
            }
            ],
            "instructions"; [
            "Preheat your oven to 350°F (175°C).",
            "In a skillet, heat olive oil over medium heat. Add chopped onions and cook until they become translucent.",
            "Add the ground beef to the skillet and cook until browned. Season with salt and black pepper.",
            "On a large oven-proof platter or baking sheet, spread out the tortilla chips in an even layer.",
            "Sprinkle the shredded cheddar cheese evenly over the tortilla chips.",
            "Spread the cooked ground beef mixture over the cheese-covered chips.",
            "Add sliced jalapeños, black beans, and diced tomatoes on top of the beef.",
            "Bake the nachos in the preheated oven for about 10-12 minutes, or until the cheese is melted and bubbly.",
            "Remove from the oven and garnish with sour cream, guacamole, salsa, and chopped fresh cilantro.",
            "Serve the loaded nachos hot and enjoy!"
            ]
            }

            {
                "title"; "Chicken Fajitas",
                "description"; "A delicious and easy-to-make chicken fajitas recipe with flavorful spices and colorful bell peppers.",
                "ingredients"; [
                {
                "name": "Boneless, skinless chicken breasts",
                "quantity": "2 breasts, thinly sliced"
                },
                {
                "name": "Bell peppers",
                "quantity": "2, thinly sliced (use a mix of colors)"
                },
                {
                "name": "Onion",
                "quantity": "1, thinly sliced"
                },
                {
                "name": "Olive oil",
                "quantity": "2 tablespoons"
                },
                {
                "name": "Lime juice",
                "quantity": "2 tablespoons"
                },
                {
                "name": "Garlic",
                "quantity": "3 cloves, minced"
                },
                {
                "name": "Chili powder",
                "quantity": "2 teaspoons"
                },
                {
                "name": "Cumin",
                "quantity": "1 teaspoon"
                },
                {
                "name": "Paprika",
                "quantity": "1 teaspoon"
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
                "name": "Flour tortillas",
                "quantity": "8, small"
                },
                {
                "name": "Sour cream",
                "quantity": "1/2 cup"
                },
                {
                "name": "Salsa",
                "quantity": "1/2 cup"
                },
                {
                "name": "Guacamole",
                "quantity": "1/2 cup"
                },
                {
                "name": "Fresh cilantro",
                "quantity": "2 tablespoons, chopped (for garnish)"
                }
                ],
                "instructions"; [
                "In a bowl, combine olive oil, lime juice, minced garlic, chili powder, cumin, paprika, salt, and black pepper. Mix well.",
                "Place the sliced chicken in a resealable plastic bag and pour half of the marinade over it. Seal the bag and refrigerate for at least 30 minutes, allowing the chicken to marinate.",
                "Heat a large skillet over medium-high heat. Add the marinated chicken and cook until it's browned and cooked through, about 5-7 minutes. Remove the chicken from the skillet and set it aside.",
                "In the same skillet, add a little more olive oil if needed. Add the sliced onions and bell peppers. Sauté until they become tender and slightly caramelized, about 5-7 minutes.",
                "Return the cooked chicken to the skillet with the sautéed vegetables. Cook for an additional 2-3 minutes to heat everything through.",
                "Warm the flour tortillas in a dry skillet or microwave.",
                "Serve the chicken fajita mixture in warm tortillas, garnished with sour cream, salsa, guacamole, and chopped fresh cilantro.",
                "Roll up the tortillas and enjoy your homemade chicken fajitas!"
                ]
                }
    
    
{
    "title"; "Caesar Salad",
    "description"; "A classic Caesar salad with crisp romaine lettuce, homemade croutons, and a creamy Caesar dressing.",
    "ingredients"; [
    {
    "name": "Romaine lettuce",
    "quantity": "1 head, torn into bite-sized pieces"
    },
    {
    "name": "Croutons",
    "quantity": "1 cup"
    },
    {
    "name": "Parmesan cheese",
    "quantity": "1/2 cup, grated"
    },
    {
    "name": "Caesar dressing",
    "quantity": "1/2 cup (store-bought or homemade)"
    },
    {
    "name": "Anchovy fillets",
    "quantity": "2, minced (optional)"
    },
    {
    "name": "Garlic",
    "quantity": "1 clove, minced"
    },
    {
    "name": "Lemon juice",
    "quantity": "2 tablespoons"
    },
    {
    "name": "Olive oil",
    "quantity": "1/4 cup"
    },
    {
    "name": "Dijon mustard",
    "quantity": "1 teaspoon"
    },
    {
    "name": "Worcestershire sauce",
    "quantity": "1 teaspoon"
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
    "instructions"; [
    "In a small bowl, whisk together minced garlic, lemon juice, Dijon mustard, Worcestershire sauce, anchovy fillets (if using), salt, and black pepper.",
    "Slowly drizzle in the olive oil while continuing to whisk until the dressing is well combined and emulsified.",
    "In a large salad bowl, place the torn romaine lettuce leaves.",
    "Add the croutons on top of the lettuce.",
    "Pour the Caesar dressing over the salad and toss to coat the lettuce and croutons evenly with the dressing.",
    "Sprinkle grated Parmesan cheese over the salad.",
    "Serve the classic Caesar salad immediately as a side dish or add grilled chicken or shrimp for a complete meal.",
    "Enjoy your fresh and flavorful Caesar salad!"
    ]
    }

    {
        "title"; "Homemade Pizza",
        "description"; "A classic homemade pizza recipe with a crispy crust, savory tomato sauce, and your favorite toppings.",
        "ingredients"; [
        {
        "name": "Pizza dough",
        "quantity": "1 ball (store-bought or homemade)"
        },
        {
        "name": "Pizza sauce",
        "quantity": "1/2 cup"
        },
        {
        "name": "Mozzarella cheese",
        "quantity": "1 1/2 cups, shredded"
        },
        {
        "name": "Toppings of your choice",
        "quantity": "e.g., pepperoni, sliced bell peppers, onions, mushrooms, olives"
        },
        {
        "name": "Olive oil",
        "quantity": "2 tablespoons"
        },
        {
        "name": "Dried oregano",
        "quantity": "1 teaspoon"
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
        "name": "Cornmeal (for dusting)",
        "quantity": "As needed"
        }
        ],
        "instructions"; [
        "Preheat your oven to the highest temperature it can reach (usually around 475-500°F or 245-260°C). Place a pizza stone or inverted baking sheet in the oven as it preheats.",
        "Roll out the pizza dough on a lightly floured surface into your desired pizza shape and thickness.",
        "Sprinkle cornmeal on a pizza peel or another inverted baking sheet to prevent sticking. Transfer the rolled-out dough to the peel or sheet.",
        "Spread pizza sauce evenly over the dough, leaving a small border around the edges for the crust.",
        "Sprinkle shredded mozzarella cheese over the sauce.",
        "Add your favorite toppings on top of the cheese.",
        "Drizzle olive oil over the pizza and sprinkle with dried oregano, salt, and black pepper.",
        "Carefully slide the pizza onto the preheated pizza stone or baking sheet in the oven.",
        "Bake for about 10-12 minutes or until the crust is golden brown and the cheese is bubbly and slightly browned.",
        "Remove the pizza from the oven and let it cool for a minute before slicing.",
        "Slice, serve, and enjoy your homemade pizza!"
        ]
        }

        {
            "title"; "Seafood Paella",
            "description"; "A flavorful and colorful Spanish seafood paella with saffron-infused rice, shrimp, mussels, and more.",
            "ingredients"; [
            {
            "name": "Chicken thighs",
            "quantity": "2, boneless and skinless, cut into small pieces"
            },
            {
            "name": "Large shrimp",
            "quantity": "8, peeled and deveined"
            },
            {
            "name": "Mussels",
            "quantity": "12, cleaned and debearded"
            },
            {
            "name": "Onion",
            "quantity": "1, finely chopped"
            },
            {
            "name": "Red bell pepper",
            "quantity": "1, diced"
            },
            {
            "name": "Garlic",
            "quantity": "3 cloves, minced"
            },
            {
            "name": "Tomato",
            "quantity": "1, diced"
            },
            {
            "name": "Arborio rice",
            "quantity": "1 1/2 cups"
            },
            {
            "name": "Saffron threads",
            "quantity": "1/4 teaspoon (optional, for color and flavor)"
            },
            {
            "name": "Paprika",
            "quantity": "1 teaspoon"
            },
            {
            "name": "Chicken broth",
            "quantity": "3 cups"
            },
            {
            "name": "Olive oil",
            "quantity": "2 tablespoons"
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
            "name": "Fresh parsley",
            "quantity": "2 tablespoons, chopped (for garnish)"
            },
            {
            "name": "Lemon wedges",
            "quantity": "For garnish"
            }
            ],
            "instructions"; [
            "In a large, flat paella pan or a wide skillet, heat olive oil over medium-high heat.",
            "Add the chicken pieces and cook until browned on all sides. Remove and set aside.",
            "In the same pan, add diced onions, red bell pepper, and minced garlic. Sauté until the vegetables soften.",
            "Add diced tomatoes and cook for a few minutes until they break down and release their juices.",
            "Stir in Arborio rice, saffron threads (if using), and paprika. Cook for a couple of minutes, stirring to coat the rice in the flavorful mixture.",
            "Pour in the chicken broth and return the cooked chicken pieces to the pan. Season with salt and black pepper to taste. Stir gently.",
            "Reduce heat to low and simmer, without stirring, for about 20-25 minutes or until the rice is tender and the liquid is absorbed.",
            "Arrange the shrimp and mussels on top of the rice, cover the pan, and continue to cook for an additional 5-7 minutes or until the shrimp turn pink and the mussels open.",
            "Remove from heat, garnish with chopped fresh parsley, and serve your delicious seafood paella hot with lemon wedges on the side."
            ]
            }
            
            {
                "title"; "Classic Hot Dog",
                "description"; "A timeless recipe for a classic hot dog with your favorite toppings and condiments.",
                "ingredients"; [
                {
                "name": "Hot dog buns",
                "quantity": "4"
                },
                {
                "name": "Hot dogs",
                "quantity": "4"
                },
                {
                "name": "Mustard",
                "quantity": "As needed"
                },
                {
                "name": "Ketchup",
                "quantity": "As needed"
                },
                {
                "name": "Mayonnaise",
                "quantity": "As needed"
                },
                {
                "name": "Relish",
                "quantity": "As needed"
                },
                {
                "name": "Onions",
                "quantity": "1/2 cup, finely chopped"
                },
                {
                "name": "Sauerkraut",
                "quantity": "1/2 cup (optional)"
                },
                {
                "name": "Shredded cheddar cheese",
                "quantity": "1/2 cup (optional)"
                },
                {
                "name": "Jalapeño slices",
                "quantity": "As needed (optional, for heat)"
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
                "instructions"; [
                "Preheat your grill or stovetop griddle to medium-high heat.",
                "Place the hot dogs on the grill or griddle and cook, turning occasionally, until they are heated through and have grill marks, about 5-7 minutes.",
                "While the hot dogs are cooking, lightly toast the hot dog buns on the grill or in a toaster.",
                "Place the cooked hot dogs in the toasted buns.",
                "Add your desired toppings and condiments, such as mustard, ketchup, mayonnaise, relish, chopped onions, sauerkraut, shredded cheddar cheese, and jalapeño slices.",
                "Season with a pinch of salt and black pepper if desired.",
                "Serve your classic hot dogs immediately, and enjoy!"
                ]
                }


                {
                    "title"; "Sushi Rolls",
                    "description"; "A recipe for delicious homemade sushi rolls with your choice of fillings and toppings.",
                    "ingredients"; [
                    {
                    "name": "Sushi rice",
                    "quantity": "2 cups, cooked and seasoned with sushi vinegar"
                    },
                    {
                    "name": "Nori seaweed sheets",
                    "quantity": "10 sheets"
                    },
                    {
                    "name": "Fresh fish fillets (e.g., tuna, salmon, or yellowtail)",
                    "quantity": "8 ounces, thinly sliced"
                    },
                    {
                    "name": "Avocado",
                    "quantity": "1, sliced"
                    },
                    {
                    "name": "Cucumber",
                    "quantity": "1, julienned"
                    },
                    {
                    "name": "Carrots",
                    "quantity": "1, julienned"
                    },
                    {
                    "name": "Soy sauce",
                    "quantity": "For dipping"
                    },
                    {
                    "name": "Pickled ginger",
                    "quantity": "For serving"
                    },
                    {
                    "name": "Wasabi",
                    "quantity": "For serving"
                    },
                    {
                    "name": "Bamboo sushi rolling mat",
                    "quantity": "1"
                    },
                    {
                    "name": "Plastic wrap",
                    "quantity": "For wrapping the rolling mat"
                    }
                    ],
                    "instructions"; [
                    "Place a bamboo sushi rolling mat on a clean surface. Cover it with plastic wrap to prevent sticking.",
                    "Place a sheet of nori, shiny side down, on the plastic-covered mat.",
                    "Wet your hands to prevent the rice from sticking, and then spread a thin layer of seasoned sushi rice evenly over the nori, leaving about 1 inch of nori uncovered at the top edge.",
                    "Place your choice of fillings (sliced fish, avocado, cucumber, and carrots) horizontally in the center of the rice.",
                    "Using the bamboo mat, carefully roll the nori and rice over the fillings, applying gentle pressure to shape it into a tight cylinder.",
                    "Moisten the top edge of the nori with a little water and finish rolling to seal the sushi roll.",
                    "Repeat the process with the remaining nori sheets and fillings.",
                    "Using a sharp knife dipped in water, slice each sushi roll into bite-sized pieces.",
                    "Serve your homemade sushi rolls with soy sauce, pickled ginger, and wasabi.",
                    "Enjoy your delicious homemade sushi!"
                    ]
                    }
            

