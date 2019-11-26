const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!",
    ingredients: ["dough", "tomato base", "mozzarella", "basil"]
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil.",
    ingredients: ["dough", "tomato base", "mozzarella"]
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?",
    ingredients: ["olive oil", "sesame oil", "sunflower oil", "coconut oil"]
  }
];

export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          ingredients: action.payload.ingredients || [],
          description: ""
        }
      ];
    }
    case "ADD_INGREDIENT_TO_PIZZA": {
      return state.map(pizza => {
        if (pizza.id === action.payload.id) {
          return {
            ...pizza,
            ingredients: pizza.ingredients.concat(action.payload.ingredientName)
          }
        }
        return pizza
      })
    }
    default: {
      return state;
    }
  }
}