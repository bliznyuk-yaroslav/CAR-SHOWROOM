import { useDispatch, useSelector } from "react-redux";
import { selectVehicle } from "../../redux/catalog/selectors";
import css from "./VehicleTitle.module.css";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVehicleById } from "../../redux/catalog/operations";
import Loader from "../Loader/Loader";

export default function VehicleTitle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(selectVehicle);
  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleById(id));
    }
  }, [id, dispatch]);
  if (!data) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        {data.brand}: {data.title}
      </h2>
      <div className={css.rating}>
        <span className={css.text}>
          <div className={css.star}>
            <FaStar className={css.icon} />
          </div>
          <span className={css.reviews}>{`${data.rating}( Reviews)`}</span>
        </span>
      </div>
      <h4>Price:</h4>
      <p className={css.price}>$ {data.price}</p>
      <div>
        <h3>Description:</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
