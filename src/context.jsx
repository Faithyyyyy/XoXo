import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Auth/Firebase";

export const AppContext = createContext({
  items: [],
  addToCart: () => {},
  // Authuser: Authuser,
  checkProductExistence: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  incrementQty: () => {},
  decrementQty: () => {},
  logout: () => {},
  //   getTotalCost: () => {},
});

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [Authuser, SetAuthUser] = useState("");

  const decrementQty = (id) => {
    cartProducts.find((ite) => {
      if (ite.id === id) {
        setCartProducts([
          ...cartProducts,
          {
            ...ite,
            quantity: ite.quantity === 1 ? (ite.quantity = 1) : ite.quantity--,
          },
        ]);
      }
    });
  };

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => id === product.id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const checkProductExistence = (id) => {
    const productExist = cartProducts.find((x) => x.id === id);
    return productExist;
  };

  const AddtoCart = (id, price, img, title, qty) => {
    const quantity = getProductQuantity(id);
    const exist = checkProductExistence(id);
    if (!exist) {
      if (quantity === 0) {
        return setCartProducts([
          ...cartProducts,
          { id: id, price: price, image: img, quantity: qty, title: title },
        ]);
      } else {
        return cartProducts.map((product) => {
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        });
      }
    }
  };

  const incrementQty = (id) => {
    const prodt = cartProducts.find((pr) => {
      return id === pr.id;
    });
    if (prodt) {
      return prodt.quantity++;
    }
  };

  const deleteFromCart = () => {
    setCartProducts([]);
  };

  const removeOneFromCart = (id) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => {
        return cartProduct.id !== id;
      })
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetAuthUser(user);
      } else {
        SetAuthUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AppContext.Provider
      value={{
        items: cartProducts,
        AddtoCart,
        decrementQty,
        checkProductExistence,
        deleteFromCart,
        removeOneFromCart,
        incrementQty,
        Authuser: Authuser,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
