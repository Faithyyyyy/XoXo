import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid Email").required("Required"),
  message: yup.string().required("Required"),
});
