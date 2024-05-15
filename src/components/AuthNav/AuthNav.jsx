import clsx from "clsx";
import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav className={css.wrapperNav}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Log In
      </NavLink>
    </nav>
  );
}
