import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind entry
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: for measuring app performance
reportWebVitals();
