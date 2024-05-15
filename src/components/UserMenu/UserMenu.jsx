import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapperUserMenu}>
      <p className={css.userName}>{user.name}</p>
      <button onClick={handleLogOut} className={css.button} type="button">
        Log Out
      </button>
    </div>
  );
}
