import React from "react";
import { connect } from "react-redux";
import { addPizza } from '../actions/pizzaList'
import { selectPizza, unselectPizza } from '../actions/pizzaDetails'

class PizzaList extends React.Component {
  state = {
    newPizzaName: ""
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
          {this.props.pizzas.map(pizza => {
            return (
              <li key={pizza.id} onClick={() => this.handleSelectPizza(pizza.id)}>
                {pizza.name}
              </li>
            );
          })}
        </ul>
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
