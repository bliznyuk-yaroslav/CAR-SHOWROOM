import { useSelector } from "react-redux";
import { selectVehicle } from "../../redux/catalog/selectors";
import css from "./VehicleTitle.module.css";
import { FaStar } from "react-icons/fa6";

export default function VehicleTitle() {
  const data = useSelector(selectVehicle);
  console.log(data);

  return (
    <>
      {data ? (
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
      ) : null}
    </>
  );
}
