import { FiShoppingCart } from "react-icons/fi";
import fakeAvatar from "../assets/fakeAvatar.webp";
import { NavLink, Link } from "react-router-dom";

function Navbar({ navIcon, handleNav }) {
  return (
    <header>
      {/* <!-- component --> */}
      <nav class=" items-center relative justify-between bg-white  py-6 w-full hidden md:flex">
        <div className="flex gap-28 items-center">
          <div>
            <span className="font-eagle text-black cursor-pointer text-2xl">
              Xoxo.
            </span>
          </div>
          <ul
            id="drawer"
            role="menu"
            class="sm:gap-10 md:gap-16  hidden md:flex  cursor-pointer    font-gilroyRegular "
          >
            <li class="text-lg text-black cursor-pointer">
              <a href="#" class="">
                Home
              </a>
            </li>
            <li class="text-lg cursor-pointer">
              <a href="#" class="text-black">
                About
              </a>
            </li>
            <li class="text-lg text-white">
              <a href="#" class="text-black">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div class="flex gap-5 items-center justify-center">
          <FiShoppingCart className="text-black text-xl lg:text-2xl" />
          <div class="h-7 w-7 md:w-10 md:h-10 cursor-pointer">
            <img src={fakeAvatar} className="rounded-[50%] " alt="" />
          </div>
        </div>
      </nav>
      {/* mobile render */}

      <div className="flex justify-between items-center px-4 md:hidden mb-16 delay-150 z-50">
        <div>
          <span className="font-eagle text-black cursor-pointer text-2xl">
            Xoxo.
          </span>
        </div>
        <div class="flex gap-9 items-center justify-center">
          <FiShoppingCart className="text-black text-2xl" />
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
        className={`h-full bg-white w-[80%] px-8 absolute top-0 left-0 py-20 z-10   ${
          navIcon ? "block" : "hidden"
        } `}
      >
        <nav className="nav flex flex-col gap-12 text-lg">
          <NavLink to="/" className="font-gilroyRegular">
            Home
          </NavLink>
          <Link className="font-gilroyRegular">Blogs</Link>
          <Link className="font-gilroyRegular">About us</Link>
          <Link className="font-gilroyRegular">Login</Link>
        </nav>
      </div>
      {/* mobile render */}
    </header>
  );
}

export default Navbar;
