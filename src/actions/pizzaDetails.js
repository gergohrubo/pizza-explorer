export const selectPizza = (pizzaID) => ({
  type: "SELECT_PIZZA",
  payload: pizzaID
})

export const unselectPizza = () => ({
  type: "UNSELECT_PIZZA",
  payload: null
})

export const addIngredient = (ingredientName, pizzaID) => ({
  type: "ADD_INGREDIENT_TO_PIZZA",
  payload: {
    ingredientName,
    id: pizzaID
  }
})