import Modal from "react-modal";
import css from "./DeleteModal.module.css";
import { useEffect } from "react";

const DeleteModal = ({ isOpen, onClose, onDelete, message }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onReqyestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <p>{message}</p>
        <div className={css.modalActions}>
          <button className={css.deleteBtn} onClick={onDelete}>
            Delete
          </button>
          <button className={css.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
