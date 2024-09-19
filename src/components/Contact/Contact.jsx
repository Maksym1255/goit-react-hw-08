import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${name}" has been deleted successfully😫`);
      })
      .catch(() => {
        toast.error(`Failed to delete contact "${name}".`);
      });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        onClick={openModal}
        type="button"
        className={css.contactBtnDelete}
      >
        Delete
      </button>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={() => {
          handleSubmit();
          closeModal();
        }}
        message={`Are you sure you want to delete ${name} 😥`}
      />
    </div>
  );
};

export default Contact;
