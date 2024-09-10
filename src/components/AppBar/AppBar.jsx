import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedin = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.appBar}>
      <Navigation />
      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
