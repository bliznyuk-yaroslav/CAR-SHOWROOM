import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectHasMore,
  selectorAllVehicle,
  selectorIsLoading,
} from "../../redux/catalog/selectors";
import { fetchAllVehicle } from "../../redux/catalog/operations";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

export default function CarList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const vehicle = useSelector(selectorAllVehicle);
  const isLoading = useSelector(selectorIsLoading);
  async function getNextPageVehicle() {
    try {
      await dispatch(fetchAllVehicle()).unwrap();
      toast.success("Vehicles loaded successfully!");
    } catch {
      toast.error("Failed to load vehicle!");
    }
  }
  return (
    <div>
      {vehicle.length > 0
        ? vehicle.map((product) => <CarCard key={product.id} data={product} />)
        : null}
      {hasNextPage ? (
        <button
          className={css.loadMore}
          onClick={getNextPageVehicle}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader width="20" heigth="20" color="var(--Main)" />
          ) : (
            "Load more"
          )}
        </button>
      ) : null}
    </div>
  );
}
