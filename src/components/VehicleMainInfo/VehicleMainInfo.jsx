import { useSelector } from "react-redux";
import css from "./VehicleMainInfo.module.css";
import { selectVehicle } from "../../redux/catalog/selectors";
import VehicleOption from "../VehicleOption/VehicleOption";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
export default function VehicleMainInfo() {
  const data = useSelector(selectVehicle);

  return (
    <>
      {data ? (
        <div className={css.container}>
          <VehicleOption data={data} />
          <VehicleDetails />
        </div>
      ) : null}{" "}
    </>
  );
}
