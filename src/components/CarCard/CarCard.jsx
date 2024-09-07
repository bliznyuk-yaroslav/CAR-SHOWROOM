import VehicleOption from "../VehicleOption/VehicleOption";
import css from "./CarCard.module.css";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CarCard({ data }) {
  return (
    <div className={css.container}>
      <img src={data.images[0]} alt="truck photo" className={css.photo} />
      <div className={css.data}>
        <div className={css.head}>
          <h2 className={css.name}>{data.title}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>$ {data.price}</p>
          </div>
        </div>

        <div className={css.rating}>
          <span className={css.text}>
            <div className={css.star}>
              <FaRegStar />
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
        </div>

        <p className={css.description}>{data.description}</p>
        <VehicleOption data={data} />
        <Link to={`/vehicle/${data.id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
