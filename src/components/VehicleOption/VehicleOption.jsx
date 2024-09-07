import css from "./VehicleOption.module.css";
export default function VehicleOption({ data }) {
  return (
    <div className={css.container}>
      {data.brand ? (
        <div>
          <p>{data.brand}</p>
        </div>
      ) : null}
    </div>
  );
}
