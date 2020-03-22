import React, { useEffect } from "react";
import "./app.css";
import Header from "../src/js/components/header";
import Home from "../src/js/pages/home";
import Cart from "../src/js/pages/cart";
import Products from "../src/js/pages/products";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Redirect from="/" to="/products" />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
