import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import clsx from "clsx";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showInputName, setShowInputName] = useState(false);
  const [showInputNumber, setShowInputNumber] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleOnChangeName() {
    setShowInputName(true);
  }
  function handleOnChangeNumber() {
    setShowInputNumber(true);
  }
  function handleOnCloseChange() {
    setShowInputName(false);
    setShowInputNumber(false);
  }
  const handleDeleteContact = () => dispatch(deleteContact(id));

  const handleUpdateContact = (event) => {
    event.preventDefault();

    const newContact = {
      id: id,
      name: showInputName ? event.target.elements.name.value : name,
      number: showInputNumber ? event.target.elements.number.value : number,
    };
    console.log(newContact);
    dispatch(updateContact(newContact));
    handleOnCloseChange();
  };

  return (
    <>
      <div className={css.wrapContact}>
        <form className={css.contactDiscription} onSubmit={handleUpdateContact}>
          <div className={css.wrapName}>
            <IoPersonSharp className={css.icon} size="14" />
            {showInputName ? (
              <input
                className={css.input}
                name="name"
                type="text"
                defaultValue={name}
              />
            ) : (
              name
            )}
            {showInputName ? (
              <button
                className={css.btnClose}
                onClick={handleOnCloseChange}
                type="button"
              >
                x
              </button>
            ) : (
              <button
                className={css.btnChange}
                onClick={handleOnChangeName}
                type="button"
              >
                <FaPen className={css.iconChangeName} size="14" />
              </button>
            )}
          </div>

          <div className={css.wrapNumber}>
            <FaPhone className={css.icon} size="14" />
            {showInputNumber ? (
              <input
                className={css.input}
                name="number"
                type="text"
                defaultValue={number}
              />
            ) : (
              number
            )}
            {showInputNumber ? (
              <button
                className={css.btnClose}
                onClick={handleOnCloseChange}
                type="button"
              >
                x
              </button>
            ) : (
              <button
                className={css.btnChange}
                onClick={handleOnChangeNumber}
                type="button"
              >
                <FaPen className={css.iconChangeNumber} size="14" />
              </button>
            )}
          </div>
          {/* {(showInputName || showInputNumber) && (
            <button className={clsx(css.button, css.buttonSave)} type="submit">
              Save
            </button>
          )} */}
        </form>
        <button className={css.button} type="button" onClick={openModal}>
          Delete
        </button>
      </div>
      <DeleteModal
        onDelete={handleDeleteContact}
        isOpen={isOpen}
        onCloseModal={closeModal}
      />
    </>
  );
}
