import { createContext, useState } from "react";

export const AppContext = createContext({
  items: [],
  addToCart: () => {},

  checkProductExistence: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  incrementQty: () => {},
  decrementQty: () => {},
  //   getTotalCost: () => {},
});

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const decrementQty = (id) => {
    // cartProducts.map((ite) => {
    //   if (ite.id === id) {
    //     ite.quantity++;
    //   }
    // });

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
