import React from "react";
import { connect } from "react-redux";
import { unselectPizza, addIngredient } from '../actions/pizzaDetails'

class PizzaDetails extends React.Component {
  state = {
    newIngredientName: ""
  };
  handleClick = () => {
    this.props.unselectPizza()
  }
  handleAddClick = () => {
    this.props.addIngredient(this.state.newIngredientName, this.props.pizza.id)
  }
  render() {
    const pizza = this.props.pizza;

    if (!pizza) {
      return <p>Select a pizza to view details</p>;
    }

    return (
      <div>
        <h2>
          {pizza.name}
        </h2>
        <p>
          <em>{pizza.description}</em>
        </p>
        <ul>
          {pizza.ingredients.map((ingredient, i) => {
            return (
              <li key={i}>{ingredient}</li>
            );
          })}
        </ul>
        <p>
          New ingredient:
          <input
            value={this.state.newIngredientName}
            onChange={e => {
              this.setState({ newIngredientName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
        <button onClick={this.handleClick}>close</button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    // Note: this could be `undefined`, if no pizza selected
    pizza: reduxState.pizzaList.find(pizza => {
      return pizza.id === reduxState.selectedPizza
    })
  };
}

const mapDispatchToProps = function (dispatch) {
  return {
    unselectPizza() {
      dispatch(unselectPizza())
    },
    addIngredient(ingredientName, pizzaID) {
      dispatch(addIngredient(ingredientName, pizzaID));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetails);