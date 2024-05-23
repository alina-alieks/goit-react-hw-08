import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactDiscription}>
        <p>
          <IoPersonSharp className={css.icon} size="14" />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} size="14" />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={openModal}>
        Delete
      </button>
      <DeleteModal
        onDelete={handleDeleteContact}
        isOpen={isOpen}
        onCloseModal={closeModal}
      />
    </>
  );
}
