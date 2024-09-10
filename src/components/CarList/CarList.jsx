import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorAllVehicle,
  selectorIsLoading,
} from "../../redux/catalog/selectors";
import { fetchAllVehicle } from "../../redux/catalog/operations";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { resetFilter } from "../../redux/filter/slice";
export default function CarList() {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectorAllVehicle);
  const isLoading = useSelector(selectorIsLoading);
  const { filter } = useSelector((state) => state.filter);
  const filterArray = vehicles.filter(({ brand }) =>
    brand.toLowerCase().includes(filter.toLowerCase())
  );
  const [count, setCount] = useState(3);
  useEffect(() => {
    dispatch(resetFilter());

    dispatch(fetchAllVehicle())
      .unwrap()
      .then(() => toast.success("Vehicles loaded successfully!"))
      .catch(() => toast.error("Failed to load vehiaaacles!"));
  }, [dispatch]);

  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={css.container}>
      {filterArray.length > 0 ? (
        filterArray
          .slice(0, count)
          .map((product) => <CarCard key={product.id} data={product} />)
      ) : (
        <p>No vehicles found</p>
      )}
      {count < filterArray.length && (
        <button
          className={css.loadMore}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? <Loader width="20" height="20" /> : "Load more"}
        </button>
      )}
    </div>
  );
}
