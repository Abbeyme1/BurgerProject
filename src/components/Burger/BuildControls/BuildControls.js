import React, { Component } from "react";
import IngredientController from "./IngredientController/IngredientController";

class BuildControl extends Component {
  render() {
    return (
      <div>
        <IngredientController
          ingredient="salad"
          inc={this.props.inc}
          dec={this.props.dec}
        />
        <IngredientController
          ingredient="meat"
          inc={this.props.inc}
          dec={this.props.dec}
        />
        <IngredientController
          ingredient="cheese"
          inc={this.props.inc}
          dec={this.props.dec}
        />
        <IngredientController
          ingredient="bacon"
          inc={this.props.inc}
          dec={this.props.dec}
        />
      </div>
    );
  }
}

export default BuildControl;
