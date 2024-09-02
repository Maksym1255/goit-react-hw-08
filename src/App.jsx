import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import { selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {error !== null ? (
          <h2>
            <b>Error...{error}</b>
          </h2>
        ) : (
          <div>
            <h1>Phonebook</h1>

            <ContactForm />

            <SearchBox />

            {isLoading ? <Loader /> : <ContactList />}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
