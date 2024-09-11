import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorError, selectorIsLoading } from "../../redux/item/selectors";
import { useEffect, useRef } from "react";
import { fetchVehicleById } from "../../redux/item/operations";
import VehiclePhoto from "../../components/VehiclePhoto/VehiclePhoto";
import VehicleTitle from "../../components/VehicleTitle/VehicleTitle";
import Loader from "../../components/Loader/Loader";
import css from "./VehiclePage.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import VehicleDescription from "../../components/VehicleDescription/VehicleDescription";

export default function VehiclePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const backLinkURLRef = useRef(location.state ?? "/");
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={css.container}>
      <NavLink to={backLinkURLRef.current} className={css.btn}>
        <IoMdArrowBack size={16} /> Go back
      </NavLink>
      <div className={css.contInfo}>
        <VehicleTitle />
        <VehiclePhoto />
      </div>
      <VehicleDescription />
    </section>
  );
}
