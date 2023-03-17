import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function EmptyCart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div
      className="px-5 py-20 h-full flex items-center justify-center flex-col gap-10 max-w-2xl mx-auto leading-10"
      data-aos="fade"
    >
      <p className=" font-gilroyMedium text-center text-2xl lg:text-4xl">
        Your Cart is empty🙁.. <br /> <br />
        Please go back to the homepage to shop for an item...
      </p>
      <Link to="/" className=" bg-black text-white py-3 px-4 rounded text-lg">
        Go to Homepage
      </Link>
    </div>
  );
}

export default EmptyCart;
