import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/products";
function Home() {
  const [navIcon, setNavIcon] = useState(false);
  const handleNav = () => {
    setNavIcon(!navIcon);
  };
  return (
    <>
      <Navbar handleNav={handleNav} navIcon={navIcon} />
      <Hero />
      <Products />
    </>
  );
}

export default Home;
