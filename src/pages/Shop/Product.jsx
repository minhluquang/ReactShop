import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Product.scss";

const Product = (props) => {
  const { addToCart } = useContext(CartContext);

  const { id, title, price, category, description, image } = props.data;

  return (
    <div className="card-container">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <p className="card-category">{category}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-price">$ {price.toFixed(2)}</p>
      </div>

      <div className="card-button">
        <div className="card-add" onClick={() => addToCart(props.data)}>
          <i className="fa-solid fa-plus"></i>
        </div>

        <div className="card-detail">
          <i className="fa-solid fa-eye"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
