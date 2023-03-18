import { spiralArrow } from "../assets/AllImages";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const { data, isLoading } = useContext(UserContext);
  const allProduct = data?.data;
  const [likedItem, setLikedItems] = useState(false);
  // Logic for set Liked items
  const handledLikedItems = (id) => {
    setLikedItems(!likedItem);
  };
  // Logic for set Liked items

  return (
    <section className="mt-14 px-5 max-w-7xl mx-auto font-gilroyMedium">
      <div>
        <div className="flex justify-center items-center my-4 gap-6">
          <h2 className="text-3xl md:text-5xl font-gilroyBold">
            <span className="span">Exclusive</span> Products
          </h2>
          <div>
            <img
              src={spiralArrow}
              alt=""
              className="h-10 w-10 -z-10 xl:w-20 xl:h-20"
            />
          </div>
        </div>
        <p className="font-gilroyMeduim text-center text-gray-400">
          Search for the latest articles and find amazing products to buy from
          our huge collection
        </p>
        {/* search Input */}
        <div className="relative w-full max-w-[500px] mx-auto mt-10">
          <FiSearch className="text-gray-300 text-2xl absolute left-5 top-[14px]" />
          <input
            type="text"
            className="bg-gray-100 h-14 w-full max-w-[500px] rounded font-gilroyRegular pl-16 outline-none focus:border-2 border-[#ffbdf0]"
            placeholder="Search Products by Category"
          />
          <button className="hidden sm:block bg-black text-white font-gilroyMedium h-12 w-[40%] absolute top-1 right-2 rounded">
            Explore Now
          </button>
          {/* Mobile buttton */}
          <button className="block sm:hidden bg-black text-white font-gilroyMedium h-12 w-[40%] absolute mt-5 right-0 rounded">
            Explore Now
          </button>
        </div>
      </div>
      <div className="grid px-5 mt-32 lg:mt-20 ">
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div className="animate-pulse rounded-md p-4" key={n}>
              <div className="rounded-md bg-slate-200 h-72 w-full "></div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="bg-slate-200 w-32 rounded-md h-5 mb-3"></p>
                  <p className="bg-slate-200 w-32 rounded-md h-3"></p>
                </div>
                <div className=" bg-slate-200 h-8 rounded-md w-24"></div>
              </div>
            </div>
          ))}
        {allProduct?.map((card) => {
          const idString = (id) => {
            return String(id).toLowerCase().split(" ").join("");
          };
          const rootId = idString(card.title);
          // Logic for Navigating to detailed items
          const handleDetails = () => {
            navigate(`product/${rootId}`, { state: { item: card } });
          };
          // Logic for Navigating to detailed items
          return (
            <div
              // to={`/product/${card._id}`}
              className="relative cursor-pointer"
              key={card._id}
              onClick={handleDetails}
            >
              <div className="overflow-hidden w-full">
                <img
                  src={card.image}
                  alt=""
                  className="h-96 w-full overflow-hidden object-cover rounded-md hover:scale-110 duration-500"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <p className="font-gilroyBold  text-lg mb-1">{card.title}</p>
                  <p className="text-gray-400 text-base">{card.category}</p>
                </div>
                <div className="btn px-7 h-10 flex justify-center items-center font-gilroyBold text-gray-600 rounded-md">
                  ${card.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
