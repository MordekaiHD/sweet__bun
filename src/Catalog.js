import products from './JSON/products';

function Catalog() {
  return (
    <div className="main__catalog">
      {products.map((product) => (
        <div className="main__product" key={product.id}>
          <img
            className="main__product-image"
            src={product.image}
            alt={product.name}
          />
          <p className="main__product-title">{product.name}</p>
          <p className="main__product-text">{product.description}</p>
          <p className="main__product-price">{product.price}</p>
          <button className="main__product-button">Купить</button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
