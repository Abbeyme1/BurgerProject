import React, { Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { withRouter } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.4,
  cheese: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // console.log(this.props);
    axios
      .get("https://reactburger-60525.firebaseio.com/ingredients.json")
      .then((res) => {
        // console.log(res);
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // browserHistory.push("/checkout");
    // console.log(this.props.history);
    // this.props.match.url("/checkout");
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);

    // console.log(queryParams);

    const queryString = queryParams.join("&");
    // console.log(queryString);

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
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

    let orderSummary = null;
    let burger = this.state.error ? (
      <h1>failed to load ingredients</h1>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControl
            ingredients={this.state.ingredients}
            inc={this.addIngredientHandler}
            dec={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(withRouter(BurgerBuilder), axios);
