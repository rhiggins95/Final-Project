import React from "react";
import StripeButton from "../website/StripeButton";
import Checkout from "../website/Checkout";

export default function ShopList({ cartItems, setCartItems }) {
  const RemoveFromCart = item => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };
  console.log(cartItems);
  return (
    <div>
      <div>
        <div className="pay">
          <h1>Shopping Cart</h1>
        </div>

        <StripeButton />

        {/* <button
          class="btn btn-dark shop-item-button"
          type="button"
          onClick={RemoveFromCart.bind(this, {
            name: "",
            image: "",
            price: ""
          })}
        >
          Remove from Cart
        </button> */}
        {cartItems.map(cartItem => (
          <div>
            <h3>{cartItem.name}</h3>
            <img src={cartItem.image} alt="item"></img>
            <br></br>
            <span>{cartItem.price}</span>
            <div className="money">
              <button onClick={RemoveFromCart.bind(this, cartItem)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <Checkout />
      <nav class="navbar fixed-bottom navbar-light bg-light">
        Copyright © 2020 C L O S E T S E V E N
      </nav>
    </div>
  );
}
