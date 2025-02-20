function Header() {
  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <section className="header__top">
        <div className="header__top-left">
          <p className="header__top-left-title">
            <img className="header__top-left-img" src="cake.svg" alt="" />
            Сладкая булочка
          </p>
        </div>
        <div className="header__top-right">
          <div className="header__top-right-address">
            <p>г.Мозырь</p>
          </div>
          <div className="header__top-right-telephone">
            <p>+375 99 999 99 99</p>
          </div>
        </div>
      </section>
      <section className="header__info">
        <div className="header__info-box">
          <p className="header__info-title">
            Пирожные и капкейки от 5 р/шт. с доставкой по Мозырю
          </p>
          <p className="header__info-text">
            Приготовим за 3 часа в день заказа.
            Доставка на авто в холодильнике.
          </p>
          <button className="header__info-button" onClick={handleScrollToCatalog}>
            Перейти в каталог
          </button>
        </div>
        <img className="header__info-img" src="cupcake.png" alt="" />
      </section>
    </header>
  );
}

export default Header;
