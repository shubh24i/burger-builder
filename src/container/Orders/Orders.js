import React, { Component } from "react";
import Order from "./../../component/Order/Order";
import axios from "./../../axios-order";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchOrders = [];
        console.log(response.data);
        for (let key in response.data) {
          fetchOrders.push({ ...response.data[key], id: key });
        }
        this.setState({
          loading: false,
          orders: fetchOrders,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }
  render() {
    /* if (this.state.orders.ingredients) {
      console.log(this.state.orders.ingredients);
    } */

    return (
      <div>
        {this.state.orders
          ? this.state.orders.map((order) => (
              <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
              />
            ))
          : null}
      </div>
    );
  }
}

export default Orders;
