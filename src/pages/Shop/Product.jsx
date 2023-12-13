import "./Product.scss";

const Product = (props) => {
  const { id, title, price, category, description, image } = props.data;

  return (
    <div className="card-container">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <p className="card-category">{category}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-price">$ {price}</p>
      </div>

      <div className="card-button">
        <div className="card-add">
          <i class="fa-solid fa-plus"></i>
        </div>

        <div className="card-detail">
          <i class="fa-solid fa-eye"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
