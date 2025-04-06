import React from 'react';
import Cart from './Page/Cart';
import CartProvider from "./Provider/CartProvider"; 

const App = () => {
  return (
   <CartProvider>
      <div className="app">
        <Cart />
      </div>
    </CartProvider>

  );
};

export default App;
