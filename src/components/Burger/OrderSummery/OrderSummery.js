import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  //this could be a functional component,doesn't have to be a class based component
  //just for debugging(checking that it shouldnt be updated when we change count in state)
  componentDidUpdate() {
    console.log("[order summery.js] orderwillmount");
  }
  render() {
    const ingredients = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey} : {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummery;
