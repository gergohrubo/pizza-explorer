export const addPizza = (pizzaName) => ({
  type: "ADD_PIZZA",
  payload: {
    id: Math.floor(Math.random() * 10000),
    name: pizzaName,
  }
})