import { useFormik } from "formik";
import { basicSchema } from "../Schema/validation";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const customId = "custom-id-yes";

  const onSubmit = (actions) => {
    // e.preventDefault();
    toast.success(
      `Your message has been succesfully sent. We will get back to you soonest`,
      {
        toastId: customId,
      }
    );
    actions.resetForm();
  };
  const { values, handleChange, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <section
      className="px-5 xl:px-0 max-w-7xl mx-auto font-gilroyMedium mt-20"
      data-aos="fade"
    >
      <form onSubmit={handleSubmit} className="mt-10 max-w-[700px] mx-auto">
        <h2 className="font-gilroyMedium text-3xl text-center mb-12">
          Contact Us
        </h2>

        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <div className="sm:grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#f289ff] focus:outline-none focus:ring-0 ${
                errors.name ? "border-red-500" : "border-gray-500"
              }`}
              placeholder=" "
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched && (
              <p className="text-red-500 text-sm">{errors.name}*</p>
            )}
            <label className="absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f289ff] peer-focus:dark:text-[#f289ff] ">
              Your name
            </label>
          </div>
          <div className="relative z-0 mt-10 sm:mt-0">
            <input
              type="text"
              name="email"
              className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#f289ff] focus:outline-none focus:ring-0 ${
                errors.email ? "border-red-500" : "border-gray-500"
              }`}
              placeholder=" "
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}*</p>
            )}
            <label className="absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f289ff] peer-focus:dark:text-[#f289ff]">
              Your email
            </label>
          </div>
          <div className="relative z-0  mt-10 col-span-2">
            <textarea
              name="message"
              rows="5"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#f289ff] focus:outline-none focus:ring-0"
              placeholder=" "
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}*</p>
            )}
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f289ff] peer-focus:dark:text-[#f289ff]">
              Your message
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 rounded-md bg-black px-10 py-4 text-white"
        >
          Send Message
        </button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default ContactUs;
