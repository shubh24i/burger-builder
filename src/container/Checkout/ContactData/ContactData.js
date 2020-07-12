import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "./../../../component/UI/Button/Button";
import axios from "./../../../axios-order";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (e) => {
    e.preventDefault();

    /* for(const el in this.state){
        e.target.form['name'].value
    } */
    let name = e.target.form.name.value;
    let email = e.target.form.email.value;
    let street = e.target.form.street.value;
    let postal = e.target.form.postal.value;
    /* 
    const orderHandler = {
      name: name,
      email: email,
      address: {
        street: street,
        postalCode: postal,
      },
    }; */

    this.setState({ loadding: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: name,
        address: {
          street: street,
          zipCode: postal,
          country: "India",
        },
        email: email,
        deliveryMethod: "fatest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loadding: false });
        this.props.history.replace("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loadding: false });
      });
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your Stret Address"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Your Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            Order Now
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
