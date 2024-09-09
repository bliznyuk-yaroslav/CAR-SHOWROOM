import StarReviews from "../StarReviews/StarReviews";
import css from "./Comment.module.css";
export default function Comment({ data }) {
  const formatData = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  return (
    <>
      {data ? (
        <div className={css.container}>
          <div className={css.personWrapper}>
            <div className={css.avatar}>
              {data?.reviewerName
                ? data.reviewerName.charAt(0).toUpperCase()
                : "?"}
            </div>
            <div className={css.person}>
              <p className={css.name}>
                {data.reviewerName}
                <span className={css.date}> {formatData(data.date)}</span>
              </p>
              <p className={css.email}>{data.reviewerEmail}</p>
              <StarReviews count={data.rating} />
            </div>
          </div>
          <p className={css.comment}>{data.comment}</p>
        </div>
      ) : null}
    </>
  );
}
