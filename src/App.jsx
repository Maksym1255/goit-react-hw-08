import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const storageContact = () => {
    const contact = localStorage.getItem("userContact");
    return contact ? JSON.parse(contact) : initialContacts;
  };

  const [userContact, setUserContact] = useState(() => storageContact());
  const [filterValue, setFilterValue] = useState("");

  const onAddContact = (contact) => {
    const newContact = { ...contact, id: nanoid() };
    setUserContact([newContact, ...userContact]);
  };

  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const filteredContact = userContact.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onContactDelete = (contactId) => {
    setUserContact(userContact.filter((item) => item.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={onAddContact} />

      <SearchBox onChange={setFilterValue} filterValue={filterValue} />

      <ContactList list={filteredContact} onContactDelete={onContactDelete} />
    </>
  );
};

export default App;
