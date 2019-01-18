import React, { Component } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be a functional component, does not need to b a class
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <>
        <h3>Your Burger</h3>
        <p>A delicioues burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>
            Total price is: {this.props.totalPriceSummary.toFixed(2)}
          </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}
export default OrderSummary;
