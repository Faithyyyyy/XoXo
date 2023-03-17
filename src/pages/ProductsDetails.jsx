import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductDetails() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { increaseQty, decreaseQty, AddtoCart, items } = useContext(AppContext);
  const { data, isLoading } = useContext(UserContext);
  let [baseQty, setBaseQty] = useState(1);

  const allProduct = data?.data;

  const location = useLocation();
  const singleData = location.state.item;
  const customId = "custom-id-yes";
  return (
    <div
      className="px-5 max-w-7xl mt-16 mx-auto xl:px-0 font-gilroyRegular "
      data-aos="fade"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <img
          src={singleData.image}
          alt=""
          className="rounded-sm sm:max-w-[400px]"
        />
        <div>
          <h2 className="font-gilroyBold text-3xl mb-6 sm:text-4xl">
            {singleData.title}
          </h2>
          <p className="text-gray-500 text-base line-through inline-block mr-5">
            ${singleData.oldPrice}{" "}
          </p>
          <span className="  text-black text-2xl md:text-3xl font-gilroyMedium">
            ${singleData.price}
          </span>

          <p className="mt-10 font-gilroyMedium max-w-3xl text-xl text-gray-500">
            {singleData.description}
          </p>
          <div className="flex  md:flex-row flex-col mt-16 gap-5 mb-8 lg:mb-0">
            <div className="border border-gray-300  flex gap-8 items-center max-w-[250px] h-12 px-4">
              <p className="font-gilroyMedium text-xl text-gray-400">
                Quantity
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-6  text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <p>{baseQty}</p>
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 10 ? (baseQty = 10) : baseQty + 1)
                  }
                  className="border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                AddtoCart(
                  singleData._id,
                  singleData.price,
                  singleData.image,
                  singleData.title,
                  baseQty
                ) &
                toast.success(`${singleData.title} is added to cart`, {
                  toastId: customId,
                })
              }
              className={`h-12 px-8 rounded-sm text-lg bg-black text-white ${
                items.find((data) => data.id === singleData._id)
                  ? " pointer-events-none opacity-30"
                  : " "
              }`}
            >
              Add to Cart
            </button>
          </div>
          <p className="mt-10 mb-8 hidden lg:block text-gray-500">
            Category: {singleData.category}
          </p>
          <Link to="/" className="font-gilroyBold underline pt-10 text-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ProductDetails;
