import { MdClose } from "react-icons/md";
import CartItems from "../components/CartItems";
import { AppContext } from "../context";
import { useContext, useState, useEffect } from "react";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
function Cart() {
  const { deleteFromCart, items } = useContext(AppContext);
  const [totalAmount, setTotalAmount] = useState("");
  let shipping = 10.05;

  useEffect(() => {
    let totalPrice = 0;
    items.map((item) => {
      const price = (totalPrice += item.price * item.quantity);
      return price.toFixed(2);
    });
    setTotalAmount(totalPrice);
  }, [items]);

  if (items.length < 1) {
    return <EmptyCart />;
  }

  return (
    <div className="font-gilroyRegular max-w-7xl mx-auto mt-8 lg:mt-16">
      {/* <img src={cartBg} alt="" className="h-[200px] w-full mb-10" /> */}
      <div className="flex justify-between px-5 xl:px-0">
        <h2 className="font-gilroyBold text-lg lg:text-2xl">Shopping cart</h2>
        <MdClose
          className="mb-4 text-3xl md:mb-0  cursor-pointer "
          onClick={() => deleteFromCart()}
        />
      </div>
      <div className=" ">
        <CartItems />
        {/* total price */}
        <div className="flex flex-col gap-4 px-5 lg:px-0 lg:flex-row justify-between max-w-[400px]  md:max-w-[900px] mx-auto pt-10">
          {/* first part of the details */}
          <div className="lg:order-2   ">
            <div className="flex justify-between lg:gap-24 mb-3">
              <p className="font-gilroyMedium">Products in cart:</p>
              <span>
                {items.length}
                {"  "}items
              </span>
            </div>
            <div className="flex justify-between lg:mx-0 gap-10 mb-3">
              <p className="font-gilroyMedium">Shipping:</p>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between lg:mx-0 gap-10 ">
              <p className="font-gilroyMedium">Total:</p>
              <span>${totalAmount}</span>
            </div>
          </div>
          {/* second part of the details */}
          <div className="lg:order-1 flex flex-col gap-4 justify-center items-center md:items-start">
            <button className="bg-black px-8 py-4 rounded text-white w-full">
              Proceed to Checkout
            </button>
            <Link to="/" className="font-gilroyBold underline text-lg">
              Continue Shopping
            </Link>
          </div>
          {/* second part of the details */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
