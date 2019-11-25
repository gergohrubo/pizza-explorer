import { combineReducers } from "redux";

import pizzaListReducer from "./pizzaList";
import selectedPizzaReducer from "./selectedPizza";

export default combineReducers({
  pizzaList: pizzaListReducer,
  selectedPizza: selectedPizzaReducer
});