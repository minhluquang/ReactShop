import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";

import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { fetchDetailProduct } from "../../services/ProductService";

import "./ProductDetail.scss";

import ModalErrorAddProduct from "../../components/ModalErrorAddProduct/ModalErrorAddProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [product, setProduct] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState([]);

  const fetchDetailData = async () => {
    const res = await fetchDetailProduct(id);
    if (res) {
      setProduct(res);
    }
  };

  const handleRating = () => {
    if (product && product.rating) {
      const newStars = [];
      const fullStars = Math.floor(product.rating.rate);
      const halfStars = product.rating.rate % 1 !== 0;

      if (fullStars) {
        for (var i = 0; i < fullStars; i++) {
          newStars.push(
            <i
              key={`star-${i + 1}`}
              className="fa-solid fa-star text-warning"
            ></i>
          );
        }
      }

      if (halfStars) {
        newStars.push(
          <i
            key={`star-${fullStars + 1}`}
            className="fa-solid fa-star-half-stroke text-warning"
          ></i>
        );
      }

      if (fullStars <= 4) {
        const loopValue = halfStars ? 5 - 1 : 5;
        for (var i = fullStars; i < loopValue; i++) {
          const indexFirst = halfStars ? i + 1 : i;
          const indexAfter = indexFirst;
          newStars.push(
            <i
              key={`star-${indexAfter + 1}`}
              className="fa-regular fa-star text-warning"
            ></i>
          );
        }
      }
      setStars(newStars);
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, []);

  useEffect(() => {
    handleRating();
  }, [product]);

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
            <span className="d-flex align-item-center justify-content-center mb-2">
              <span className="rating">
                {stars && stars.length > 0 && stars.map((item) => item)}
              </span>
              <span className="ms-2">
                ({product && product.rating && product.rating.count})
              </span>
            </span>
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
