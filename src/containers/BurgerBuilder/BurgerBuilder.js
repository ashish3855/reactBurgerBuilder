import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    noPurchase: 0,
    modalShow: false
  };

  noPurchasefunc = ingredients => {
    let sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      noPurchase: sum
    });
  };

  // salad
  addIngredients = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;

    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState(
      {
        ingredients: { ...this.state.ingredients, [type]: newCount },
        totalPrice: this.state.totalPrice + ingredientPrice
      },
      () => {
        this.noPurchasefunc(this.state.ingredients);
      }
    );
  };

  removeIngredients = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const newCount = oldCount - 1;

    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState(
      {
        ingredients: { ...this.state.ingredients, [type]: newCount },
        totalPrice: this.state.totalPrice - ingredientPrice
      },
      () => {
        this.noPurchasefunc(this.state.ingredients);
      }
    );
  };

  purchaseHandler = () => {
    this.setState({
      modalShow: true
    });
  };

  modalRemove = () => {
    this.setState({
      modalShow: false
    });
  };

  purchaseContinueHandler = () => {
    alert('Now you continue');
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <Modal modalShow={this.state.modalShow} modalHide={this.modalRemove}>
          <OrderSummary
            summary={this.state}
            purchaseCancelled={this.modalRemove}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <BuildControls
          added={this.addIngredients}
          removed={this.removeIngredients}
          price={this.state.totalPrice}
          ingredientTypes={this.state.ingredients}
          noPurchase={this.state.noPurchase}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
