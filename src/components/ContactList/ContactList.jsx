import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ list, onContactDelete }) => {
  return (
    <ul className={css.contactListContainer}>
      {list.map((contact) => (
        <li key={contact.id} className={css.contactContainer}>
          <Contact {...contact} onContactDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
