import React, { useState } from "react";
import "./card.css";
import { ReactComponent as ArrowLeft } from "../../icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../icons/arrow-right.svg";


const Card = ({ project }) => {
  const { images } = project;
  const { name, price, province, type, size, rooms } = project.generalInfo;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrl = images?.[currentImageIndex]?.small;

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="project-card">
      <div className="image-container">
        <button onClick={handlePrevImage} className="prev-button">
          <ArrowLeft className="icons"/>
        </button>
        <img src={imageUrl} alt={name} className="project-image" />
        <button onClick={handleNextImage} className="next-button">
          <ArrowRight className="icons"/>
        </button>
      </div>
      <h3>{name}</h3>
      <p>📍 Локація: {province || "Не указано"}</p>
      <p>💰 Ціна: {price || "По запросу"}</p>
      <p>🏠 Тип: {type || "Не указано"}</p>
      <p>📏 Розмір: {size || "Не указано"} м²</p>
      <p>🛏️ Кімнати: {rooms || "Не указано"}</p>
    </div>
  );
};

export default Card;
