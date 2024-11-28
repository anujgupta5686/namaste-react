import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  const [btnReactName, setBtnReactName] = useState(false);
  const {loggedInUser} =useContext(UserContext);
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between md:px-6 lg:px-10">
      {/* Logo Section */}
      <div className="">
        <Link to={"/"}>
        <img
          className="w-28 md:w-32 lg:w-36"
          src={LOGO_URL}
          alt="Logo"
          loading="lazy"
        />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="">
        <ul className="flex flex-wrap items-center gap-4 text-gray-700 text-sm md:text-base">
          <li className="flex items-center gap-1 text-sm md:text-base">
            <span>Online Status:</span>
            <span className="text-lg">{onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Grocery
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
              onClick={() => setBtnReactName(!btnReactName)}
            >
              {btnReactName ? "Sign Up" : "Sign In"}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
