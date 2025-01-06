function OrderPreparation() {
  return (
    <div className="main__order__preparation">
      <img className="main__order__preparation-img" src="phone.svg" alt="phone" />
      <div className="main__order__preparation__info">
        <p className="main__order__preparation__info-title">Приготовим заказ любой сложности по фото или эскизу</p>
        <p className="main__order__preparation__info-text">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
        <button className="main__order__preparation__info-button">Загрузить фотографию</button>
      </div>
    </div>
  );
}

export default OrderPreparation;