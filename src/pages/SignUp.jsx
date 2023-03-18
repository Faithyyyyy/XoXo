import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "../Auth/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const scheme = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid Email").required("Required"),
  password: yup
    .string()
    .min(6)
    .required("Required with a minimum of 6 characters"),
});

function Signup() {
  const navigate = useNavigate();
  const [errorBoundary, setErrorBoundary] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const onSubmit = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((usecredentials) => {
        navigate("/");
      })
      .catch((error) => setErrorBoundary(true));
  };

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: scheme,
    onSubmit,
  });
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0" data-aos="fade">
      <h2 className="font-gilroyMedium text-3xl text-center mt-16">SIGN UP</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-[700px] mx-auto font-gilroyMedium"
      >
        {errorBoundary && (
          <p
            className=" text-center  mt-10 text-red-500 text-sm"
            data-aos="fade"
          >
            Input the right Information
          </p>
        )}
        <div className="mb-10">
          <label>Full name</label>
          <input
            type="text"
            name="name"
            className="w-full h-14 mt-2 focus:border-[#f289ff] focus:outline-none focus:ring-0 rounded pl-4 border border-gray-300"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}*</p>
          )}
        </div>

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
        <button
          type="submit"
          className={`uppercase bg-black text-white px-8 py-2 mt-14 ${
            loading ? "bg-opacity-50" : ""
          }`}
        >
          {" "}
          sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
