import { createContext, useState } from "react";

export const AppContext = createContext({
  items: [],
  addToCart: () => {},

  checkProductExistence: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  incrementQty: () => {},
  //   getTotalCost: () => {},
});

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const incrementQty = (id) => {
    const prodt = cartProducts.find((cartProduct) => {
      id === cartProduct.id;
    });
    if (prodt) {
      prodt.quantity++;
    }
  };

  // const decrementQty = (id) => {
  //   setCartProducts((cartProduct) =>
  //     cartProduct.map((item) =>
  //       id === item.id
  //         ? {
  //             ...item,
  //             qty: item.qty - (item.qty > 1 ? 1 : 0),
  //           }
  //         : item
  //     )
  //   );
  // };

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
