export const selectPizza = (pizzaID) => ({
  type: "SELECT",
  payload: pizzaID
})

export const unselectPizza = () => ({
  type: "UNSELECT_PIZZA",
  payload: null
})