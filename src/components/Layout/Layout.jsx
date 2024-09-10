import { AppBar } from "../AppBar/AppBar";
import css from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={css.header}>
      <AppBar />
    </div>
  );
};
