import CarList from "../../components/CarList/CarList";
import Filter from "../../components/Filter/Filter";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.container}>
      <Filter />
      <CarList />
    </section>
  );
}
