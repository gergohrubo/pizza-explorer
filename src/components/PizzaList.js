import React from "react";
import { connect } from "react-redux";
import { addPizza } from '../actions/pizzaList'
import { selectPizza } from '../actions/pizzaDetails'

class PizzaList extends React.Component {
  state = {
    newPizzaName: "",
    filterInputField: ""
  };

  handleAddClick = () => {
    this.props.addPizza(this.state.newPizzaName)
  }
  handleSelectPizza = (pizzaID) => {
    this.props.selectPizza(pizzaID)
  }
  render() {
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas
            .filter(pizza => {
              if (!this.state.filterInputField) {
                return true
              } else {
                return pizza.ingredients.reduce((acc, elem) => {
                  if (elem.indexOf(this.state.filterInputField) !== -1) {
                    acc += 1
                  }
                  return acc
                }, 0)
              }
            })
            .map(pizza => {
              return (
                <li key={pizza.id} onClick={() => this.handleSelectPizza(pizza.id)}>
                  {pizza.name}
                </li>
              );
            })}
        </ul>
        <p>
          Filter pizzas based on ingredients:
          <input
            value={this.state.filterInputField}
            onChange={e => {
              this.setState({ filterInputField: e.target.value });
            }}
          />
        </p>
        <p>
          New pizza:
          <input
            value={this.state.newPizzaName}
            onChange={e => {
              this.setState({ newPizzaName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    pizzas: reduxState.pizzaList,
    kelley: "Hello"
  };
}

const mapDispatchToProps = function (dispatch) {
  return {
    addPizza(pizzaName) {
      dispatch(addPizza(pizzaName));
    },
    selectPizza(pizzaID) {
      dispatch(selectPizza(pizzaID))
    }
  };
}

const connectingHOC = connect(mapStateToProps, mapDispatchToProps);

//alternative: const connectingHOC = connect(mapStateToProps, { addPizza, selectPizza });

const ConnectedPizzaList = connectingHOC(PizzaList);

export default ConnectedPizzaList;
