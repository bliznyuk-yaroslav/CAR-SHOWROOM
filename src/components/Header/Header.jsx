import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.text}>
        CAR SHOWROOM
      </NavLink>
    </nav>
  );
}
