import React, { useState } from "react";

function OrderRreparation() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="order__registration">
      <div className="order__registration-info">
        <h1 className="order__registration-title">
          Чтобы сделать заказ, укажите ваш телефон
        </h1>
        <p className="order__registration-text">
          Мы перезвоним в течение 15 минут, чтобы уточнить ваши пожелания
        </p>
        <div className="order__registration-phone">
          <input
            className="order__registration-input"
            placeholder="Ваш номер телефона"
          ></input>
          <button type="submit" className="order__registration-button">
            Заказать
          </button>
          <label className="order__registration-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Согласен с условиями обработки данных
          </label>
        </div>
      </div>
    </section>
  );
}

export default OrderRreparation;