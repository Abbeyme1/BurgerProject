import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../../components/Order/CheckoutSummary/ContactData/ContactData";
import { Route } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: null,
    tatalPrice: 0,
  };

  componentWillMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let params of query.entries()) {
      if (params[0] === "price") {
        price = params[1];
      } else {
        ingredients[params[0]] = +params[1];
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.tatalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
