import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.4,
  cheese: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  updatePurchaseState(ingredients) {
    // const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, val) => {
        return sum + val;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (ing) => {
    const num = this.state.ingredients[ing] + 1;

    let updateIngredients = { ...this.state.ingredients };
    updateIngredients[ing] = num;
    const updateTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[ing];
    this.setState({
      ingredients: updateIngredients,
      totalPrice: updateTotalPrice,
    });
    this.updatePurchaseState(updateIngredients);
  };
  removeIngredientHandler = (ing) => {
    let num = this.state.ingredients[ing];
    if (num <= 0) {
      return;
    }
    num = num - 1;
    let updateIngredients = { ...this.state.ingredients };
    updateIngredients[ing] = num;
    const updateTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[ing];
    this.setState({
      ingredients: updateIngredients,
      totalPrice: updateTotalPrice,
    });
    this.updatePurchaseState(updateIngredients);
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          ingredients={this.state.ingredients}
          inc={this.addIngredientHandler}
          dec={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
