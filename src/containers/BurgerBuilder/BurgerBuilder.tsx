import * as React from 'react';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';

export interface BurgerBuilderProps {}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component<BurgerBuilderProps> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState = (ingredients: object) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((total, el) => {
        return total + el;
        // tslint:disable-next-line:align
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = (type: string) => {
    const oldCount: number = this.state.ingredients[type];
    const updatedCount: number = oldCount + 1;
    const updatedIngredients: object = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: string) => {
    const oldCount: number = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount: number = oldCount - 1;
    const updatedIngredients: object = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;
    const priceDeduction: number = INGREDIENT_PRICES[type];
    const oldPrice: number = this.state.totalPrice;
    const newPrice: number = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You continue!');
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        mane: 'Max S.',
        address: {
          street: 'Test street 1',
          city: 'Anchorage',
          country: 'USA'
        },
        email: 'email@test.com'
      },
      deliveryMethod: 'Fastest'
    };

    axios
      .post('/orders.json', order)
      .then((response) => {
        // tslint:disable-next-line
        console.log(response);
      })
      .catch((error) => {
        // tslint:disable-next-line
        console.log(error);
      });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    // tslint:disable-next-line:forin
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelledHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelledHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchaseable={this.state.purchaseable}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
