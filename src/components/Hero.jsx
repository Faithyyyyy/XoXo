import { spiralArrow } from "../assets/AllImages";
import { HeroImg } from "../assets/AllImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Button from "./button";
function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section className="my-16 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col gap-7 md:flex-row items-center justify-between">
        {/* First Section */}
        <div
          className="font-gilroyRegular max-w-[600px] xl:max-w-[700px]"
          data-aos="fade-in"
        >
          <p className="text-gray-400 text-left">
            Absolutely Hot Collections🔥
          </p>
          <div className="flex flex-col gap-6 relative">
            <h1 className="text-3xl sm:text-5xl xl:text-7xl leading-[1.2] my-6 font-gilroyBold text-left ">
              The Best Place To Find And Buy Amazing{" "}
              <span className="span">Products</span>
            </h1>
            <img
              src={spiralArrow}
              alt=""
              className="h-10 w-10 self-end absolute right-12 bottom-0 -z-10 xl:w-20 xl:h-20"
            />
          </div>
          <p className="text-gray-400 text-left lg:text-xl">
            Welcome to our clothing store, where fashion meets style!
            <br /> Our mission is to provide you with the latest trends and
            styles that will keep you looking and feeling your best.
          </p>
          <div className="flex flex-col gap-5 mt-10 sm:flex-row lg:max-w-[500px]">
            <Button>Explore Now</Button>
            <button className="wrapper rounded bg-white w-full sm:w-[40%]">
              Request A Demo
            </button>
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
