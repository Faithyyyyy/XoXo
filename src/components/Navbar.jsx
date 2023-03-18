import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Navbar() {
  const [closeNavbar, setcloseNavbar] = useState(false);
  const [errorBoundary, setErrorBoundary] = useState(false);
  const closeNav = () => {
    closeNav(true);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const { items, Authuser, logout } = useContext(AppContext);
  // console.log(items.length);
  const [navIcon, setNavIcon] = useState(false);
  const handleNav = () => {
    setNavIcon(!navIcon);
  };
  const handleLogout = () => {
    try {
      logout();
      // closeNav();
    } catch (error) {
      setErrorBoundary(true);
    }
  };
  return (
    <header className="pt-10 px-5 max-w-7xl xl:px-0 mx-auto z-50">
      {/* <!-- component --> */}
      <nav className=" items-center relative justify-between bg-white  py-6 w-full hidden md:flex">
        <div className="flex gap-28 items-center">
          <div>
            <span className="font-eagle text-black cursor-pointer text-2xl">
              Xoxo.
            </span>
          </div>
          <ul
            id="drawer"
            role="menu"
            className="sm:gap-10 md:gap-16  hidden md:flex  cursor-pointer    font-gilroyRegular "
          >
            <li className="text-lg text-black  cursor-pointer">
              <NavLink to="/" className="nav font-gilroyMedium">
                Home
              </NavLink>
            </li>
            <li className="text-lg  cursor-pointer">
              <NavLink to="/about" className="text-black nav font-gilroyMedium">
                About
              </NavLink>
            </li>
            <li className="text-lg  ">
              <NavLink
                to="/contact"
                className="text-black nav font-gilroyMedium"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="text-black text-xl lg:text-[28px]" />
            </Link>
            {items.length > 0 && (
              <div className="bg-red-500 font-gilroyRegular p-2 w-4 h-4 text-[12px] text-white flex items-center justify-center -top-2 -right-2 rounded-full absolute">
                {items.length}
              </div>
            )}
          </div>
          {Authuser ? (
            <button
              onClick={handleLogout}
              className=" cursor-pointer uppercase font-gilroyMedium"
            >
              logout
            </button>
          ) : (
            <Link
              to="/login"
              className=" cursor-pointer uppercase font-gilroyMedium"
            >
              login
            </Link>
          )}

          <Link
            to="/login"
            className=" cursor-pointer uppercase font-gilroyMedium"
          ></Link>
        </div>
      </nav>
      {/* mobile render */}

      <div className="flex justify-between items-center px-4 md:hidden mb-16 delay-150 ">
        <div>
          <span className="font-eagle text-black cursor-pointer text-2xl">
            Xoxo.
          </span>
        </div>
        <div className="flex gap-9 items-center justify-center">
          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="text-black text-xl lg:text-2xl" />
            </Link>
            {items.length > 0 && (
              <div className="bg-red-500 font-gilroyRegular p-2 w-4 h-4 text-[12px] text-white flex items-center justify-center -top-2 -right-2 rounded-full absolute">
                {items.length}
              </div>
            )}
          </div>
          <div
            className={`w-6 h-8  relative ${navIcon ? "" : "top-2"} `}
            onClick={handleNav}
          >
            <span
              className={`w-full bg-[#5c5c70] h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "top-[60%]" : "top-0"
              } ${navIcon ? "-rotate-45" : ""} `}
            ></span>
            <span
              className={` bg-[#5c5c70] h-[3px] rounded-md block absolute top-[30%] transition duration-500 ${
                navIcon ? "w-0" : "w-[50%]"
              }`}
            ></span>
            <span
              className={`w-full bg-[#5c5c70] h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "rotate-45" : ""
              } top-[60%] `}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={`h-full bg-white w-[80%] px-8 absolute top-0 left-0 py-20 z-10 md:hidden  ${
          navIcon ? "block" : "hidden"
        } mobilNav`}
        data-aos="slide-right"
      >
        <nav className="nav flex flex-col gap-12 text-lg">
          <NavLink to="/" className="font-gilroyMedium " onClick={closeNav}>
            Home
          </NavLink>
          <Link to="/about" className="font-gilroyMedium" onClick={closeNav}>
            About us
          </Link>
          <Link to="/contact" className="font-gilroyMedium" onClick={closeNav}>
            Contact Us
          </Link>
          {Authuser ? (
            <button
              onClick={handleLogout}
              className=" border-t pt-3 font-gilroyMedium"
            >
              logout
            </button>
          ) : (
            <Link to="/login" className="font-gilroyMedium" onClick={closeNav}>
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* mobile render */}
    </header>
  );
}

export default Navbar;
