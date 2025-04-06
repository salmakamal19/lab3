import { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (newItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, updateCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
