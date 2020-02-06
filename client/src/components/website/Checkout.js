import React, { useState } from "react";
import StripeButton from "./StripeButton";

export default function Checkout() {
  const [price, setPrice] = useState(0);
  return (
    <div>
      <h1>Checkout</h1>
      <input name="price" id="price" onChange={e => setPrice(e.target.value)} />
      <br />
      <span>${price} to pay </span>
      <br />
      <StripeButton price={price} />
      <br />
      <br />
      <br />
      <br />
      <nav class="navbar fixed-bottom navbar-light bg-light">
        Copyright © 2020 C L O S E T S E V E N
      </nav>
    </div>
  );
}
