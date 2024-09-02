import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContact } from "../../redux/selectors";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContact);

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
