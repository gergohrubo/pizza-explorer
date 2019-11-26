import React from "react";
import { connect } from "react-redux";
import { unselectPizza } from '../actions/pizzaDetails'

class PizzaDetails extends React.Component {
  handleClick = () => {
    this.props.unselectPizza()
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
          <button onClick={this.handleClick}>close</button>
        </h2>
        <p>
          <em>{pizza.description}</em>
        </p>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetails);