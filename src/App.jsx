import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home.jsx";
import { useAsync } from "./useQuery";

function App() {
  // logic for mobile nav

  // logic for mobile nav
  const { isLoading, data, error, isError, isFetching } = useAsync();
  console.log(data, isLoading, isFetching);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
