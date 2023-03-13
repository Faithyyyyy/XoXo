import { useState, createContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home.jsx";
import { useAsync } from "./useQuery";
export const UserContext = createContext();

function App() {
  // logic for context
  // logic for mobile nav
  const { isLoading, data, error, isError, isFetching } = useAsync();
  console.log(data, isLoading, isFetching);
  return (
    <UserContext.Provider value={data?.data}>
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
    </UserContext.Provider>
  );
}

export default App;
