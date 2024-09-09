import css from "./VehicleDescription.module.css";
import { useState } from "react";
import { selectVehicle } from "../../redux/catalog/selectors";
import { useSelector } from "react-redux";
import VehicleMainInfo from "../VehicleMainInfo/VehicleMainInfo";
import VehicleReviews from "../VehicleReviews/VehicleReviews";
import FormReviews from "../FormReviews/FormReviews";
export default function VehicleDescription() {
  const [isLinkActive, setIsLinkActive] = useState("feature");
  const data = useSelector(selectVehicle);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <div className={css.info}>
            <div className={css.links}>
              <span
                className={css.features}
                onClick={() => setIsLinkActive("features")}
              >
                Features
              </span>
              <span
                className={css.reviews}
                onClick={() => setIsLinkActive("reviews")}
              >
                Reviews
              </span>
              <div
                className={
                  isLinkActive === "features"
                    ? css.underlineRight
                    : css.underlineLeft
                }
              ></div>
            </div>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.detailsReviews}>
              {isLinkActive === "features" ? (
                <VehicleMainInfo />
              ) : (
                <VehicleReviews />
              )}
            </div>
            <FormReviews className={css.form} />
          </div>
        </div>
      ) : null}
    </>
  );
}
