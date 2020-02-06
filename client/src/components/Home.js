import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/welcomepage/image.jpg";
import image2 from "../images/welcomepage/image2.jpg";
import image3 from "../images/welcomepage/image3.jpg";
import image4 from "../images/welcomepage/image4.jpg";
import axios from "axios";

import { ReactComponent as Logo } from "../images/welcomepage/bags.svg";
function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const setAuthToken = token => {
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
    };
    const loadUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get("/api/user/load");
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };
    loadUser();
  });

  return (
    <div>
      <section>
        <header className="main-header">
          <nav className="navbar bg-dark navbar-dark">
            {user ? (
              <Link className="text-light" to={`/Profile/${user._id}`}>
                Welcome
              </Link>
            ) : (
              <>
                <Link className="text-light" to="/login">
                  Login
                </Link>
                <Link className="text-light" to="/Signup">
                  Sign Up
                </Link>
              </>
            )}
            <Link className="text-light" to="/About">
              About
            </Link>

            <Link className="text-light" to="/login">
              Logout
            </Link>

            <div>
              <input
                class="mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>

            <Link to="/ShopList">
              <Logo className="bags" />
            </Link>
          </nav>

          <h1 className="text-center band-name band-name-large">
            C L O S E T <span className="ml-4">S E V E N</span>
          </h1>
        </header>
        <section className="container content-section">
          <div className="shop-items">
            <div className="shop-item">
              <div
                className="text-left"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="shop-item">
              <div
                className="text-left"
                style={{ backgroundImage: `url(${image2})` }}
              >
                <h1>20% Off</h1>
              </div>
            </div>
            <div className="shop-item">
              <div
                className="text-left"
                style={{ backgroundImage: `url(${image3})` }}
              >
                <h1>Summer Styles</h1>
              </div>
            </div>
            <div className="shop-item">
              <div
                className="text-left"
                style={{ backgroundImage: `url(${image4})` }}
              ></div>
            </div>
          </div>
        </section>
        <section className="container content-section">
          <div className="selection">
            <Link to="/shopNew">
              <span className="cart-item cart-header cart-column">Tops</span>
            </Link>
            <Link to="/shopNew">
              <span className="cart-item cart-header cart-column">Bottoms</span>
            </Link>
            <Link to="/shopNew">
              <span className="cart-price cart-header cart-column">
                Dresses
              </span>
            </Link>
          </div>
        </section>
      </section>
      <br></br>
      <nav class="navbar fixed-bottom navbar-light bg-light">
        Copyright © 2020 C L O S E T S E V E N
      </nav>
    </div>
  );
}
export default Home;
