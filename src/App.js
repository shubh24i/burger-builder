import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Auxilury from "./hoc/Auxilury/Auxilury";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import { Route } from "react-router-dom";
import Orders from "./../src/container/Orders/Orders";

function App() {
  return (
    <Auxilury>
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders/" component={Orders} />
      </Layout>
    </Auxilury>
  );
}

export default App;
