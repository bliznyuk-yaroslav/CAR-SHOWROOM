import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import car from "../../assets/car.svg";
export default function Header() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.text}>
        <img src={car} alt="icon" className={css.icon} />
        CAR SHOWROOM
      </NavLink>
    </nav>
  );
}
