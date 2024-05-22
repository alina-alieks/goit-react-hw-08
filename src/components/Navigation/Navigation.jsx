import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.wrapperNav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.active)
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
