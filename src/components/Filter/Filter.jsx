import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { filterBrand } from "../../redux/filter/slice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filterVal = useSelector((state) => state.filter.value);

  const handleFilter = (e) => dispatch(filterBrand(e.target.value));
  return (
    <div className={css.cont}>
      <label className={css.text}></label>
      <input
        type="text"
        className={css.input}
        name="filter"
        placeholder="Enter car brand to filter"
        value={filterVal}
        onChange={handleFilter}
      />
    </div>
  );
}
