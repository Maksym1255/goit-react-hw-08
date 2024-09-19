import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";

const phoneRegExp = /^[+][0-9]{3} [(][0-9]{2}[)] [0-9]{3} [0-9]{2} [0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "+XXX XX XXX XX XX")
    .required("Required"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully🎉");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
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
          <span>Number</span>
          <Field name="number">
            {({ field }) => (
              <InputMask
                {...field}
                mask="+999 (99) 999 99 99"
                maskChar={null}
                className={css.formInput}
                type="tel"
                placeholder="+XXX XX XXX XX XX"
              />
            )}
          </Field>

          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
