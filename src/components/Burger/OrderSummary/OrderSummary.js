import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    let ingredients = Object.keys(this.props.summary.ingredients).map(
      ingkey => {
        console.log(ingkey);
        return (
          <li style={{ textTransform: 'capitalize' }}>
            <strong>{ingkey}: </strong>
            {this.props.summary.ingredients[ingkey]}
          </li>
        );
      }
    );
    return (
      <div>
        <h2>Your Order</h2>
        <div>A Delicious BURGER with Following Ingredients.</div>
        <ul>{ingredients}</ul>
        <h4>Total Price: ${this.props.summary.totalPrice.toFixed(2)}</h4>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    );
  }
}
export default OrderSummary;
