import React, { useState } from "react";

function Footer() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phone.trim() === "") {
      alert("Пожалуйста, введите номер телефона.");
      return;
    }
    alert(`Ваш номер телефона (${phone}) принят. Мы скоро свяжемся с вами!`);
    setPhone("");
  };

  return (
    <footer className="footer">
      <div className="footer__form">
        <h1 className="footer__form-title">
          Чтобы сделать заказ, укажите ваш телефон
        </h1>
        <p className="footer__form-text">
          Мы перезвоним в течение 15 минут, чтобы уточнить ваши пожелания
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="footer__form-phone"
            type="tel"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className="footer__form-button" type="submit">
            Сделать заказ
          </button>
        </form>
      </div>
      <p className="footer-text">
        © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
      </p>
    </footer>
  );
}

export default Footer;
