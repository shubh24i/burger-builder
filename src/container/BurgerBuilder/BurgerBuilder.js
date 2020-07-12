import React, { Component } from "react";
import Auxilury from "./../../hoc/Auxilury/Auxilury";
import Burger from "./../../component/Burger/Burger";
import BuildControls from "./../../component/Burger/BurgerControls/BuildControls";
import Modal from "./../../component/UI/Modal/Modal";
import OrderSumarry from "../../component/Burger/OrderSumarry/OrderSumarry";
import axios from "../../axios-order";
import Loader from "./../../component/UI/Loader/Loader";

const INFREDIENT_PRICES = {
  salad: 5,
  bacon: 8,
  cheese: 10,
  meat: 20,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 60,
    purchasable: false,
    purchasing: false,
    loadding: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-builder-app-9bddb.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => (sum += el), 0);

    this.setState({
      purchasable: sum > 0,
    });
  };

  ingredientAdded = (type) => {
    let updatedIngradients = { ...this.state.ingredients };
    updatedIngradients[type] += 1;
    let updatedPrice = this.state.totalPrice + INFREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngradients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(updatedIngradients);
  };

  ingredientRemoved = (type) => {
    let updatedIngradients = { ...this.state.ingredients };
    if (updatedIngradients[type] <= 0) {
      return;
    }
    updatedIngradients[type] -= 1;
    let updatedPrice = this.state.totalPrice - INFREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngradients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(updatedIngradients);
  };

  puchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const orderDetails = {
      ...this.state.ingredients,
      totalPrice: this.state.totalPrice,
    };
    this.props.history.push(
      "/checkout/?ingredients=" + JSON.stringify(orderDetails)
    );
    /*  */
  };

  checkout = () => {};
  render() {
    const disabledControl = {
      ...this.state.ingredients,
    };

    for (let key in disabledControl) {
      disabledControl[key] = disabledControl[key] <= 0;
    }
    let orderSumarry = null;
    let burger = <Loader />;
    if (this.state.ingredients) {
      burger = (
        <Auxilury>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.ingredientAdded}
            ingredientRemoved={this.ingredientRemoved}
            disabledControl={disabledControl}
            price={this.state.totalPrice}
            disabled={this.state.purchasable}
            click={this.puchasingHandler}
          />
        </Auxilury>
      );

      orderSumarry = (
        <OrderSumarry
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loadding) {
      orderSumarry = <Loader />;
    }

    return (
      <Auxilury>
        <Modal
          show={this.state.purchasing}
          modelClosed={this.purchaseCancelHandler}
        >
          {orderSumarry}
        </Modal>

        {burger}
      </Auxilury>
    );
  }
}
export default BurgerBuilder;
