import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters")
    .required("Password is required"),
});

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {})
      .catch(() => {
        toast.error(`Invalid login or password`);
      });

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.formLabel}>
          <span>Email</span>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            placeholder="petro@gmail.com"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          <span>Password</span>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
