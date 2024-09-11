import css from "./VehicleOption.module.css";
import { TbCar } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import formatFormVehicle from "../../utils/formatFormVehicle";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { MdCheckCircle } from "react-icons/md";

export default function VehicleOption({ data }) {
  const vehicleType =
    data.tags && data.tags.length > 1 && data.tags[1] === "sports cars"
      ? "sports cars"
      : data.tags && data.tags.length > 0
      ? data.tags[0]
      : null;
  return (
    <div className={css.container}>
      {vehicleType && (
        <div className={css.optionItem}>
          <TbCar size={22} />
          <p className={css.optionText}>{formatFormVehicle(vehicleType)}</p>
        </div>
      )}
      {data.warrantyInformation ? (
        <div className={css.optionItem}>
          <SiAdguard size={18} />
          <p className={css.optionText}>
            {formatFormVehicle(data.warrantyInformation)}
          </p>
        </div>
      ) : null}
      {data.shippingInformation ? (
        <div className={css.optionItem}>
          <FaShippingFast size={20} />
          <p className={css.optionText}>
            {formatFormVehicle(data.shippingInformation)}
          </p>
        </div>
      ) : null}
      {data.availabilityStatus ? (
        <div className={css.optionItem}>
          <MdCheckCircle size={20} />
          <p className={css.optionText}>
            {formatFormVehicle(data.availabilityStatus)}
          </p>
        </div>
      ) : null}
      {data.returnPolicy ? (
        <div className={css.optionItem}>
          <RiPoliceBadgeFill size={20} />
          <p className={css.optionText}>
            {formatFormVehicle(data.returnPolicy)}
          </p>
        </div>
      ) : null}
    </div>
  );
}
