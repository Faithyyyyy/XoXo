import { about_xoxo } from "../assets/AllImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div>
      <main className="mt-12 px-5 max-w-7xl mx-auto" data-aos="fade">
        <h2 className="font-gilroyMedium text-3xl text-center">About Us</h2>
        <p
          className="font-gilroyRegular  md:text-xl mt-9 text-center"
          data-aos="fade"
        >
          XOXO IS… WHERE FUN MEETS FASHION & CLASS AT AFFORDABLE PRICES!
        </p>
        <div className="mt-20 flex flex-col lg:flex-row bg-[#f289ff] bg-opacity-10 w-full rounded px-9 py-2 gap-10 items-center">
          <img
            src={about_xoxo}
            alt="about us"
            className="w-full  max-w-[500px]"
            data-aos="zoom-in"
          />
          <div>
            <h5 className="text-3xl font-gilroyMedium mb-6">
              OUR LITTLE <br /> N I C H E
            </h5>
            <p className="font-gilroyRegular lg:text-left">
              Welcome to Xoxo, where fashion meets quality and affordability.
              Our brand was founded in 2020 with the aim of providing our
              customers with the latest fashion trends at accessible prices.
              <br />
              <br />
              We believe that fashion should be fun, inclusive, and empowering.
              Our team is dedicated to creating a positive shopping experience
              for our customers, whether you're browsing our website or visiting
              us in-store. <br />
            </p>
          </div>
        </div>
        {/* Our Mission */}
        <div
          className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center"
          data-aos="fade-right"
        >
          <div className="wrapper max-w-[400px]">
            <p className="font-gilroyRegular">
              <span className="font-gilroyBold">Our Mission</span> is to make a
              difference through our branding by staying ahead of the fashion
              trends, defining style and giving customers what they want.
            </p>
          </div>
          <div className="wrapper max-w-[400px]" data-aos="fade-left">
            <p className="font-gilroyRegular">
              <span className="font-gilroyBold">Our Vision</span> is to change
              the way our society connects with the fashion industry by
              providing our customers with products that are ethically and
              responsibly sourced.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
