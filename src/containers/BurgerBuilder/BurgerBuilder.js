import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 2,
      bacon: 0,
    },
  };

  increase = (ing) => {
    const num = this.state.ingredients[ing] + 1;

    let ingredients = { ...this.state.ingredients };
    ingredients[ing] = num;
    this.setState({ ingredients: ingredients });
  };
  decrease = (ing) => {
    let num = this.state.ingredients[ing] - 1;
    if (num < 0) {
      alert("cannot dec more");
      num = 0;
    }
    let ingredients = { ...this.state.ingredients };
    ingredients[ing] = num;
    this.setState({ ingredients: ingredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          ingredients={this.state.ingredients}
          inc={this.increase}
          dec={this.decrease}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
