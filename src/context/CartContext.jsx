import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = React.createContext();
// This also works: const UserContext = createContext();

const CartProvider = ({ children }) => {
  // Cart is the name of the "data" that gets stored in context
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Count total amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, cur) => {
        return acc + cur.amount;
      }, 0);
      setTotalAmount(amount);
    }
  }, [cart]);

  // Calculate total price
  useEffect(() => {
    if (cart) {
      const price = cart.reduce((acc, cur) => {
        return acc + cur.amount * cur.price;
      }, 0);
      setTotalPrice(price);
    }
  }, [cart]);

  const addToCart = (product, isShowToast = true, amount = 1) => {
    const newItem = { ...product, amount: amount };
    const cartItem = cart.find((item) => item.id === product.id);
    // If in your cart has this item
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    if (isShowToast) {
      toast.success("Add to cart success!");
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.success("Remove from cart success!");
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, false);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem && cartItem.amount >= 2) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
