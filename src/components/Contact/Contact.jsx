import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onContactDelete }) => {
  return (
    <div className={css.contactBlock} id={id}>
      <div className={css.contactInfo}>
        <h3>
          <BsPersonFill className={css.contactIconName} /> {name}
        </h3>
        <p>
          <BsTelephoneFill className={css.contactIconNumber} /> <b>{number}</b>
        </p>
      </div>
      <button
        onClick={() => onContactDelete(id)}
        type="button"
        className={css.contactBtnDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
