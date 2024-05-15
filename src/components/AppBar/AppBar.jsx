import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.header}>
      <Navigation />
      <AuthNav />
      {/* <UserMenu /> */}
    </div>
  );
}