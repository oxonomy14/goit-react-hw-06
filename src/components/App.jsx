import reactLogo from "../assets/react.svg";
import "./App.css";

import { nanoid } from "nanoid";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filterSlice";

const App = () => {
  const dispatch = useDispatch();
  const handleAddContact = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    dispatch(addContact(newContact));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleAddContact} />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
