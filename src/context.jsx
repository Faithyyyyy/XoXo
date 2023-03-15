import { createContext, useState } from "react";

export const AppContext = createContext({
  items: [],
  addToCart: () => {},
  decreaseQty: () => {},
  increaseQty: () => {},
  checkProductExistence: () => {},
  //   baseQty,

  //   removeOneFromCart: () => {},
  //   deleteFromCart: () => {},
  //   getTotalCost: () => {},
});

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  let [baseQty, setBaseQty] = useState(1);
  const decreaseQty = () => {
    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1);
  };

  const increaseQty = () => {
    setBaseQty(baseQty === 10 ? (baseQty = 10) : baseQty + 1);
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

  const AddtoCart = (id, price, img) => {
    const quantity = getProductQuantity(id);
    const exist = checkProductExistence(id);
    if (!exist) {
      if (quantity === 0) {
        return setCartProducts([
          ...cartProducts,
          { id: id, price: price, image: img, qty: baseQty },
        ]);
      } else {
        return cartProducts.map((product) => {
          product.id === id
            ? { ...product, quantity: product.quantity + baseQty }
            : product;
        });
      }
    }
  };

  //   ContextValue = {
  //     items: cartProducts,
  //     baseQty,
  //     AddtoCart,
  //     increaseQty,
  //     decreaseQty,
  //     // removeOneFromCart,
  //     // deleteFromCart,
  //     // getTotalCost,
  //   };
  return (
    <AppContext.Provider
      value={{
        items: cartProducts,
        baseQty,
        AddtoCart,
        increaseQty,
        decreaseQty,
        checkProductExistence,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
