import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import "./Product.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import ModalErrorAddProduct from "../../components/ModalErrorAddProduct/ModalErrorAddProduct";

const Product = (props) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const { id, title, price, category, description, image } = props.data;

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if (user && user.auth) {
      addToCart(props.data);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
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
          <button className="card-add" onClick={() => handleAddToCart()}>
            <i className="fa-solid fa-plus"></i>
          </button>

          <NavLink to={`/product/${id}`} className="card-detail">
            <i className="fa-solid fa-eye"></i>
          </NavLink>
        </div>
      </div>

      <ModalErrorAddProduct show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Product;
