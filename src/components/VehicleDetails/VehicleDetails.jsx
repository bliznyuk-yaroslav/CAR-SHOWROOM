import { useSelector } from "react-redux";
import { selectVehicle } from "../../redux/item/selectors";
import css from "./VehicleDetails.module.css";

export default function VehicleDetails() {
  const data = useSelector(selectVehicle);
  console.log(data.dimensions);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <h2 className={css.title}> Vehicle details</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <span className={css.text}>Stock</span>
              <span className={css.text}>{data.stock}</span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Discount Percentage</span>
              <span className={css.text}>{data.discountPercentage}</span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Weight</span>
              <span className={css.text}>{data.weight}</span>
            </li>
            {data.dimensions && (
              <>
                <li className={css.item}>
                  <span className={css.text}>Width</span>
                  <span className={css.text}>{data.dimensions.width}</span>
                </li>
                <li className={css.item}>
                  <span className={css.text}>Height</span>
                  <span className={css.text}>{data.dimensions.height}</span>
                </li>
                <li className={css.item}>
                  <span className={css.text}>Depth</span>
                  <span className={css.text}>{data.dimensions.depth}</span>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </>
  );
}
