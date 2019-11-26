export const selectPizza = (pizzaID) => ({
  type: "SELECT_PIZZA",
  payload: pizzaID
})

export const unselectPizza = () => ({
  type: "UNSELECT_PIZZA",
  payload: null
})