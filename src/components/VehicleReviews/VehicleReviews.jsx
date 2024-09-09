import { useDispatch, useSelector } from "react-redux";
import css from "./VehicleReviews.module.css";
import { selectVehicle } from "../../redux/catalog/selectors";
import Comment from "../Comment/Comment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVehicleById } from "../../redux/catalog/operations";

export default function VehicleReviews() {
  const { id } = useParams();
  const [localReviews, setLocalReviews] = useState([]);
  const [combinedReviews, setCombinedReviews] = useState([]);
  const dispatch = useDispatch();
  const vehicle = useSelector(selectVehicle);
  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    const storeReview = JSON.parse(localStorage.getItem("reviews")) || [];
    setLocalReviews(storeReview[id] || []);
  }, [id]);
  useEffect(() => {
    if (vehicle && vehicle.reviews) {
      setCombinedReviews([...vehicle.reviews, ...localReviews]);
    }
  }, [vehicle, localReviews]);

  return (
    <div className={css.container}>
      {combinedReviews.length > 0 ? (
        combinedReviews.map((review, index) => (
          <Comment key={index} data={review} />
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
