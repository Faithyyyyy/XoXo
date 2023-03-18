import { AppContext } from "../context";
import { MdClose } from "react-icons/md";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CartItems() {
  const { decrementQty, items, removeOneFromCart, incrementQty } =
    useContext(AppContext);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  window.localStorage.setItem("items", JSON.stringify(items));
  const storedItem = JSON.parse(localStorage.getItem("items"));
  return (
    <div className="px-5 xl:px-0 mt-11">
      {storedItem.map((item) => {
        return (
          <div
            key={item.id}
            className=" mx-auto md:flex gap-12 lg:gap-24 items-center justify-center max-w-[400px] border-b border-b-gray-400 md:max-w-[900px] py-8"
            data-aos="fade"
          >
            <div className="flex flex-row gap-3  md:items-center justify-between">
              <MdClose
                className="mb-4 text-[28px] md:mb-0 hidden cursor-pointer md:block"
                onClick={() => removeOneFromCart(item.id)}
              />
              <div className="h-48 md:h-44 md:w-44 rounded ">
                <img
                  src={item.image}
                  alt=""
                  className=" h-full  rounded object-contain  "
                />
              </div>
              <MdClose
                className="mb-4 text-[28px] md:mb-0 md:hidden cursor-pointer "
                onClick={() => removeOneFromCart(item.id)}
              />
            </div>
            <p className="mt-3 font-gilroyMedium text-xl lg:mt-0  w-48">
              {item.title}
            </p>
            <p className="hidden lg:block">${item.price}</p>
            <div className="flex items-center my-7 md:my-0 md:justify-center gap-10">
              <div className=" flex gap-3 items-center max-w-[250px] h-12 px-4">
                <p className="font-gilroyRegular text-base text-gray-400">
                  Quantity:
                </p>

                <div className="flex items-center gap-4 text-sm font-semibold">
                  {item.quantity}
                </div>
              </div>
              <p className="font-gilroyMedium text-xl">
                ${item.quantity * item.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
