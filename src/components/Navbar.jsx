import React, { useState } from "react";
import logo from "../assets/easyHealsLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center shadow-lg px-5 w-full">
      <div className="w-32 h-10 mt-3">
        <img src={logo} />
      </div>
      <div className="sm:hidden" onClick={handleMenu}>
        <RxHamburgerMenu />
      </div>
      {showMenu && (
        <div className="flex flex-col absolute top-12 left-0 bg-white w-full p-5 shadow-lg">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Hospitals</li>
            <li>
              <button>Search</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
