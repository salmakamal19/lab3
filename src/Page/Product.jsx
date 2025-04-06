import React from 'react';

const Product = ({ product, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-quantity">
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => onIncrement(product)} className="increment-btn">
            +
          </button>
          <button onClick={() => onDecrement(product)} className="decrement-btn">
            -
          </button>
        </div>
        <button onClick={() => onRemove(product)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
