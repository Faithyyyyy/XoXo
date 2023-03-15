import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context";
function ProductDetails() {
  const { increaseQty, baseQty, decreaseQty, AddtoCart, items } =
    useContext(AppContext);

  const location = useLocation();
  const singleData = location.state.item;

  return (
    <div className="px-5 max-w-7xl mt-16 mx-auto xl:px-0 font-gilroyRegular">
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
                  onClick={() => decreaseQty()}
                  className="border h-6  text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                {baseQty}
                <button
                  onClick={() => increaseQty()}
                  className="border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                AddtoCart(singleData._id, singleData.price, singleData.image) &
                toast.success(`${singleData.title} is added to cart`) &
                items.find((x = x.id === singleData._id))
                  ? toast.success(
                      `${singleData.title} is already in the cart. Please rest!`
                    )
                  : toast.success(
                      `${singleData.title} is already in the cart. Please rest!`
                    )
              }
              className={`h-12 px-8 rounded-sm text-lg bg-black text-white`}
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
