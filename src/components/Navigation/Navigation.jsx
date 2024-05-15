import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.wrapperNav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
