import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contactNumber: Yup.string()
    .matches(phoneRegExp, "XXX-XX-XX")
    .required("Required"),
});

const INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      ...values,
      id: nanoid(),
    };

    console.log("Adding contact:", contactObject);

    dispatch(addContact(contactObject));
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
            name="contactName"
            placeholder="Name"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="contactName"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          <span>Number</span>
          <Field
            className={css.formInput}
            type="tel"
            name="contactNumber"
            placeholder="XXX-XX-XX"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="contactNumber"
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
