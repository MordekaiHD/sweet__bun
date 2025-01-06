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
    }, 10000); // 3000 мс = 3 секунды

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
    <div className="main__reviews-carousel">
        <h3 className="main__review-name">{reviews[currentIndex].name}</h3>
      <div className="main__review-card">
        <p className="main__review-text">"{reviews[currentIndex].text}"</p>
      </div>
        <p className="main__review-rating">
          Рейтинг: {reviews[currentIndex].rating} / 5
        </p>
      <div className="main__carousel-buttons">
        <button className="main__prev-button" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="main__next-button" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
