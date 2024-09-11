import { useDispatch, useSelector } from "react-redux";
import css from "./VehicleReviews.module.css";
import { selectVehicle } from "../../redux/item/selectors";
import Comment from "../Comment/Comment";
import { useEffect, useState } from "react";
import { fetchVehicleById } from "../../redux/item/operations";
import { useParams } from "react-router-dom";

export default function VehicleReviews() {
  const [localReviews, setLocalReviews] = useState([]);
  const [combinedReviews, setCombinedReviews] = useState([]);
  const dispatch = useDispatch();
  const vehicle = useSelector(selectVehicle);
  const { id } = useParams();
  useEffect(() => {
    if (vehicle.id) {
      dispatch(fetchVehicleById(vehicle.id));
    }
  }, [dispatch, vehicle.id]);

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
