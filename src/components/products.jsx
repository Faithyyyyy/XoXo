import { spiralArrow } from "../assets/AllImages";
import { FiSearch } from "react-icons/fi";
function Products() {
  return (
    <section className="mt-14 px-5">
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
    </section>
  );
}

export default Products;
