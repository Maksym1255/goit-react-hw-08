import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContact } from "../../redux/filters/selectors";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContact);

  const sortedContacts = [...filteredContact].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ul className={css.contactListContainer}>
      {sortedContacts.map(({ id, ...contact }) => (
        <li key={id} className={css.contactContainer}>
          <Contact id={id} {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
