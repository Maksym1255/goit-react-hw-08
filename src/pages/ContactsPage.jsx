import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts successfully uploaded🎉");
      });
  }, [dispatch]);

  return (
    <div>
      <div>
        {error !== null ? (
          <h2>
            <b>Error...{error}</b>
          </h2>
        ) : (
          <div>
            <h2>Phonebook</h2>

            <ContactForm />

            <SearchBox />

            {isLoading ? <Loader /> : <ContactList />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
