import React from "react";
import { Link } from "react-router-dom";
import aboutphoto from "../../images/aboutphoto.jpg";
import { ReactComponent as Logo } from "../../images/welcomepage/bags.svg";

export default function About(props) {
  return (
    <section>
      <header class="main-header">
        <nav className="navbar bg-dark navbar-dark">
          <div className="welcome">
            <Link className="text-light" to="/home">
              Home
            </Link>
          </div>

          <div className="text-light"> C L O S E T S E V E N</div>

          <div className="welcome">
            <Link className="text-light" to="/login">
              Logout
            </Link>
          </div>

          <div className="welcome">
            Checkout<span ml-500> </span>
            <Link to="/ShopList">
              <Logo className="bags" />
            </Link>
          </div>
        </nav>
      </header>
      <body>
        <div class="photo">
          <img src={aboutphoto} width="300px" height="400px" />
        </div>
      </body>
      <footer>
        <div className="edit-text">
          <p>
            Closet Seven was created to show the designers sense of style. To
            share with you her take on what it means to be fashionable. She
            hopes to connect with as many women as possible through fashion.
            Closet Seven was created to show the designers sense of style. To
            share with you her take on what it means to be fashionable. She
            hopes to connect with as many women as possible through
            fashion.Closet Seven was created to show the designers sense of
            style. To share with you her take on what it means to be
            fashionable. She hopes to connect with as many women as possible
            through fashion.
          </p>
        </div>
      </footer>
    </section>
  );
}
