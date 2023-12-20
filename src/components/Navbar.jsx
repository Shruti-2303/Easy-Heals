import { useState } from "react";
import logo from "../assets/easyHealsLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center shadow-md px-5 w-full sm:px-10">
      <div className="w-32 h-10 mt-3 my-2 flex items-center">
        <img src={logo} />
      </div>
      <div className="hidden sm:flex gap-10 text-sm">
        <span>About Us</span>
        <span>Services</span>
        <span>Doctors</span>
        <span>Hospitals</span>
        <span>
          <button>Search</button>
        </span>
      </div>
      <div className="sm:hidden" onClick={handleMenu}>
        <RxHamburgerMenu />
      </div>
      {showMenu && (
        <div className="flex flex-col absolute top-12 left-0 bg-white w-full p-5 shadow-lg">
          <span>About Us</span>
          <span>Services</span>
          <span>Doctors</span>
          <span>Hospitals</span>
          <span>
            <button>Search</button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
