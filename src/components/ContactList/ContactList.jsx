import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const userContacts = useSelector(selectContacts) || [];
  const filterValue = useSelector(selectNameFilter) || "";
  const filteredContact = userContacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(filterValue.toLowerCase())
  );

  console.log("Filtered Contacts: ", filteredContact);

  console.log(useSelector((state) => state.contacts));

  console.log("userContacts: ", userContacts);
  console.log("filterValue: ", filterValue);

  return (
    <ul className={css.contactListContainer}>
      {filteredContact.map(({ id, ...contact }) => (
        <li key={id} className={css.contactContainer}>
          <Contact id={id} {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
