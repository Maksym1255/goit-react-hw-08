import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactBlock}>
      <div className={css.contactInfo}>
        <h3>
          <BsPersonFill className={css.contactIconName} /> {name}
        </h3>
        <p>
          <BsTelephoneFill className={css.contactIconNumber} />
          <b> {number}</b>
        </p>
      </div>
      <button
        onClick={() => dispatch(apiDeleteContact(id))}
        type="button"
        className={css.contactBtnDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
