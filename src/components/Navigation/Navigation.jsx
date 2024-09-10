import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedin = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.navigate}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedin && (
        <NavLink className={css.link} to="contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
