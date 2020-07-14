import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredients from "./BurgetIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((ing) => {
    return [...Array(props.ingredients[ing])].map((_, i) => {
      return <BurgerIngredients key={ing + i} type={ing} />;
    });
  });

  return (
    <div className={Classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
