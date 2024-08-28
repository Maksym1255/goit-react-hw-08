import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, contactName, contactNumber }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  console.log("Contact: ", Contact);

  return (
    <div className={css.contactBlock} id={id}>
      <div className={css.contactInfo}>
        <h3>
          <BsPersonFill className={css.contactIconName} /> {contactName}
        </h3>
        <p>
          <BsTelephoneFill className={css.contactIconNumber} />
          <b>{contactNumber}</b>
        </p>
      </div>
      <button
        onClick={handleDelete}
        type="button"
        className={css.contactBtnDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
