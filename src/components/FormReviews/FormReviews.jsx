import { useEffect, useState } from "react";
import css from "./FormReviews.module.css";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

export default function ReviewForm() {
  const { id } = useParams();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storeReview = JSON.parse(localStorage.getItem("review")) || [];
    setReviews(storeReview[id] || []);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleRatingChange = (rating) => {
    setFormState((prevState) => ({
      ...prevState,
      rating,
    }));
  };

  const handleSendForm = (e) => {
    e.preventDefault();

    if (formState.rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    const reviewData = {
      reviewerName: formState.name,
      reviewerEmail: formState.email,
      rating: formState.rating,
      date: new Date().toISOString(),
      comment: formState.comment,
    };
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const vehicleReviews = storedReviews[id] || [];
    const updatedVehicleReviews = [...vehicleReviews, reviewData];
    const updatedReviews = {
      ...storedReviews,
      [id]: updatedVehicleReviews,
    };
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setReviews(updatedVehicleReviews);
    toast.success("Thank you for your feedback!");
    setFormState({
      name: "",
      email: "",
      rating: 0,
      comment: "",
    });
  };
  return (
    <form className={css.form} onSubmit={handleSendForm}>
      <h2 className={css.title}>Leave your review</h2>
      <p className={css.text}>
        Your opinion matters to us! Please provide your feedback below.
      </p>

      <input
        type="text"
        name="name"
        required
        className={css.input}
        placeholder="Name*"
        onChange={handleChange}
        value={formState.name}
      />

      <input
        type="email"
        name="email"
        required
        className={css.input}
        placeholder="Email*"
        onChange={handleChange}
        value={formState.email}
      />

      <div className={css.stars}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            size={24}
            className={
              rating <= formState.rating ? css.activeStar : css.inactiveStar
            }
            onClick={() => handleRatingChange(rating)}
          />
        ))}
      </div>

      <textarea
        name="comment"
        placeholder="Write your comment here"
        className={css.commentInput}
        onChange={handleChange}
        value={formState.comment}
      />

      <button className={css.sendBtn} type="submit">
        Submit Review
      </button>
    </form>
  );
}
