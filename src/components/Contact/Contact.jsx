import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${name}" has been deleted 🎉`);
      })
      .catch(() => {
        toast.error(`Failed to delete contact "${name}".`);
      });
  };

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
        onClick={handleSubmit}
        type="button"
        className={css.contactBtnDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
