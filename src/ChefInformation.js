function ChefInformation() {
  return (
    <div className="main__chef">
      {/* <img src="" alt="main__chef__fon" /> */}
      <div className="main__chef__box">
        <div className="main__chef__box-info ">
          <p className="main__chef__box-info-name">Юлия Кондратьева</p>
          <p className="main__chef__box-info-position">ваш кондитер</p>
        </div>
        <p className="main__chef__box-title">Лично приготовлю и всё красиво упакую для вашего события</p>
        <p className="main__chef__box-text">Проконсультирую по выбору капкейкови придумаю нестандартную идею</p>
        <p className="main__chef__box-text">Приготовлю капкейки для вашего события, которые обязательно всем понравятся </p>
        <p className="main__chef__box-text">Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок </p>
        <button className="main__chef__box-button">Задать вопрос Юлии</button>
      </div>
      <div>
        <img className="main__chef__img" src="woman.svg" alt="chef__foto" />
      </div>
    </div>
  );
}

export default ChefInformation;