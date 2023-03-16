import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import { AppProvider } from "./context";
import AboutUs from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductsDetails";
import { useAsync } from "./useQuery";

export const UserContext = createContext();
AppProvider;
function App() {
  const [cart, setCart] = useState([]);

  // logic for context
  // logic for mobile nav
  const { isLoading, data, error, isError, isFetching } = useAsync();
  return (
    <UserContext.Provider value={{ data, isLoading, cart, setCart }}>
      <AppProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </AppProvider>
    </UserContext.Provider>
  );
}

export default App;
