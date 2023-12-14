import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { productList } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = productList.find((item) => item.id === +id);

  return (
    <>
      {product && (
        <Row className="productDetail-container">
          <Col md={6} className="productDetail-image">
            <Image
              src={product.image}
              alt={product.title}
            />
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
            <Button variant="dark" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetail;
