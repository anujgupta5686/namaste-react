import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const[btnReactName,setBtnReactName]=useState(false);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo"
            loading="lazy"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              // Login Logic Here
              setBtnReactName(!btnReactName);
            }}>{btnReactName?"Login":"Logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;