import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllVehicleFirstPage } from "../../redux/catalog/operations";
import CarList from "../../components/CarList/CarList";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllVehicleFirstPage());
  }, [dispatch]);
  return (
    <div>
      <CarList />
    </div>
  );
}
