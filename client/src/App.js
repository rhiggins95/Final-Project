import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import About from "./components/user/About";
import ShopList from "./components/shop/ShopList";
import ShopNew from "./components/shop/ShopNew";
import Profile from "./components/website/Profile";
import Checkout from "./components/website/Checkout";
import StripeButton from "./components/website/StripeButton";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Signup">
          <Signup />
        </Route>

        <Route exact path="/ShopList">
          <ShopList cartItems={cartItems} setCartItems={setCartItems} />
        </Route>

        <Route exact path="/ShopNew">
          <ShopNew setCartItems={setCartItems} cartItems={cartItems} />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/Checkout">
          <Checkout />
        </Route>

        <Route exact path="/Profile/:id">
          <Profile />
        </Route>

        <Route path="/">
          <Home />

          <Router>
            <Switch>
              <Route exact path="/website"></Route>
            </Switch>
          </Router>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
