import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/products";
function Home() {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}

export default Home;
