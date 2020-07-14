import React from "react";

const IngredientController = (props) => {
  var ing = props.ingredient;

  return (
    <p>
      {ing} <button onClick={() => props.inc(ing)}>+</button>{" "}
      <button onClick={() => props.dec(ing)}>-</button>
    </p>
  );
};

export default IngredientController;
