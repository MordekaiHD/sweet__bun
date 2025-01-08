import React, { useState } from "react";

function ChefInformation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setSuccessMessage("");
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!question.trim()) {
      alert("Пожалуйста, введите ваш вопрос.");
      return;
    }

    setSuccessMessage("Ваш вопрос успешно отправлен. Юлия скоро с вами свяжется!");
    setQuestion(""); 
    setIsModalOpen(false);
  };

  return (
    <div className="main__chef">
      <div className="main__chef__box">
        <div className="main__chef__box-info">
          <p className="main__chef__box-info-name">Юлия Кондратьева</p>
          <p className="main__chef__box-info-position">ваш кондитер</p>
        </div>
        <p className="main__chef__box-title">
          Лично приготовлю и всё красиво упакую для вашего события
        </p>
        <p className="main__chef__box-text">
          Проконсультирую по выбору капкейков и придумаю нестандартную идею
        </p>
        <p className="main__chef__box-text">
          Приготовлю капкейки для вашего события, которые обязательно всем
          понравятся
        </p>
        <p className="main__chef__box-text">
          Аккуратно и красиво всё упакую, если вы хотите сделать приятный
          подарок
        </p>
        <button
          className="main__chef__box-button"
          onClick={handleButtonClick}
        >
          Задать вопрос Юлии
        </button>
        {successMessage && (
          <p className="main__chef__success-message">{successMessage}</p>
        )}
      </div>
      <div>
        <img className="main__chef__img" src="woman.svg" alt="chef__foto" />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <h2 className="modal__title">Задайте ваш вопрос Юлии</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="modal__textarea"
                placeholder="Напишите ваш вопрос"
                value={question}
                onChange={handleQuestionChange}
              ></textarea>
              <div className="modal__buuton">
                <button className="modal__submit" type="submit">
                  Отправить
                </button>
                <button
                  className="modal__close"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Закрыть
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChefInformation;
