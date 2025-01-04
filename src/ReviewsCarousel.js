import React, { useState, useEffect } from "react";
import reviews from "./JSON/feedback";

function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 мс = 3 секунды

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  // Переход к предыдущему слайду (для ручного управления)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Переход к следующему слайду (для ручного управления)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="reviews-carousel">
      <h2>Отзывы</h2>
      <div className="review-card">
        <h3 className="review-name">{reviews[currentIndex].name}</h3>
        <p className="review-text">"{reviews[currentIndex].text}"</p>
        <p className="review-rating">
          Рейтинг: {reviews[currentIndex].rating} / 5
        </p>
      </div>
      <div className="carousel-buttons">
        <button className="prev-button" onClick={prevSlide}>
          &#8592; Назад
        </button>
        <button className="next-button" onClick={nextSlide}>
          Вперед &#8594;
        </button>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
