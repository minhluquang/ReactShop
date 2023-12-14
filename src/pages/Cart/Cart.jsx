import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart, increaseAmount, decreaseAmount, totalPrice } =
    useContext(CartContext);

  return (
    <>
      <div className="cart-header">Your cart</div>
      {cart && cart.length > 0 && (
        <>
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
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <Button
                        className="btn"
                        variant="outline-dark"
                        onClick={() => decreaseAmount(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </Button>
                      <span className="mx-2">{item.amount}</span>
                      <Button
                        className="btn"
                        variant="outline-dark"
                        onClick={() => increaseAmount(item.id)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Button>
                    </td>
                    <td>${(item.amount * item.price).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}

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
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default Cart;
