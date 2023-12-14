import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";

import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

import "./ProductDetail.scss";
import { UserContext } from "../../context/UserContext";
import ModalErrorAddProduct from "../../components/ModalErrorAddProduct/ModalErrorAddProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const { productList } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const product = productList.find((item) => item.id === +id);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if (user && user.auth) {
      addToCart(product);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {product && (
        <Row className="productDetail-container">
          <Col md={6} className="productDetail-image">
            <Image src={product.image} alt={product.title} />
          </Col>
          <Col md={6} className="productDetail-info">
            <span className="text-muted border-bottom text-capitalize">
              {product.category}
            </span>
            <h2 className="mt-2">{product.title}</h2>
            <b className="mb-2">
              Price: <span className="text-danger">${product.price}</span>
            </b>
            <p>{product.description}</p>
            <Button variant="dark" onClick={() => handleAddToCart()}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      )}

      <ModalErrorAddProduct show={showModal} handleClose={handleClose} />
    </>
  );
};

export default ProductDetail;
