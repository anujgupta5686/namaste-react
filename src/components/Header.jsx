import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Cart</Link></li>
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