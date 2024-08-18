import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [Loginbtn, setLoginbtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
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
