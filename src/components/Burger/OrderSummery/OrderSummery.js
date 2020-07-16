import React from "react";
import Aux from "../../../hoc/Auxillary";

const orderSummery = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey} : {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p></p>
    </Aux>
  );
};

export default orderSummery;
