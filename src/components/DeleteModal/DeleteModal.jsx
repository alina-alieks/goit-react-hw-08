import css from "./DeleteModal.module.css";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function DeleteModal({ onDelete, isOpen, onCloseModal }) {
  return (
    <div className={css.wrapper}>
      <Modal
        isOpen={isOpen}
        onClose={onCloseModal}
        closeTimeoutMS={500}
        onRequestClose={onCloseModal}
        overlayClassName={css.overlayClassName}
        className={css.modal}
        ariaHideApp={false}
      >
        <button
          className={css.buttonClose}
          type="button"
          onClick={onCloseModal}
        >
          <IoCloseCircleOutline className={css.iconClose} />
        </button>
        <p className={css.text}>Are you sure to delete contact?</p>
        <div className={css.wrapperButton}>
          <button className={css.button} onClick={onDelete}>
            Delete
          </button>
          <button className={css.button} type="button" onClick={onCloseModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
