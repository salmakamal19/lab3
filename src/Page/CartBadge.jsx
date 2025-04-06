import React from 'react';

const CartBadge = ({ badgeCount }) => {
  return (
    <div className="cart-badge">
      <span>Cart: {badgeCount} items</span>
    </div>
  );
};

export default CartBadge;
