import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredients from "./BurgetIngredient/BurgerIngredient";

const burger = (props) => {
  //VERYYY IMPO
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ing) => {
      return [...Array(props.ingredients[ing])].map((_, i) => {
        return <BurgerIngredients key={ing + i} type={ing} />;
      });
    }) //VERY IMPO
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients !</p>;
  }
  return (
    <div className={Classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
