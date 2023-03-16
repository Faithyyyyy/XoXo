import { AppContext } from "../context";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function CartItems() {
  const {
    decreaseQty,

    items,
    deleteFromCart,
    removeOneFromCart,
    incrementQty,
  } = useContext(AppContext);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="px-5 xl:px-0">
      {items.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className="max-w-[400px] mx-auto lg:flex gap-14 items-center lg:max-w-[800px] mb-8"
              data-aos="fade"
            >
              <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
                <MdDelete
                  className="mb-4 text-2xl lg:mb-0 lg:mr-3 cursor-pointer"
                  onClick={() => removeOneFromCart(item.id)}
                />
                <div className="lg:h-32 lg:w-32 rounded ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full rounded object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 font-gilroyMedium lg:mt-0 lg:w-48">
                {item.title}
              </p>
              {/* <p className="hidden lg:block">{item.price}</p> */}
              <div className="flex justify-between items-center my-7 lg:my-0 lg:justify-center lg:gap-10">
                <div className="border border-gray-300  flex gap-8 items-center max-w-[250px] h-12 px-4">
                  <p className="font-gilroyRegular text-base text-gray-400">
                    Quantity
                  </p>

                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      onClick={() => decreaseQty()}
                      className="border h-6  text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="">${item.price}</p>
              </div>
            </div>
          </>
        );
      })}
      <div className="">
        <button
          className="bg-black text-white rounded py-3 w-[80%] max-w-[200px] block mt-10 mb-8"
          onClick={() => {
            deleteFromCart();
          }}
        >
          Clear Cart
        </button>
        <Link to="/" className="font-gilroyBold underline pt-10 text-lg">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default CartItems;
