import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters")
    .required("Password is required"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.formLabel}>
          <span>Name</span>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          <span>Email</span>
          <Field
            className={css.formInput}
            type="tel"
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

export default RegistrationForm;
