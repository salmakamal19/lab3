import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 

// Render the App component to the DOM
const rootElement = document.getElementById('root'); 
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
