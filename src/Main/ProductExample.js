import example from "../JSON/example";

function ProductExample() {
  return (
    <div className="main__example">
      <h1 className="main__example__title">Сделали более 3.000 заказов за 2 года</h1>
      <p className="main__example__text">Посмотрите фото реальных заказов из нашего instagram</p>
      <div className="main__example__img-box">
        {example.map((example) => (
          <div className="main__example__img" key={example.id}>
            <img
              className="main__example__img-product"
              src={example.src}
              alt={example.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductExample;