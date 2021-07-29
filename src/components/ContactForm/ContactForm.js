import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import LoaderComponent from "../LoaderComponent";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === "" || number.trim() === "";
  };

  const checkValidNumber = (number) => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      alert(`🤔 ${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(number)) {
      alert(`🤔 ${number} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      alert("😱 Enter the contact's name and number phone!");
    } else if (checkValidNumber(number)) {
      alert("💩 Enter the correct number phone!");
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Jason Statham"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            placeholder="123-45-67"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        {!isLoading && (
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        )}
        {isLoading && <LoaderComponent />}
      </form>
    </>
  );
}

export default ContactForm;
