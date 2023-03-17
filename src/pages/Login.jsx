import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const scheme = yup.object().shape({
  email: yup.string().email("Please enter a valid Email").required("Required"),
  password: yup.string().required("Required"),
});

const onSubmit = () => {
  console.log("submitted🎉");
};

function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: scheme,
    onSubmit,
  });
  console.log(errors);
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0" data-aos="fade">
      <h2 className="font-gilroyMedium text-3xl text-center mt-16">LOGIN</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-[700px] mx-auto font-gilroyMedium"
      >
        <div className="mb-10">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="w-full h-14 mt-2 focus:border-[#f289ff] focus:outline-none focus:ring-0 rounded pl-4 border border-gray-300"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}*</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="w-full h-14 mt-2 focus:border-[#f289ff] focus:outline-none focus:ring-0 rounded pl-4 border border-gray-300"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}*</p>
          )}
        </div>

        <div className="mt-14">
          <button
            type="submit"
            className="uppercase bg-black text-white px-8 py-2 "
          >
            {" "}
            login
          </button>
          <Link to="/signup" className="uppercase text-black ml-3 text-base">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
