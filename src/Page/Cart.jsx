// src/components/Cart.jsx
import React, { useState, useEffect } from 'react';
import Product from './Product'; 
import CartBadge from './CartBadge'; 
import './Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Makeup Product 1',
      image: 'https://m.media-amazon.com/images/I/61lK-ztoh2L.__AC_SX300_SY300_QL70_ML2_.jpg',
      quantity: 2,
    },
    {
      id: 2,
      title: 'Makeup Product 2',
      image: 'https://m.media-amazon.com/images/I/61NTjjrXjpL._AC_SX679_.jpg',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Makeup Product 3',
      image: 'https://m.media-amazon.com/images/I/61xug54gCuL.__AC_SX300_SY300_QL70_ML2_.jpg',
      quantity: 5,
    }
  ]);
  const [badgeCount, setBadgeCount] = useState(0); 

  const updateBadgeCount = () => {
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
    setBadgeCount(totalQuantity);
  };

  useEffect(() => {
    updateBadgeCount(); 
  }, [products]);

  const handleIncrement = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleRemove = (product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <CartBadge badgeCount={badgeCount} />

      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}  
              product={product}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
