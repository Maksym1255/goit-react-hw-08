import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetAllContacts } from "./redux/contactsOps";
import Loader from "./Loader/Loader";
import toast from "react-hot-toast";
import { selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      {error && toast.error({ error })}
      <ContactForm />

      <SearchBox />

      {isLoading ? <Loader /> : <ContactList />}
    </>
  );
};

export default App;
