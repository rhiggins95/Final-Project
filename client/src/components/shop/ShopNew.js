import React from "react";
import { Link } from "react-router-dom";
import top1 from "../../images/clothing/top1.JPG";
import top2 from "../../images/clothing/top2.jpg";
import top3 from "../../images/clothing/top3.JPG";
import top4 from "../../images/clothing/top4.JPG";
import bottoms1 from "../../images/clothing/bottoms1.jpg";
import bottoms2 from "../../images/clothing/bottoms2.jpg";
import bottoms3 from "../../images/clothing/bottoms3.jpg";
import bottoms4 from "../../images/clothing/bottoms4.jpg";
import dress1 from "../../images/clothing/dress1.JPG";
import dress2 from "../../images/clothing/dress2.JPG";
import dress3 from "../../images/clothing/dress3.JPG";
import dress4 from "../../images/clothing/dress4.JPG";
import { ReactComponent as Logo } from "../../images/welcomepage/bags.svg";

export default function ShopNew({ cartItems, setCartItems }) {
  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <section>
        <header class="main-header">
          <nav className="navbar bg-dark navbar-dark">
            <Link className="text-light" to="/home">
              Home
            </Link>
            <div className="text-light">C L O S E T S E V E N</div>
            <Link className="text-light" to="/login">
              Logout
            </Link>
            <Link to="/ShopList">
              <Logo className="bags" />
              CHECKOUT
            </Link>
          </nav>
        </header>
        <body>
          <section class="container content-section">
            <header>TOPS</header>
            <div className="tops">
              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${top1})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$19.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "tops",
                    image: top1,
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>
              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${top2})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$19.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "tops",
                    image: "top2",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${top3})` }}
              >
                <div className="text outfit">
                  <span class="shop-item-price">$19.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "tops",
                    image: "top3",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${top4})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$19.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "tops",
                    image: "top4",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <header>Bottoms</header>
            <div class="bottoms">
              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${bottoms1})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$30</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "bottoms",
                    image: "bottoms1",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${bottoms2})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$30</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "bottoms",
                    image: "bottoms2",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${bottoms3})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$30</span>
                </div>

                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "bottoms",
                    image: "bottoms3",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${bottoms4})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$30</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "bottoms",
                    image: "bottoms4",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <header> Dresses </header>
            <div class="dresses">
              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${dress1})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$119.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "dresses",
                    image: "dress1",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${dress2})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$119.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "dresses",
                    image: "dress2",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${dress3})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$119.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "dresses",
                    image: "dress3",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="text-left outfit"
                style={{ backgroundImage: `url(${dress4})` }}
              >
                <div class="text outfit">
                  <span class="shop-item-price">$119.99</span>
                </div>
                <button
                  class="btn btn-dark shop-item-button"
                  type="button"
                  onClick={addToCart.bind(this, {
                    name: "dresses",
                    image: "dress4",
                    price: "$19.99"
                  })}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </section>
        </body>
        <span></span>
      </section>
      <nav class="navbar navbar-light bg-light">
        Copyright © 2020 C L O S E T S E V E N
      </nav>
    </div>
  );
}
