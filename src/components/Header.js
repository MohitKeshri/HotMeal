import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [Loginbtn, setLoginbtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              Loginbtn == "Login"
                ? setLoginbtn("Logout")
                : setLoginbtn("Login");
            }}
          >
            {Loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
