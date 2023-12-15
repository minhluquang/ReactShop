import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import "./Cart.scss";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 991);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="cart-header">Your cart</div>
      {cart && cart.length > 0 && (
        <>
          <div className="cart-detail">
            <Table hover className="cart-info">
              <thead>
                <tr>
                  <th className="cart-product">Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="cart-image">
                        <div>
                          <img src={item.image} alt={item.title} />
                        </div>
                      </td>
                      <td>
                        <div className="cart-title">{item.title}</div>
                      </td>
                      <td>
                        <div className="cart-price">
                          ${item.price.toFixed(2)}
                        </div>
                      </td>
                      <td>
                        <div className="cart-actions">
                          <Button
                            className="btn"
                            variant="outline-dark"
                            onClick={() => decreaseAmount(item.id)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </Button>
                          <span className="cart-quantity mx-2">
                            {item.amount}
                          </span>
                          <Button
                            className="btn"
                            variant="outline-dark"
                            onClick={() => increaseAmount(item.id)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </Button>
                        </div>
                      </td>
                      <td>
                        <div className="cart-total">
                          ${(item.amount * item.price).toFixed(2)}
                        </div>
                      </td>
                      <td>
                        <div className="cart-remove">
                          <Button
                            variant="danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {!isSmallScreen && (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      Total: <b>${totalPrice.toFixed(2)}</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          {isSmallScreen ? (
            <div className="d-flex align-items-end justify-content-center flex-column">
              <div className="cart-totalPrice float-end mt-sm-0 mt-2">
                Total: <b>${totalPrice.toFixed(2)}</b>
              </div>
              <div className=" float-end mt-sm-0 mt-2">
                <Button variant="danger" className="me-2" onClick={clearCart}>
                  Clear all
                </Button>
                <Button variant="dark">Check out</Button>
              </div>
            </div>
          ) : (
            <div className=" float-end mt-sm-0 mt-2">
              <Button variant="danger" className="me-2" onClick={clearCart}>
                Clear all
              </Button>
              <Button variant="dark">Check out</Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
