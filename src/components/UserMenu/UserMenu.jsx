import css from "./UserMenu.module.css";

export default function UserMenu() {
  const handleLogOut = () => {
    return;
  };
  return (
    <div className={css.wrapperUserMenu}>
      <p className={css.userName}>User name</p>
      <button onClick={handleLogOut} className={css.button} type="button">
        Log Out
      </button>
    </div>
  );
}
