import cartBg from "../assets/cartBg.jpg";
import CartItems from "../components/CartItems";
import { AppContext } from "../context";
import { useContext } from "react";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
function Cart() {
  const { deleteFromCart, items } = useContext(AppContext);
  if (items.length < 1) {
    return <EmptyCart />;
  }

  return (
    <div className="font-gilroyRegular max-w-7xl mx-auto lg:mt-16">
      {/* <img src={cartBg} alt="" className="h-[200px] w-full mb-10" /> */}
      <h2 className="font-gilroyBold text-lg lg:text-2xl mb-16 px-5 xl:px-0 text-center">
        Shopping cart
      </h2>
      <div className=" ">
        <div className="flex flex-col gap-9 items-center xl:items-start justify-center xl:flex-row  xl:justify-between">
          <CartItems />
          {/* <div className="w-full max-w-[470px] xl:max-w-[350px] mx-auto lg:mx-0  px-5 xl:px-0">
            <h2 className="font-gilroyBold text-lg mb-5">Cart Totals</h2>
            <p className="font-gilroyMeduim ">
              Subtotal: <span className="font-gilroyBold ml-5">$123.09</span>
            </p>
            <div className="flex gap-5 my-3">
              <p>Shipping: </p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <hr />
            <div className="flex justify-between mt-5">
              <p>Total:</p>
              <p>$123.09</p>
            </div>
            <button className="bg-black w-full text-white py-3 rounded mt-10">
              Proceed to Checkout
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
