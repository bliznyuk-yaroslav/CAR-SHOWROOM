import css from "./StarReviews.module.css";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
export default function StarReviews({ count }) {
  const totalStars = 5;
  const star = Array.from({ length: totalStars }, (_, index) => {
    return index < count ? (
      <FaStar className={css.icon} key={index} />
    ) : (
      <CiStar key={index} />
    );
  });
  return <div className={css.container}>{star}</div>;
}
