import { useEffect, useState } from "react";
import VehicleOption from "../VehicleOption/VehicleOption";
import css from "./CarCard.module.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function CarCard({ data }) {
  const [localReviewsCount, setLocalReviewCount] = useState("");

  useEffect(() => {
    const storegReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const vehicleReviews = storegReviews[data.id] || [];
    setLocalReviewCount(vehicleReviews.length);
  }, [data.id]);
  const totalReviews = data.reviews.length + localReviewsCount;
  return (
    <div className={css.container}>
      <img src={data.images[0]} alt="vehicle photo" className={css.photo} />
      <div className={css.data}>
        <div className={css.head}>
          <h2 className={css.name}>
            {data.brand}: {data.title}
          </h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>$ {data.price}</p>
          </div>
        </div>

        <div className={css.rating}>
          <span className={css.text}>
            <div className={css.star}>
              <FaStar className={css.icon} />
            </div>
            {`${data.rating}(${totalReviews} Reviews)`}
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
