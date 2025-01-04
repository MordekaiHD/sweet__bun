function Header() {
  return (
    <header className="header">
      <div className="header__center-img">
        <img src="" alt="cake" />
      </div>
      <section className="header__top">
        <div className="header__top-left">
          <p className="header__top-left-title">Сладкая булочка</p>
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
      <section className="header__center">
        <div className="header__center-info">
          <div className="header__center-info-box">
            <p className="header__center-info-title">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="header__center-info-text">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <button className="header__center-button">
            Перейти в каталог
          </button>
        </div>

      </section>
    </header>
  );
}

export default Header;