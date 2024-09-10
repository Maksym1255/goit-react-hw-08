import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p>Welcome: {user.name}</p>
      <button
        className={css.dutton}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
