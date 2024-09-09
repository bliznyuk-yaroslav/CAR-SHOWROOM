import { useSelector } from "react-redux";
import { selectVehicle } from "../../redux/catalog/selectors";
import css from "./VehiclePhoto.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function VehiclePhoto() {
  const data = useSelector(selectVehicle);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className={css.container}>
      {data.images && data.images.length > 0 && (
        <>
          <img
            src={data.images[currentIndex]}
            alt="truck photo"
            className={css.photo}
            onClick={openModal}
          />
          <button onClick={handlePrev} className={css.button}>
            &lt;
          </button>
          <button onClick={handleNext} className={css.button}>
            &gt;
          </button>
          {isModalOpen && (
            <div className={css.modal} onClick={closeModal}>
              <img
                src={data.images[currentIndex]}
                alt="truck photo"
                className={css.modalPhoto}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
